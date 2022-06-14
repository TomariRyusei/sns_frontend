import React from "react";

import "./Followers.css";
import { Followers } from "../../data/FollowersData";

const FollowersCard = () => {
  return (
    <div className="FolloersCard">
      <h3>フォロワー</h3>
      {Followers.map((follower, index) => {
        return (
          <div className="Follower" key={index}>
            <div>
              <img src={follower.img} alt="" className="FollowerImage" />
              <div className="FollowerName">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className="button FollowButton">フォロー</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;
