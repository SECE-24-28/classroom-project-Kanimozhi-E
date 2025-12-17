import logo from './logo.svg';
import './App.css';
import { Link, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import About from './About';  
import Contact from './Contact';
import Home1 from './Home';
import Books from './Books';
import User from './User';

function App() {
  return(
    <BrowserRouter>
    <h1>I'm in App</h1>
    <p>Refresh</p>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/About">About</a></li>
      <li><a href="/Contact">Contact</a></li>
    </ul>
    <p>Not Refresh</p>
    <ul>
      <Link to="/"><li>Home</li></Link>
      <Link to="/About"><li>About</li></Link>
      <Link to="/Contact"><li>Contact</li></Link>
      <Link to="/user/1"><li>user 1</li></Link>
       <Link to="/user/2"><li>user 2</li></Link>
      <Link to="/book/newbook"><li>new books</li></Link>
       <Link to="/book/oldbook"><li>old books</li></Link>
    </ul>
    <Routes>
    <Route path="/" element={<Home1/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/book">
         <Route path="newbook" element={<Books/>}></Route>
          <Route path="oldbook" element={<Books/>}></Route>
    </Route>
     <Route path="/user/:a" element={<User/>}>  </Route>
    </Routes>

     </BrowserRouter>
  )
}

export default App;
