import React from 'react';
import { FaAngleDown } from 'react-icons/fa';

import './styles.css';

export default function FAQList({ faq, index, toggleFAQ }){
  return (
    <div 
      className={`faq ${faq.open ? 'open' : ''}`}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">
        {faq.question}
      </div>

      <div className="faq-answer">
        {faq.answer}
      </div>

      <FaAngleDown />
    </div>
  )
}
