import React from "react";
import { goBack } from "react-chrome-extension-router";

const Icon = {
  position: "fixed",
  top: 15,
  left: 10,
  fontSize: "25px",
  color: "white",
};

const DecentralizedRegister = () => {
  return (
    <div className="layout">
      <i className="angle left icon" style={Icon} onClick={() => goBack()}></i>
      <div className="centered">
        <div className="ui small header">Create Wallet Locker</div>
      </div>
      <form className="ui form">
        <div className="field">
          <label>New Password</label>
          <input type="text" name="email" placeholder="Enter Password" />
        </div>
        <div className="field">
          <label>Confirm Password</label>
          <input type="text" name="password" placeholder="Enter Password" />
        </div>
        <button id="home_button_two" type="submit">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default DecentralizedRegister;
