import React from 'react';

import './responsive.css';
import './styles.css';

export default function MobileMatriculese({ value, href}){
  return (
    <div className="Mobile__Matriculese">
      <div className="container">
        <p><small>Investimento</small></p>
        <p>{ value }</p>
      </div>
      <div className="container">
        <a href={ href }>Matricule-se já!</a>
      </div>
    </div>
  )
}
