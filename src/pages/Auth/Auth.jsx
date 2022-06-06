import React from "react";

import "./Auth.css";
import SigUp from "./SignUp";
import LogIn from "./Login";
const Auth = () => {
  return (
    <div className="Auth">
      <div className="AuthPageLeft">
        <img src="" alt="" />
        <div className="AppName">
          <h1>No Name</h1>
          <h6>Twitterを模したSNSサービスです。名前はないです。</h6>
        </div>
      </div>
      {/* <SignUp /> */}
      <LogIn />
    </div>
  );
};

export default Auth;
