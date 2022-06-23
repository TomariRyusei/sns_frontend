import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { followUser, unfollowUser } from "../../actions/UserAction";

const User = ({ person, index }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.AuthReducer.authData);
  const dispatch = useDispatch();

  // ユーザーのフォロワーに自分が含まれるかどうか
  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );

  const handleFollow = () => {
    following
      ? dispatch(unfollowUser(person._id, user))
      : dispatch(followUser(person._id, user));
    setFollowing((prev) => !prev);
  };

  return (
    <div className="Follower" key={index}>
      <div>
        <img
          src={
            publicFolder + person.profilePicture
              ? publicFolder + person.profilePicture
              : publicFolder + "defaultProfile.png"
          }
          alt="profile"
          className="FollowerImage"
        />
        <div className="FollowerName">
          <span>{person.name}</span>
          <span>@{person.username}</span>
        </div>
      </div>
      <button
        className={following ? "button UnfollowButton" : "button FollowButton"}
        onClick={handleFollow}
      >
        {following ? "フォロー解除" : "フォロー"}
      </button>
    </div>
  );
};

export default User;
