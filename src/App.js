import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostPage from './pages/postPage/PostPage';
import CreatePostPage from './pages/postPage/createPostPage/createPostPage';



const App = () => {
  return (
    <div className='App'>
      <PostPage />
      {/* <CreatePostPage /> */}
    </div >
  )
};

export default App;
