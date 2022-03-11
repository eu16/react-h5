import React from "react";
import { goBack } from "react-chrome-extension-router";

const Icon = {
    position: "fixed",
    top: 15,
    left: 10,
    fontSize: "25px",
    color: "white",
  };
  

const CentralizedRegister = () => {
  return (
    <div className="layout">
        <i className="angle left icon" style={Icon} onClick={() => goBack()}></i>
      <div className="centered">
        <div className="ui small header">Register</div>
      </div>
      <form className="ui form">
        <div className="field">
          <label>Email</label>
          <div className="field">
            <input type="text" name="email" placeholder="Enter Email" />
          </div>
        </div>
        <div className="field">
          <h5 className="ui dividing header">Login Password</h5>
          <div className="field">
            <label>Login Password</label>
            <input type="text" name="password" placeholder="Login Password" />
          </div>
          <div className="field">
            <label>Confirm Password</label>
            <input
              type="text"
              name="confirm_password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="field">
            <h5 className="ui dividing header">Payment Password</h5>
          </div>
          <div className="field">
            <label>Payment Password</label>
            <input
              type="text"
              name="pp_password"
              placeholder="Payment Password"
            />
          </div>
          <div className="field">
            <label>Confirm Payment Password</label>
            <input
              type="text"
              name="confirm_pp_password"
              placeholder="Confirm Payment Password"
            />
          </div>
        </div>
        <div className="ui checkbox">
          <input type="checkbox" name="termsAgreed" />
          <label>
            By creating an account, you agree to our{" "}
            <u>
              <b>Terms and Conditions</b>
            </u>
          </label>
        </div>
        <button id="home_button_two" type="submit">
          Get the Verify Code by above email
        </button>
      </form>
      {/* </div> */}
    </div>
  );
};

export default CentralizedRegister;
