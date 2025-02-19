import React from 'react'
import styles from './about.module.css';

const About = () => {
  return (
    <div className={styles.AboutContainer}>

        {/* Maintaining the Abount along with the photos */}
      <div className={styles.abountPara}>
        <p>As a company, we value our customers and treat them in a way that is truly impressive to ensure their vacations are truly comfortable and unique. All picturesque environment and caring services will undoubtedly leave you with great memories and yearning for more.</p>

        {/* <img className={`${styles.ParaImage} img-thumbnail`} src='https://res.cloudinary.com/davyumn8l/image/upload/v1739982885/Tourism_India_1_4gH4Nsu_u8zqob.jpg' alt='Tourist Explanation'/> */}
      </div>
      <div className={styles.abountPara}>
        <p>We provide worldwide bookings for Holiday Packages, Honeymoon Packages, Car Rentals,We offer wide-range of Holiday / Tour Packages to India, UAE and other countries in Middle East & Asia Pacific Region, for individuals, families and corporate travelers from India and Non-Resident Indian Community Overseas. </p>
      </div>
      <div className={styles.abountPara}>
        <p>With a vision to offer Holidays at lowest prices and also to provide seamless arrangements on the ground, we have partnered with best of the Destination Management Companies (DMCs) & Local Tour Operators in all the Holiday Destinations. Our experienced holiday makers design Standard Tour Packages and prepare customized itineraries for private groups.</p>
      </div>
      <p>Your Dream Destinations and Comforts Are Our Commitment...</p>
    </div>
  )
}

export default About
