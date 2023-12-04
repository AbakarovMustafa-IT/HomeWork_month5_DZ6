import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts, postsDelete } from '../../store/PostsSlice'
import Post from '../../components/Post'
import PostPreloader from '../../components/PostPreloader'
import { showMoreInfoPost } from '../../store/PostsSlice'


function PostPage() {
  const dispatch = useDispatch()

  const { posts, preloader, message } = useSelector(state => state.postsReducer)


  const getPostsFunc = () => {
    dispatch(getPosts())
  }

  useEffect(() => {
    getPostsFunc()
  }, [])
  return (
    <>
      <button onClick={getPostsFunc}>get posts</button>
      <button onClick={() => dispatch(postsDelete())}>delete all</button>
      {preloader ? <PostPreloader />
        : message ?
          <div>
            <h2>{message}</h2>
            {posts.map(post => <Post key={post.id} postInfo={post} />)}
          </div> : <></>
      }
    </>
  )
}

export default PostPage