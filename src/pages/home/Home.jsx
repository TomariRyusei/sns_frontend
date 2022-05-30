import React from "react";

import "./Home.css";
import ProfileSide from "../../components/profileSide/ProfileSide";

const Home = () => {
  return (
    <div className="home">
      <ProfileSide />
      <div className="postSide">Posts</div>
      <div className="rightSide">RightSide</div>
    </div>
  );
};

export default Home;
