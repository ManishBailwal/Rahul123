import React from 'react'
import styles from './footer.module.css'

function Footer(){
    return (
        <div className={styles.foot}>
            <div className={styles.fo}> 
            <h5>abc 789799y879</h5>
            <h5>Dehradun, Uttrakhand</h5>
            <h5>India</h5>
            </div>
            <div className={styles.fo}>
            <h5>Home</h5>
            <h5>Career</h5>
            <h5>Consultancy</h5>
            </div>
            <div className={styles.fo}>
            <h5>989794794793</h5>
            <h5>abcdefgh@gmail.com</h5>
            <h5>8397979759849</h5>
            </div>

        </div>
    );
}

export default Footer;