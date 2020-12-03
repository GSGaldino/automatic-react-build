import React from 'react';
import LogosSection from '../LogosSection';
import SocialSection from '../SocialSection';
import MediaIcons from '../MediaIcons';

import './styles.css';
import './responsive.css';

export default function AlgumaDuvidaSection(){
  return (
    <div className="Question__Section">
      <p><strong>Alguma dúvida?</strong></p>
      <p>Fale conosco, vamos adorar te atender.</p>

      <MediaIcons />   
      
      <SocialSection />
      <LogosSection />

    </div>
  )
}
