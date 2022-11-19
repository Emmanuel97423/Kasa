import React from 'react';
import logo from '../../assets/img/bottom_logo.png';
import styles from './styles.module.css';

export default function Footer() {
      return (
            <div className={styles.footer}>
                  <img src={logo} alt="bottom_logo" />
                  <p>2022 Kasa.All rights reserved</p>
            </div>
      );
}
