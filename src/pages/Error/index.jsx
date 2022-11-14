import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import layout from '../../layout/Default/Default.module.css';
import styles from './Error.module.css';

export default function ErrorPage() {
      // const error = useRouteError(ErrorPage);
      return (
            <section className={layout.app}>
                  <header className={layout.header}>
                        <NavBar />
                  </header>
                  <section className={styles.errorContent}>
                        <h1>404</h1>
                        <p>Oups! La page que vous demandez n&#39;existe pas.</p>
                        <Link to="/">Retourner sur la page d&#39;accueil</Link>
                  </section>
            </section>
      );
}
