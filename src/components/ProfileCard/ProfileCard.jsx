import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./ProfileCard.css";

const ProfileCard = ({ location }) => {
  const { user } = useSelector((state) => state.AuthReducer.authData);
  const posts = useSelector((state) => state.PostReducer.posts);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img
          src={
            user.coverPicture
              ? serverPublic + user.coverPicture
              : serverPublic + "defaultCover.jpg"
          }
          alt=""
        />
        <img
          src={
            user.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultProfile.png"
          }
          alt=""
        />
      </div>
      <div className="ProfileName">
        <span>
          {user.lastname} {user.firstname}
        </span>
        <span>{user.work ? user.work : ""}</span>
      </div>
      <div className="FollowStatus">
        <hr />
        <div>
          <div className="Follow">
            <span>{user.followings.length}</span>
            <span>フォロー中</span>
          </div>
          <div className="vl"></div>
          <div className="Follow">
            <span>{user.followers.length}</span>
            <span>フォロワー</span>
          </div>

          {location === "profilePage" && (
            <>
              <div className="vl"></div>
              <div className="Follow">
                <span>
                  {posts.filter((post) => post.userId === user._id).length}
                </span>
                <span>投稿</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {location === "profilePage" ? (
        ""
      ) : (
        <span>
          <Link
            to={`/profile/${user._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            My Profile
          </Link>
        </span>
      )}
    </div>
  );
};

export default ProfileCard;
