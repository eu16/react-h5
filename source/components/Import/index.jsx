import React from "react";
import { goBack } from "react-chrome-extension-router";

const Icon = {
  position: "fixed",
  top: 15,
  left: 10,
  fontSize: "25px",
  color: "white",
};

const Login = () => {
  return (
    <div className="layout">
      <i className="angle left icon" style={Icon} onClick={() => goBack()}></i>
      <div className="centered">
        <div className="ui small header">Import Wallet</div>
      </div>
      <div className="centered">
        <div id="importWalletTab">
          <div class="ui secondary menu">
            <a class="active item" data-tab="seedPhrase">
              Seed Phrase
            </a>
            <a class="item" data-tab="key">
              Private Key
            </a>
          </div>
          <div class="ui active tab segment" data-tab="seedPhrase">
            <div class="ui input">
              <input type="text" placeholder="Enter your seed phrase in correct order and separate each word with space" />
            </div>
          </div>
          <div class="ui tab segment" data-tab="key">
            <div class="ui input">
              <input type="text" placeholder="Enter your private key" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
