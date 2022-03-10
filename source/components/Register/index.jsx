import React from "react";
import { goTo, goBack } from "react-chrome-extension-router";
import Centralized from "../Register/Centralized";
import Decentralized from "../Register/Decentralized";

const Icon = {
  position: "fixed",
  top: 10,
  left: 10,
};


const Cards = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
};

const cardSize = {
  height: "20vh",
  cursor: "pointer",
  // verticalAlign: 'middle'
};

const Register = () => {
  return (
    <div className="layout">
      <button
        className="ui icon button"
        style={Icon}
        onClick={() => goBack()}
      />
      <i class="angle left icon"></i>
      <div className="centered">
        <div className="ui small header">Create Wallet</div>
      </div>
      <div style={{ textAlign: "center", padding: "20px" }}>Select Type</div>
      <div style={Cards}>
        <div className="ui cards">
          <div className="card" style={cardSize}>
            <div className="content" onClick={() => goTo(Centralized, {})}>
              {/* <img
                class="right floated mini ui image"
                src="/images/avatar/large/elliot.jpg"
              /> */}
              <div className="header">Custodial</div>
              <div className="description">Recommend Novice User</div>
            </div>
          </div>
          <div className="card" style={cardSize}>
            <div className="content" onClick={() => goTo(Decentralized, {})}>
              {/* <img
                class="right floated mini ui image"
                src="/images/avatar/large/jenny.jpg"
              /> */}
              <div className="header">Decentralized</div>
              <div className="description">Experienced Users Recommended</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
