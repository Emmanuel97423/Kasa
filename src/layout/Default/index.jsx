import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from './Default.module.css';

export default function DefaultLayout() {
      return (
            <div>
                  <section className={styles.app}>
                        <header className={styles.header}>
                              <NavBar />
                        </header>
                        <section id="content" className="app-content">
                              <Outlet />
                        </section>
                  </section>
                  <Footer />
            </div>
      );
}
