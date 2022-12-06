/* eslint-disable no-console */
import React from 'react';
// import PropTypes from 'prop-types';
import { IoIosStar } from 'react-icons/io';
import styles from './styles.module.css';

export default function Rating({ number }) {
      const ratingState = [false, false, false, false, false];
      const ratingLength = parseInt(number, 10);
      for (let i = 0; i < ratingLength; i += 1) {
            ratingState[i] = true;
      }

      return (
            <div className={styles.propertyProfileRating}>
                  <IoIosStar
                        className={
                              ratingState[0]
                                    ? styles.propertyProfileRatingItemActive
                                    : null
                        }
                  />
                  <IoIosStar
                        className={
                              ratingState[1]
                                    ? styles.propertyProfileRatingItemActive
                                    : null
                        }
                  />
                  <IoIosStar
                        className={
                              ratingState[2]
                                    ? styles.propertyProfileRatingItemActive
                                    : null
                        }
                  />
                  <IoIosStar
                        className={
                              ratingState[3]
                                    ? styles.propertyProfileRatingItemActive
                                    : null
                        }
                  />
                  <IoIosStar
                        className={
                              ratingState[4]
                                    ? styles.propertyProfileRatingItemActive
                                    : null
                        }
                  />
            </div>
      );
}
