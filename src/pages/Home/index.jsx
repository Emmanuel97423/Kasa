/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
// eslint-disable-next-line import/extensions
import propertyData from '../../db/db.js';
import styles from './Home.module.css';

export default function Home() {
      return (
            <div>
                  <div>
                        <Banner />
                        <div className={styles.content}>
                              {propertyData.map((property) => (
                                    <Card
                                          title={property.title}
                                          cover={property.cover}
                                          key={property.id}
                                    />
                              ))}
                        </div>
                  </div>
            </div>
      );
}
