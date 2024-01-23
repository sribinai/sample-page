import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import './App.css';
import HelloWorldComponent from './components/header'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import {Route, Link, Routes} from 'react-router-dom';
import logo from './components/logo.png'



function App() {
  return (
    <div className="App">
     <div className="home">Home</div>
     <div className='header1'>
        <div className='text'>
        <p>massshipping@mail.com | +1 (333) 000-0000</p>
        </div>
        <div className='button1'>
        <Button variant="primary">Get Quote</Button>
        </div>
     </div>
    
    <div className='header2'>
     <div className='logo'>
      
      <img src={logo} alt="Logo" style={{ minWidth: "100px", maxWidth: "300px", marginBottom: "10px" }}/>
      
     </div>

     <div className="menu">
      <>
			<nav>
				<ul>
					<li>
						<Link to="/">HOME</Link>
					</li>
					<li>
						<Link to="/about">ABOUT</Link>
					</li>
          <li>
						<Link to="/about">SERVICES</Link>
					</li>
          <li>
						<Link to="/about">GALLERY</Link>
					</li>
          <li>
						<Link to="/about">CONTACT US</Link>
					</li>	
				</ul>
			</nav>

			<Routes>
				<Route path="/" element={<Home />} />
			  <Route path="/about" element={<About />} />
			</Routes>
    	</>
      </div>
    </div>
     
    </div>
  );
} 

export default App;
