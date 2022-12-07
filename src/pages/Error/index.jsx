import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import layout from '../../layout/Default/styles.module.css';
import styles from './styles.module.css';

export default function ErrorPage() {
      const error = useRouteError();
      // eslint-disable-next-line no-console
      console.log('error:', error);
      return (
            <section id="error-page" className={layout.app}>
                  <header className={layout.header}>
                        <NavBar />
                  </header>
                  <section className={styles.errorContent}>
                        <h1>{error ? error.status : '404'}</h1>
                        <i>{error.statusText}.</i>
                        <br />
                        <p>Oups! La page que vous demandez n&#39;existe pas.</p>
                        <Link to="/">Retourner sur la page d&#39;accueil</Link>
                  </section>
            </section>
      );
}
