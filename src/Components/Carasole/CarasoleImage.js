import React from 'react';
import styles from './Carousel.module.css';

const CarasoleImage = ({text, imgUrl}) => {
  return (
    
      <div className={styles.CarouselImgContainer} >
        <img className={`${styles.CarouselImg}`} src={imgUrl} alt={text} />
      </div>
    
  )
}

export default CarasoleImage
