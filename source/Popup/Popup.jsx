import * as React from "react";
import browser from "webextension-polyfill";
import {Router, goTo} from "react-chrome-extension-router"
// import Register from "../components/register/index.jsx"
// import bg_home from "../assets/img/bg_login.png"
import Register from '../components/Register/index.jsx';
import Login from '../components/Login/index.jsx';
import Import from '../components/Import/index.jsx';

import "./styles.scss";

function openWebPage(url) {
  return browser.tabs.create({ url });
}

const Popup = () => {
  return (
    <div className="popupContainer">
      <Router>
      <div className="centralisedLogin">
        {/* <div className="eurus_logo">
          <img src="../assets/img/Eurus_Vertical_logo.png" alt="logo" />
        </div> */}
      </div>
      <div className="home_screen_bg">
        <div style={{ textAlign: "center" }}>
          <button
            id="home_button"
            type="button"
            onClick={() => goTo(Register, {})}
          >
            Create an Account
          </button>
          <button
            id="home_button"
            type="button"
            onClick={() => goTo(Login, {})}
          >
            Login
          </button>
          <p style={{ color: "white" }}>OR</p>
          <button
            id="home_button_two"
            type="button"
            // onClick={() => {
            //   return openWebPage("options.html");
            // }}
            onClick={() => goTo(Import, {})}
          >
            Import Wallet
          </button>
        </div>
      </div>
      </Router>
    </div>
  );
};

export default Popup;
