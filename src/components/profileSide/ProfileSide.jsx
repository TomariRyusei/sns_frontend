import React from "react";

import Search from "../Search/Search";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./ProfileSide.css";

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
      <Search />
      <ProfileCard />
    </div>
  );
};

export default ProfileSide;
