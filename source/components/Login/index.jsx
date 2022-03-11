import React from "react";
import goBack from 'react-chrome-extension-router';

const Icon = {
  position: "fixed",
  top: 10,
  left: 10,
};

const Login = () => {

  // const [email, setEmail] = useState([]);
  // const [password, setPassword] = useState([]);

  // useEffect(() => {}, []);

  // function loginApi() {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const loginBySignatureResult = await loginBySignature(email, password);
  //       if (loginBySignatureResult && loginBySignatureResult.returnCode === 0) {
  //         window.alert("Signed in")
  //       }
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   };
  // }

  return (
    <div className="layout">
      {/* <button className="ui icon button" style={Icon} onClick={() => goBack()} />
        <i class="angle left icon"></i>
      </button>
      <div className="centered">
        <div className="ui small header">Login</div>
      </div> */}
      <form className="ui form">
        <div className="field">
          <label>Email</label>
          <input type="text" name="email" placeholder="Enter Email" />
        </div>
        <div className="field">
          <label>Login Password</label>
          <input type="text" name="password" placeholder="Enter Password" />
        </div>
        <a>Forgot Password</a>
        <button id="home_button_two" type="submit">
          Login
        </button>
  
      <div className="centered">
        <p>
          Don't have an account? <a href=""> Register</a>
        </p>
      </div>
      </form>
    </div>
  );
};

export default Login;
