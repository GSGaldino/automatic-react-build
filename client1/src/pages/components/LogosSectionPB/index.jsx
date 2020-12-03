import React from 'react';

import ucamLogoPB from '../../../assets/ucam-pb.png';
import aluraLogoPB from '../../../assets/alura-pb.png';

import './styles.css';

export default function LogosSectionPB(){
  return (
    <div className="Logos__Container__PB">
      <img src={ucamLogoPB} alt="Logo" title="Logo" />
      <img src={aluraLogoPB} alt="Logo" title="Logo" />
    </div>
  )
}
