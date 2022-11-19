/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
// eslint-disable-next-line import/extensions
import propertyData from '../../db/db.js';
import styles from './styles.module.css';
import bannerImg from '../../assets/img/banner_01.jpg';

export default function Home() {
      return (
            <div>
                  <Banner
                        title="Chez vous, partout et ailleurs"
                        image={bannerImg}
                  />
                  <div className={styles.content}>
                        {propertyData.length
                              ? propertyData.map((property) => (
                                      <Card
                                            id={property.id}
                                            title={property.title}
                                            cover={property.cover}
                                            key={property.id}
                                      />
                                ))
                              : null}
                  </div>
            </div>
      );
}
