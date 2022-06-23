import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Post from "../Post/Post";
import "./Posts.css";
import { getTimelinePosts } from "../../actions/PostsAction";
import { useParams } from "react-router-dom";

const Posts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.AuthReducer.authData);
  let { posts, loading } = useSelector((state) => state.PostReducer);
  const params = useParams();

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);

  if (!posts) return "No posts";

  if (params.id) posts = posts.filter((post) => post.userId === params.id);

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
