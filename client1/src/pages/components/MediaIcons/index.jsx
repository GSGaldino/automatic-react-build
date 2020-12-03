import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function MediaIcons(){
  return (
    <div className="MediaIcons">
      <div className="media">
        <div className="item">
          <FaWhatsapp
            color="var(--text-color)"
            size="40"
          />
          <p>+55 11 97121-1053</p>
        </div>
      </div>      
    </div>
  )
}
