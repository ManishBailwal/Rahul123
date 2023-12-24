import React from "react";
import styles from "./nav.module.css";
import logo from "../assets/images/logo.jpeg";
import Consultancy from "./../pages/consultancy";



import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className={styles.main_nav}>
        <img src={logo} />

        <div className={styles.menu}>
          <Link to="/" className={styles.li}>
            Home
          </Link>

          <div className={styles.li}>
            Services
            <div className={styles.submenu}>
              <Link to="/consultancy" className={styles.subitems}>
                Consultancy
              </Link>
              <br></br>
              <Link to="/gromming" className={styles.subitems}>
                Grooming
              </Link>
            </div>
          </div>

          <Link to="/career" className={styles.li}>
            Careers
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
