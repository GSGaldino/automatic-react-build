import React from 'react';

import aluraLogo from '../../../assets/alura-dark.png';
import ucamLogo from '../../../assets/logo-ucam.png';

import './styles.css';
import './responsive.css';

export default function Header(){
  return (
    <div className="Header">
      <div className="Header__logos">
        <div>
          <img
            src={ucamLogo}
            alt="UCAM Logo"
            title="UCAM logo"
          />

          <img 
            src={aluraLogo}
            alt="Alura logo"
            title="Alura logo"
          />  
        </div>
      </div>
    </div>
  )
}
