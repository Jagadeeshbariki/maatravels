import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./Scroll.module.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Track scrolling to determine when to show the button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 150) { // Adjust 150px based on navbar height
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {isVisible && (
        <button className={styles.scrollToTop} onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
