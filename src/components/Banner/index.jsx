import React from 'react';
import styles from './Banner.module.css';
import bannerImg from '../../assets/img/banner_01.jpg';

export default function Banner() {
      return (
            <div className={styles.banner}>
                  <h1>Chez vous, partout et ailleurs</h1>
                  <img src={bannerImg} alt="banner" />
            </div>
      );
}
