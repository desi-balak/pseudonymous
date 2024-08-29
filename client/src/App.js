import './App.css';
import FeedPage from './components/FeedPage/FeedPage';
import Post from './components/Post/Post';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './pages/Login';

function App() {
  return (    
    <Router>
       <Routes>
        <Route path="/" exact element={<Login/>}  /> 
        <Route path="/post/:id" exact Component={Post} />
       </Routes>

    </Router>
  );
}

export default App;
