import React from   'react';

import './styles.css';
import './responsive.css';

export default function CourseObjective({ text }){
  return (
    <div className="CourseObjective__Container">
      <h2>Objetivo do curso</h2>
      <p>{ text }</p>
    </div>
  )
}
