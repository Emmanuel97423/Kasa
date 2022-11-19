import React from 'react';
import { useParams } from 'react-router-dom';

export default function Property() {
      const params = useParams();
      return (
            <div>
                  <h1>Logement</h1>
                  <p>{params.id}</p>
            </div>
      );
}
