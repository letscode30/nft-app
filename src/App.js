
import React from 'react'
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects'
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Termsandconditions from './pages/termsAndconditions/Termsandconditions';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';


const App = () => {
  return (
    <>

     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/projects' element = {<Projects/>}/>
      <Route path='/terms-and-conditions' element = {<Termsandconditions/>}/>
      <Route path='/contact' element = {<Contact/>}/>
      <Route path='/about' element = {<About/>}/>


     </Routes>
     <Footer/>
    </>
   
  )
}

export default App

   


  
  
    
   
  


