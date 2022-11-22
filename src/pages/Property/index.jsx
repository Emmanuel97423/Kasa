/* eslint-disable array-callback-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import propertyData from '../../db/db';
import styles from './styles.module.css';
import Collapse from '../../components/Collapse';
import Carousel from '../../components/Carousel';

export default function Property() {
      const [property, setProperty] = useState([]);
      const [tags, setTags] = useState([]);
      const [host, setHost] = useState([]);
      const params = useParams();

      function fetchProperty() {
            try {
                  propertyData.filter((item) => {
                        if (item.id === params.id) {
                              setProperty(item);
                              setTags(item.tags);
                              setHost(item.host);
                        }
                  });
            } catch (error) {
                  console.log('error:', error);
            }
      }
      // Start Tags list
      // function tagList() {
      //       // const tags = property.tags;
      //       tags.map((tag) => {
      //             return <p>{tag}</p>;
      //       });
      // }
      // End Tags list

      useEffect(() => {
            fetchProperty();
      }, []);

      return (
            <div className={styles.property}>
                  <Carousel props={property.pictures} />

                  <div className={styles.propertyInfos}>
                        <p className={styles.propertyTitle}>{property.title}</p>
                        <p className={styles.propertyLocation}>
                              {property.location}
                        </p>
                        <div>
                              {tags.map((tag) => (
                                    <p>{tag}</p>
                              ))}
                        </div>
                  </div>
                  <div className={styles.propertyProfile}>
                        <div className={styles.propertyAvatar}>
                              <p className={styles.propertyAvatarName}>
                                    {host.name}
                              </p>
                              <img
                                    src={host.picture}
                                    alt={`Hôte:${host.name}`}
                              />
                        </div>
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
      );
}
