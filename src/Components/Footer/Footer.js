import React from 'react';
import styles from './Footer.module.css';
import MenuData from '../Menu/Menu_Config.json';
import FooterData from './FooterConfig.json';

const Footer = ({ scrollToSection, homeRef, aboutRef, packageRef, contactRef }) => {
// Map section IDs to their respective refs
  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    packages: packageRef,
    contact: contactRef
  };

  return (
    <div className={`${styles.FooterContainer}`}>
        <div className={`${styles.MenuContainer}`}> 
            {
                MenuData.map((MenuItem, ind)=>{
                    return <p key={ind} onClick={() => scrollToSection(sectionRefs[MenuItem.id])} >{MenuItem.name}</p>
                })
            }
        </div>
        <div>
          <h4>Location</h4>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106651.88947761078!2d78.43720114263908!3d17.315734192480626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba1fe3f90e8af%3A0x893f1c04d92821c!2sMaa%20Tourism%20Company!5e1!3m2!1sen!2sin!4v1741022840451!5m2!1sen!2sin" width="400" height="150"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='location'></iframe>
        </div>
        <div>
          <h4>About Developer</h4>
          {
            FooterData.map((Foot,ind)=>{
              return <div key={ind} className={styles.aboutDev}>
                <p><a href={Foot.web} target="_blank"  rel="noreferrer">{Foot.name}</a></p>
                <p><a href='https://wa.me/916300963789?text=I%20need%20a%20website%20for%20my%20Business' target="_blank"  rel="noreferrer">{Foot.phone}</a></p>
                <p><a href='mailto:vyomanautjagadeesh@gmail.com?subject=Website Inquiry&body=I%20need%20a%20website%20for%20my%20business.' target="_blank"  rel="noreferrer">{Foot.email}</a></p>
                </div>
            })
          }
        </div>
         
    </div>
  )
}

export default Footer
