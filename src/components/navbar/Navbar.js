import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>




<nav class="navbar navbar-expand-lg bg">
  <div class="container-fluid">
    <img src='/images/logo3.jpg' alt='logo' className='logo'/>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
        <li class="nav-item">
          <Link to="/" class="nav-Link active white-color" >Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-Link active white-color" to="/projects">Projects</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-Link active white-color" to="/about">About Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-Link active white-color" to="/terms-and-conditions">Terms&Conditions</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-Link active white-color" to="/contact">contact</Link>
        </li>
        
        
        
      </ul>
      <form class="d-flex" role="search">
        
        <button class="btn btn-navbar" type="submit">Contact Us</button>
      </form>
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar
