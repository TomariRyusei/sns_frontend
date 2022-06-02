import React from "react";

import Post from "../Post/Post";
import "./Posts.css";
import { PostsData } from "../../Data/PostsData";

const Posts = () => {
  return (
    <div className="Posts">
      {PostsData.map((post, index) => {
        return <Post data={post} key={index} />;
      })}
    </div>
  );
};

export default Posts;
