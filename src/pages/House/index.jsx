/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import propertyData from '../../db/dbJson.json';
import styles from './styles.module.css';
import Collapse from '../../components/Collapse';
import Carousel from '../../components/Carousel';
import Rating from '../../components/Rating';

export default function House() {
      const params = useParams();

      const [property, setProperty] = useState(propertyData);
      const [propertySelected, setPropertySelected] = useState([]);
      const [carouselPictures, setCarouselPictures] = useState([]);
      const [title, setTitle] = useState('');
      const [location, setLocation] = useState('');
      const [tags, setTags] = useState([]);
      const [host, setHost] = useState([]);
      const [starNumber, setStarNumber] = useState('0');
      const [collapseDescription, setCollapseDescription] = useState('');
      const [collapseEquipments, setCollapseEquipments] = useState('');

      useEffect(() => {
            const result = property.filter((item) => item.id === params.id);
            setPropertySelected(
                  ...propertySelected,
                  property.filter((item) => item.id === params.id)
            );

            setTags(...tags, result[0].tags);
            setHost(...host, result[0].host);
            setTitle(result[0].title);
            setLocation(result[0].location);
            setStarNumber(result[0].rating);
            setCarouselPictures(...carouselPictures, result[0].pictures);
            setCollapseDescription(result[0].description);
            setCollapseEquipments(result[0].equipments);
      }, []);

      return (
            <div className={styles.property}>
                  <Carousel pictures={carouselPictures} />
                  <div className={styles.propertyInfoSection}>
                        <div className={styles.propertyInfos}>
                              <p className={styles.propertyTitle}>{title}</p>
                              <p className={styles.propertyLocation}>
                                    {location}
                              </p>
                              <div className={styles.tags}>
                                    {tags.map((item) => (
                                          <div
                                                className={styles.tagsItem}
                                                key={item}
                                          >
                                                <p>{item}</p>
                                          </div>
                                    ))}
                              </div>
                        </div>
                        <div className={styles.propertyProfile}>
                              <div className={styles.propertyProfileRating}>
                                    <Rating number={starNumber} />
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
                        </div>
                  </div>
                  <div className={styles.propertyCollapse}>
                        <Collapse
                              className={styles.propertyCollapseItem}
                              title="Description"
                              content={collapseDescription}
                        />
                        <Collapse
                              className={styles.propertyCollapseItem}
                              title="Equipement"
                              list={collapseEquipments}
                        />
                  </div>
            </div>
      );
}
