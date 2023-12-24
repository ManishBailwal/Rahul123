import React from 'react'
import styles from './howitworks.module.css'
import work from '../assets/images/work.svg'

const Work=()=>{

    return(
        <div>
            <h1 className={styles.heading}>How does it Work?</h1>
            
        <div className={styles.container}>
            
            <div className={styles.first}>
                <img src={work}></img>
            </div>
            <div className={styles.second}>

                <div className={styles.sec}>
                    <h2>Planning Idea</h2>
                    <p>Once you have decided , collaborative planning session comes in,
                         to help identify and prioritize the most important aspects of the project,
                         as well as brainstorm possible solutions.</p>
                
                </div>
                <div className={styles.sec}>
                    <h2>Developing Product</h2>
                    <p>Once the plans is identified and finalised, 
                        we will start to devise a solution. This involves writing code,
                         designing, and testing the software.</p>
                </div>
                <div className={styles.sec}>
                    <h2>Deliver to Client</h2> 
                    <p>Once the product has been tested and is ready to go,
                         we deliver it to you and you can launch it and make it
                         available to the world.</p>
                    </div>
            </div>
        </div>
        </div>
    )



}

export default Work;