import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home  from "./Home"
import Blog from "./Blog"
import Contact from "./Contact"
import Profile from "./Profile"
import BlogDetail from './BlogDetail';
function App() {
  return (
    <div className="App">
      <div className='container' >
    <img className='img' src="react.png" alt="react" width="100%" />
      </div>
    <nav className='nap' >
      <ul className='ul' >
        <li className='li' ><Link className='active' to="/">🏠Home</Link></li>
        <li className='li' ><Link className='anu'  to="/profile">Profile</Link></li>
        <li className='li' ><Link className='anu'  to="/contact">Contact</Link></li>
        <li className='li' ><Link className='anu'  to="/blog">News</Link></li>
      </ul> 
    </nav>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="blog" element={<Blog/>}/>
      <Route path="blog/:id" element={<BlogDetail/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="profile" element={<Profile/>}/>
     </Routes>
    </div>
  );
}

export default App;
