import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Post from "../Post/Post";
import "./Posts.css";
import { getTimelinePosts } from "../../actions/PostsAction";

const Posts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.AuthReducer.authData);
  const { posts, loading } = useSelector((state) => state.PostReducer);

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);

  return (
    <div className="Posts">
      {loading
        ? "Fetching posts..."
        : posts.map((post, index) => {
            return <Post data={post} key={index} />;
          })}
    </div>
  );
};

export default Posts;
