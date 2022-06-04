import React from "react";

import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import "./ProfileCard.css";

const ProfileCard = () => {
  const ProfilePage = true;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>
      <div className="ProfileName">
        <span>泊 龍聖</span>
        <span>web開発エンジニア</span>
      </div>
      <div className="FollowStatus">
        <hr />
        <div>
          <div className="Follow">
            <span>7777</span>
            <span>フォロワー</span>
          </div>
          <div className="vl"></div>
          <div className="Follow">
            <span>245</span>
            <span>フォロー中</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="Follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
