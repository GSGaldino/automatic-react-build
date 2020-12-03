import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

import './responsive.css';
import './styles.css';

export default function ModulesSection({ title, content }){
  const [listState, ChangeListState] = useState(false);

  return (
    <div className="padding">
      <div 
        className={`Modules__Section ${listState ? 'open' : ''}`}
        onClick={() => ChangeListState(!listState)}
      >
        <div className="container-text">
          <h2>{ title }</h2>
          <MdKeyboardArrowDown
            color="var(--primary-color)"
            size="30"
          />
        </div>

        <div className="content">
          {content}
        </div>
      </div>
    </div>
  )
}
