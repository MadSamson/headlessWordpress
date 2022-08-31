import './App.css';
import Posts from './components/Posts'
import Post from './components/Post'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='posts-container'>
      <Routes>
        <Route path='/' element={<Posts/>}/>
        <Route path='/post/:id' element={<Post/>}/>
      </Routes>
    </div>
  );
}

export default App;
