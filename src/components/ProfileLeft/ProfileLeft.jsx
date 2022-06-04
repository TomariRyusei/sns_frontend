import React from "react";

import InfoCard from "../InfoCard/InfoCard";
import FollowersCard from "../FollowersCard/FollowersCard";
import Search from "../Search/Search";

const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
      <Search />
      <InfoCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileLeft;
