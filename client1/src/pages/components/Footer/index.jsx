import React from 'react';

import SocialSection from '../SocialSection';
import MediaIcons from '../MediaIcons';
import LogosSectionPB from '../LogosSectionPB';

import './styles.css';
import './responsive.css';

export default function Footer(){
  return (
    <div className="Footer">

      <div className="container">
        <SocialSection />
      </div>
      <div className="container">
        <LogosSectionPB />
      </div>
      <div className="container">
        <MediaIcons />
      </div>
      
    </div>
  )
}
