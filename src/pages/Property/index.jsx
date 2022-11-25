/* eslint-disable array-callback-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IoIosStar } from 'react-icons/io';
import axios from 'axios';
import propertyData from '../../db/db';
import styles from './styles.module.css';
import Collapse from '../../components/Collapse';
import Carousel from '../../components/Carousel';

export default function Property() {
      const [property, setProperty] = useState([]);
      const [tags, setTags] = useState([]);
      const [host, setHost] = useState([]);
      const [starNumber, setStarNumber] = useState(property.rating);
      const [rating, setRating] = useState([false, false, false, false, false]);
      const params = useParams();

      async function fetchProperty() {
            try {
                  // propertyData.filter((item) => {
                  //       if (item.id === params.id) {
                  //             setProperty(item);
                  //             setTags(item.tags);
                  //             setHost(item.host);
                  //             setStarNumber(item.rating);
                  //             // setRating(item.rating);
                  //       }
                  // });
                  const propertyFetching = await axios.get('/db/dbJson.json');
                  propertyFetching.data.filter((item) => {
                        if (item.id === params.id) {
                              setProperty(item);
                              setTags(item.tags);
                              setHost(item.host);
                              setStarNumber(item.rating);
                              setRating(item.rating);
                        }
                  });
            } catch (error) {
                  console.log('error:', error);
            }
      }
      function handleRating() {
            const ratingState = [...rating];
            const ratingLength = Math.floor(starNumber) + 1;

            try {
                  for (let i = 0; i < ratingLength; i += 1) {
                        ratingState[i] = true;
                  }

                  setRating(ratingState);
                  console.log('ratingLength:', ratingLength);
                  console.log('starNumber:', starNumber);
            } catch (error) {
                  console.log('error:', error);
            }
      }
      // Start rating
      function ratingStar() {
            return (
                  <div className={styles.propertyProfileRating}>
                        <IoIosStar
                              className={
                                    rating[1]
                                          ? styles.propertyProfileRatingItemActive
                                          : null
                              }
                        />
                        <IoIosStar
                              className={
                                    rating[2]
                                          ? styles.propertyProfileRatingItemActive
                                          : null
                              }
                        />
                        <IoIosStar
                              className={
                                    rating[3]
                                          ? styles.propertyProfileRatingItemActive
                                          : null
                              }
                        />
                        <IoIosStar
                              className={
                                    rating[5]
                                          ? styles.propertyProfileRatingItemActive
                                          : null
                              }
                        />
                  </div>
            );
      }
      useEffect(() => {
            fetchProperty();
            handleRating();
            // const propertyFetching = axios.get('/db/dbJson.json')
            //       .then((response) => {
            //             console.log('response:', response);
            //       })
            //       .catch((error) => {
            //             console.log('error:', error);
            //       });
      }, []);

      return (
            // Start Property section

            <div className={styles.property}>
                  <Carousel props={property.pictures} />
                  <div className={styles.propertyInfos}>
                        <p className={styles.propertyTitle}>{property.title}</p>
                        <p className={styles.propertyLocation}>
                              {property.location}
                        </p>
                        <div className={styles.tags}>
                              {tags.map((tag) => (
                                    <div className={styles.tagsItem} key={tag}>
                                          <p>{tag}</p>
                                    </div>
                              ))}
                        </div>
                  </div>
                  <div className={styles.propertyProfile}>
                        <div className={styles.propertyProfileRating}>
                              {ratingStar()}
                        </div>
                        <div className={styles.propertyAvatar}>
                              <p className={styles.propertyAvatarName}>
                                    {host.name}
                              </p>
                              <img
                                    src={host.picture}
                                    alt={`Hôte:${host.name}`}
                              />
                        </div>
                        {/* start number: {starNumber}, rating:{rating} */}
                  </div>
                  <div className={styles.propertyCollapse}>
                        <Collapse
                              title="Description"
                              content={property.description}
                        />
                        <Collapse
                              title="Equipement"
                              list={property.equipments}
                        />
                  </div>
            </div>
            // Start Property section
      );
}
