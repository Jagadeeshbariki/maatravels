import React from 'react'
import styles from './Banner.module.css';
import Tourist from "../../../Assets/Tourist.png";

const Banner = () => {
  return (
    <div className={`${styles.BannerContainer}`}>
     <h2>Explore the World with Us</h2>
     <h3><i>Customized tours, great deals, and lifetime experiences!</i></h3>
     <div className={`${styles.BannerBody}`}>
        <img src={Tourist} alt='Tourist' width={500} className={styles.BanngerImage}/>
        <p>Maa Tourism offers exceptional travel experiences with personalized planning and unmatched service. We ensure every journey is seamless, memorable, and better than what others provide, turning your travel dreams into cherished memories.</p>
     </div>
     
    <button className={`${styles.JoiningBtn}`}><a href='https://wa.me/9642841566?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20travel%20services' target='_blank' rel='noreferrer'>Trip With Us</a></button>
    </div>
  )
}

export default Banner
