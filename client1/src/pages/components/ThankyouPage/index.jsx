import React from 'react';
import LogosSectionPB from '../LogosSectionPB';

import './styles.css';
import './responsive.css';

export default function ThankyouPage(){
  return (
    <div className="ThankyouPage">
      <div className="Logos">
        <LogosSectionPB />
      </div>
      <div className="text">
        <h2>Obrigado!</h2>
        <p>Em instantes você receberá um e-mail com mais informações sobre o curso.</p>
        <p>Fique atento a sua caixa de entrada e de spam.</p>
        <p>Nossos consultores farão contato.</p>
      </div>
    </div>
  )
}
