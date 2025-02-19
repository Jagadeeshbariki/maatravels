import React from 'react';
import styles from './Footer.module.css';
import MenuData from '../Menu/Menu_Config.json';

const Footer = () => {
  return (
    <div className={`${styles.FooterContainer}`}>
        <div className={`${styles.MenuContainer}`}> 
            {
                MenuData.map((MenuItem, ind)=>{
                    return <p>{MenuItem.name}</p>
                })
            }
        </div>
      
    </div>
  )
}

export default Footer
