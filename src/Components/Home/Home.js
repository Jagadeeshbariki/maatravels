import React from 'react';
import styles from './Home.module.css';
import Carasole from '../Carasole/Carasole';
import Banner from './HeroBanner/Banner';
const Home = () => {
  return (
    <div className={`${styles.HomeContainer}`}>
      <div className={styles.CarouselCantainer}>
       <Carasole/>
      </div>
      <Banner/>
    </div>
  )
}

export default Home
