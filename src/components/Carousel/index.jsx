/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/no-typos */
import React, { useState, useEffect } from 'react';
import { GrPrevious, GrNext } from 'react-icons/gr';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

export default function Carousel({ pictures }) {
      console.log('pictures length:', pictures.length);
      const [currentIndex, setCurrentIndex] = useState(0);
      //   console.log('currentIndex:', currentIndex);
      function handlePrev() {
            setCurrentIndex(currentIndex - 1);
            if (currentIndex <= 0) {
                  setCurrentIndex(pictures.length - 1);
            }
      }
      function handleNext() {
            setCurrentIndex(currentIndex + 1);
            if (currentIndex >= pictures.length - 1) {
                  setCurrentIndex(0);
            }
      }

      return (
            <div>
                  <div className={styles.carousel}>
                        {pictures.length > 1 ? (
                              <div className={styles.carouselNavPrev}>
                                    <GrPrevious onClick={handlePrev} />
                              </div>
                        ) : null}
                        <img src={pictures[currentIndex]} alt="" />
                        {pictures.length > 1 && (
                              <div className={styles.carouselNavNext}>
                                    <GrNext onClick={handleNext} />
                              </div>
                        )}
                  </div>
            </div>
      );
}
Carousel.propTypes = {
      // eslint-disable-next-line react/forbid-prop-types
      pictures: PropTypes.array,
};
Carousel.defaultProps = {
      pictures: [],
};
