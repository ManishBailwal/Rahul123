import React from 'react'
import  Navbar from "../components/navbar";
import career from "../assets/images/career.jpg";
import styles from './career.module.css';
import Why from '../components/whyjoin'
import Footer from '../components/footer'

function Career() {
  return (
    <div >
        <Navbar></Navbar>
        <div className={styles.im}>
          <h1>Welcome to Animal Basket</h1>
          <h1>We are hiring </h1>
         </div>

         <Why></Why>
         <Footer></Footer>


    </div>

  )
}

export default Career;