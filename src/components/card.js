import React from 'react'
import logo from '../assets/images/logo.jpeg'
import styles from './card.module.css'

function Card() {
  return (
    <div className={styles.upc}>

        <div className={styles.gradiant}></div>
        <div className={styles.profile_down}>
            <img src={logo}/>
            <div className={styles.profile_title}>Dr Manish </div>
            <div className={styles.profile_description}>Hi ,this is Manish Bailwal  , a professional vet
             feel free to connect with us , we will take care of you 
            </div>
        </div>
        
    </div>
  )
}

export default Card;