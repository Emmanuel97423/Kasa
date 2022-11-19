/* eslint-disable react/no-typos */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function Banner({ title, image }) {
      return (
            <div
                  className={styles.banner}
                  // style={{
                  //       height: `${height}`,
                  // }}
            >
                  {title ? <h1>{title}</h1> : null}
                  <img
                        src={image}
                        alt="banner"
                        // style={{
                        //       height: `${height}`,
                        // }}
                  />
            </div>
      );
}

Banner.PropTypes = {
      title: PropTypes.string,
      image: PropTypes.string,
};
