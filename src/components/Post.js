import React from "react";
import { useDispatch } from "react-redux";
import { showMoreInfoPost } from "../store/PostsSlice";


function Post({ postInfo }) {
  const dispatch = useDispatch();

  const showMoreInfo = () => {
    dispatch(showMoreInfoPost(postInfo))
  }
  return (
    <>
      <div >
        <h1>{postInfo.title}</h1>
        {postInfo.showMoreInfo && (
          <>
            <div className="moreInfo">
              <p>ID: {postInfo.id}</p>
              <p>Body: {postInfo.body}</p>
            </div>
          </>
        )}
        <button onClick={showMoreInfo}>more info</button>
      </div>
      <p>-------------------</p>
    </>
  )
}

export default Post