import React from "react";

import Search from "../Search/Search";
import ProfileCard from "../ProfileCard/ProfileCard";
import FollowersCard from "../FollowersCard/FollowersCard";
import "./ProfileSide.css";

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
      <Search />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileSide;
