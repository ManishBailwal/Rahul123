import React from "react";
import styles from "./hero.module.css";
import dogvideo from "../assets/videos/dogvideo.mp4";

function Hero() {
  return (
    <div className={styles.hero_section}>
      <div className={styles.v}>
        <video
          autoPlay
          loop
          muted
          playsInline
          width="100%"
          height="auto"
          className="bg-clip"
        >
          <source
            src={require("../assets/videos/dogvideo.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.hero}>
        <h1>Explore More </h1>
        <a href="#">Download our app</a>
      </div>
      <div className={styles.none}></div>
    </div>
  );
}

export default Hero;
