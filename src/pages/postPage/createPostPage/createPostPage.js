import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../../store/PostsSlice";

function CreatePostPage() {
  const dispatch = useDispatch()
  const { message } = useSelector(state => state.postsReducer)
  const [form, setForm] = useState({})

  const changeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const submit = (e) => {
    e.preventDefault()
    dispatch(createPost(form))
  }
  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" name="title" onChange={changeForm} />
        <textarea cols="20" rows="10" name="description"
          onChange={changeForm}></textarea>
        <button>createpost</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  )
}

export default CreatePostPage