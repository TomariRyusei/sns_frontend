import React from "react";

import "./Home.css";
import ProfileSide from "../../components/ProfileSide/ProfileSide";

const Home = () => {
  return (
    <div className="Home">
      <ProfileSide />
      <div className="PostSide">Posts</div>
      <div className="RightSide">RightSide</div>
    </div>
  );
};

export default Home;
