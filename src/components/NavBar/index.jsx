import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import logo from '../../kasa-logo.svg';
import styles from './NavBar.module.css';

export default function NavBar() {
      const menu = [
            {
                  id: 1,
                  title: 'Accueil',
                  link: '/',
            },
            {
                  id: 3,
                  title: 'A propos',
                  link: '/a-propos',
            },
      ];
      const activeClassName = { textDecoration: 'underline' };
      const menuItem = menu.map((item) => {
            return (
                  <li
                        className={styles.navbar_menu_item}
                        key={item.id.toString()}
                  >
                        <NavLink
                              to={item.link}
                              style={({ isActive }) =>
                                    isActive ? activeClassName : undefined
                              }
                        >
                              {item.title}
                        </NavLink>
                  </li>
            );
      });
      return (
            <nav className={styles.navbar}>
                  <Link to="/">
                        <img
                              className={styles.navbar_logo}
                              src={logo}
                              alt="logo"
                        />
                  </Link>
                  <ul className={styles.navbar_menu}> {menuItem}</ul>
            </nav>
      );
}
