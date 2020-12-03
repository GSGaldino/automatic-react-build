import React from 'react';

import './styles.css';
import './responsive.css';

export default function CTA({ href }){
  return (
    <div className="padding">
      <div className="CTA__Container">
        <a 
          href={href} 
          className="button"
          rel="noopener noreferrer"
          target="_blank"
        >
          Matricule-se já!
        </a>
      </div>
    </div>
  )
}
