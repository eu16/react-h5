export function createEurusDeviceObject(email = "") {
    let _email = 'default';
    if (email) {
        _email = email;
    } else if (getEmail()) {
        _email = getEmail();
    }
    let eurusObject = createEurusObjectByEmail(_email);
    return eurusObject;
}