import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function Banner({ title, image }) {
      return (
            <div className={styles.banner}>
                  {title ? <h1>{title}</h1> : null}
                  <img src={image} alt="banner" loading="eager" />
            </div>
      );
}

Banner.propTypes = {
      title: PropTypes.string,
      image: PropTypes.string,
};
Banner.defaultProps = {
      title: '',
      image: '',
};
