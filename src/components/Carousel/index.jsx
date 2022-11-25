/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/no-typos */
import React, { useState, useEffect } from 'react';
import { GrPrevious, GrNext } from 'react-icons/gr';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

export default function Carousel({ props }) {
      const [currentIndex, setCurrentIndex] = useState(0);
      //   console.log('currentIndex:', currentIndex);
      function handlePrev() {
            setCurrentIndex(currentIndex - 1);
            if (currentIndex <= 0) {
                  setCurrentIndex(props.length - 1);
            }
      }
      function handleNext() {
            setCurrentIndex(currentIndex + 1);
            if (currentIndex >= props.length - 1) {
                  setCurrentIndex(0);
            }
      }

      return (
            <div>
                  <div className={styles.carousel}>
                        <div className={styles.carouselNavPrev}>
                              <GrPrevious color="white" onClick={handlePrev} />
                        </div>
                        <img src={props[currentIndex]} alt="" />
                        <div className={styles.carouselNavNext}>
                              <GrNext onClick={handleNext} />
                        </div>
                  </div>
            </div>
      );
}
Carousel.propTypes = {
      // eslint-disable-next-line react/forbid-prop-types
      props: PropTypes.array,
};
Carousel.defaultProps = {
      props: [],
};
