import { ethers } from 'ethers';

export function generateWallet(secret, mnemonic = '') {
    // let mnemonic2 = process.env.VUE_APP_LOGIN_MNEMONIC;
    let mnemonic2 = 'carbon shuffle shoot knock alter bottom polar maple husband poet match spring';
    var path = "m/44'/60'/0'/0/0";
    if (mnemonic != '') {
        mnemonic2 = mnemonic;
        path = "m/44'/60'/1'/0/0";
    }
    let mnemonicWallet2 = ethers.utils.HDNode.fromMnemonic(mnemonic2, secret);
    mnemonicWallet2 = mnemonicWallet2.derivePath(path);
    let wallet = {
        walletAddress: mnemonicWallet2.address,
        privateKey: mnemonicWallet2.privateKey,
        publicKey: mnemonicWallet2.publicKey
    }
    console.log(wallet)
    return wallet;
}
