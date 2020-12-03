import React from 'react';

import './styles.css';
import './responsive.css';

export default function ForWhoContainer({ text }){
  return (
    <div className="ForWho__Container">
      <h2>Para quem se destina?</h2>
      <p>{ text }</p>
    </div>
  )
}
