import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import styles from './Default.module.css';

export default function DefaultLayout() {
      return (
            <div className={styles.app}>
                  <header className={styles.header}>
                        <NavBar />
                  </header>
                  <section id="content" className="app-content">
                        <Outlet />
                  </section>
                  <footer>Footer</footer>
            </div>
      );
}
