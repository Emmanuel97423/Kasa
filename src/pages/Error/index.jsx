import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
      // const error = useRouteError(ErrorPage);
      return (
            <div>
                  <h1>404</h1>
                  <p>Oups! La page que vous demandez n&#39; sexiste pas.</p>
                  <p>
                        <Link to="/">Retourner sur la page d&#39;accueil</Link>
                  </p>
            </div>
      );
}
