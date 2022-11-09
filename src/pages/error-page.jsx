import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
      const error = useRouteError(ErrorPage);
      return (
            <div>
                  <h1>Oops!</h1>
                  <p>Désoler mais une erreur est survenue.</p>
                  <p>
                        <i>{error.statusText || error.message}</i>
                  </p>
            </div>
      );
}
