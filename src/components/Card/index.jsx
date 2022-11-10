import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

export default function Card({ title, cover }) {
      return (
            <div
                  className={styles.card}
                  style={{
                        backgroundImage: `url(${cover})`,
                  }}
            >
                  <div className={styles.cardContent}>
                        <p className={styles.title}>{title}</p>
                  </div>
            </div>
      );
}
Card.propTypes = {
      // eslint-disable-next-line react/require-default-props
      title: PropTypes.string,
      // eslint-disable-next-line react/require-default-props
      cover: PropTypes.string,
};
