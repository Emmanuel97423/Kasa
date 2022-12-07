/* eslint-disable react/require-default-props */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function Card({ title, cover, id }) {
      return (
            <Link
                  to={`/property/${id}`}
                  className={styles.card}
                  // style={{
                  //       backgroundImage: `url(${cover})`,
                  // }}
            >
                  <img src={cover} alt={title} />
                  <div className={styles.cardContent}>
                        <p className={styles.title}>{title}</p>
                  </div>
            </Link>
      );
}
Card.propTypes = {
      title: PropTypes.string,
      cover: PropTypes.string,
      id: PropTypes.string,
};
