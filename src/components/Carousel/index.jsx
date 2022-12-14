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
      const [currentIndex, setCurrentIndex] = useState(0);

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
                                    <GrPrevious
                                          onClick={handlePrev}
                                          className={styles.GrBtn}
                                    />
                              </div>
                        ) : null}
                        <img src={pictures[currentIndex]} alt="" />
                        {pictures.length > 1 && (
                              <div className={styles.carouselNavNext}>
                                    <GrNext
                                          onClick={handleNext}
                                          className={styles.GrBtn}
                                    />
                              </div>
                        )}
                        <div className={styles.picturesCounter}>
                              {currentIndex + 1}/{pictures.length}
                        </div>
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
