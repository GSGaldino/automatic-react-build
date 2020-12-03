import React from 'react';

import ucamLogo from '../../../assets/logo-ucam-300.jpg';
import aluraLogo from '../../../assets/alura-dark-300.jpg';

import './styles.css';

export default function Logos(){
  return (
    <div className="Logos__Container">
      <img src={ucamLogo} alt="Logo" title="Logo" />
      <h2><strong>+</strong></h2>
      <img src={aluraLogo} alt="Logo" title="Logo" />
    </div>
  )
}
