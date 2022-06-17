import * as PostsApi from "../api/PostsRequests";

export const getTimelinePosts = (id) => async (dispatch) => {
  dispatch({ type: "GETTING_POSTS_START" });
  try {
    const { data } = await PostsApi.getTimelinePosts(id);
    dispatch({ type: "GETTING_POSTS_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "GETTING_POSTS_FAIL" });
  }
};
