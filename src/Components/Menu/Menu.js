import React from "react";
import styles from "./Menu.module.css";
import MenuData from "./Menu_Config.json";

const Menu = ({ scrollToSection, homeRef, aboutRef, packageRef, contactRef }) => {
  // Map section IDs to their respective refs
  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    packages: packageRef,
    contact: contactRef
  };

  return (
    <div className={styles.MenuContainer}>
      <ul>
        {MenuData.map((MenuItem, ind) => (
          <li
            key={ind}
            className={styles.MenuItem}
            onClick={() => scrollToSection(sectionRefs[MenuItem.id])} // Attach click event
          >
            {MenuItem.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
