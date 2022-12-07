/* eslint-disable no-console */
/* eslint-disable react/no-typos */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SlArrowUp, SlArrowDown } from 'react-icons/sl';
import styles from './styles.module.css';

export default function Collapse({ title, content, list }) {
      const [collapseActive, setCollapseActive] = useState(false);

      return (
            <div className={styles.collapse}>
                  <div
                        role="presentation"
                        className={styles.collapseTitle}
                        onClick={() => {
                              if (collapseActive) {
                                    setCollapseActive(false);
                              } else {
                                    setCollapseActive(true);
                              }
                        }}
                        onKeyDown={() => {
                              if (collapseActive) {
                                    setCollapseActive(false);
                              } else {
                                    setCollapseActive(true);
                              }
                        }}
                  >
                        <h3>{title}</h3>
                        {collapseActive ? (
                              <SlArrowUp className={styles.collapseIcon} />
                        ) : (
                              <SlArrowDown className={styles.collapseIcon} />
                        )}
                  </div>
                  {collapseActive ? (
                        <div className={styles.collapseContent}>
                              <p>{content}</p>
                              {list
                                    ? list.map((item) => (
                                            <p key={item}>{item}</p>
                                      ))
                                    : null}
                        </div>
                  ) : null}
            </div>
      );
}

Collapse.propTypes = {
      title: PropTypes.string,
      content: PropTypes.string,
      // eslint-disable-next-line react/forbid-prop-types
      list: PropTypes.any,
};
Collapse.defaultProps = {
      title: 'NaN',
      content: '',
      list: [],
};
