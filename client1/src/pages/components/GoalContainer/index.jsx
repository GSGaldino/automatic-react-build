import React from 'react';

import './styles.css';

export default function GoalContainer({ src, title, firstText, secondText }){
  return (
    <div className="Goal__Container">
      <img
        src={src}
        alt={title}
        title={title}
      />

      <div className="text">
        <p><small>{firstText}</small></p>
        <p>{secondText}</p>
      </div>
    </div>
  )
}
