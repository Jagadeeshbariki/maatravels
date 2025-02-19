import React from 'react';
import styles from "./Menu.module.css";
import MenuData from './Menu_Config.json';

const Menu = () => {
  return (
    <div className={`${styles.MenuContainer}`}>
      <ul>
        {
            MenuData.map((MenuItem, ind)=>{
                return <li className={`${styles.MenuItem}`}>{MenuItem.name}</li>
            })
        }
      </ul>
    </div>
  )
}

export default Menu
