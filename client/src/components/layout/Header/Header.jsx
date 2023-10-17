import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <img
        className={styles.headerImg}
        src="/assets/images/header_img.jpg"
        alt="header design"
      />
      <div className={styles.overlay}>
        <h1 className={styles.headerText}>Walk with style</h1>
        <h3 className={styles.subHeaderText}>
          Explore Luxury Rolex and Patek Phillipe Watches
        </h3>
      </div>
    </header>
  );
};

export default Header;
