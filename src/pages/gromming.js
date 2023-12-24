import React from 'react'
import  Navbar from "../components/navbar";
import About from '../components/about';
import gr from '../assets/images/gr.jpg'
import Card from '../components/card'
import styles from './gromming.module.css'
import Work from '../components/howitworks';
import Footer from '../components/footer'


function Gromming() {
  return (
    <div >
        <Navbar></Navbar>
        <div className={styles.i}>
            <h2>Get Gromming Service with us </h2>
            <h2>Contact now </h2>
        </div>
        
        <About></About>
        <div className="cards">
       <div className="box"> <Card></Card></div>
        <div className="box"><Card></Card></div>
        <div className="box"><Card></Card></div>
        <div className="box"><Card></Card></div>
      </div>

      <Work></Work>
      <Footer></Footer>


       

    </div>
  )
}

export default Gromming;