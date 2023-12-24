import React from 'react'
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import './home.css';
import Services from '../components/services';
import Footer from '../components/footer'
import About from '../components/about';
import Work from '../components/howitworks';


function Home() {
  return (
    
    <div  >
     <Navbar></Navbar>
     <Hero></Hero>
     <Services></Services>
     <About></About>
      
     <Work></Work>
     <Footer></Footer>
      
      
      
    
       </div>
    
  )
}

export default Home;