import React, { useState } from 'react';
import FAQList from '../FAQList';

import './styles.css';
import './responsive.css';


export default function FAQSection({ certification }) {
  const [faqs, setFaqs] = useState([
    {
      question: '1. Qual certificação o aluno recebe ao final do curso?',
      answer: `O aluno receberá um certificado de participação a cada módulo concluído e um certificado de formação em ${certification} ao final da programação completa.`,
      open: false
    },
    {
      question: '2. Os cursos de UCAM são reconhecidos pelo MEC?',
      answer: 'Os cursos UCAM são Bootcamps, um programa de ensino intenso e imersivo, que foge da metodologia formal e é focado nas práticas mais relevantes para atuar no mercado de trabalho.',
      open: false
    },
    {
      question: '3. Alunos que ainda não concluiram a formação podem realizar os cursos?',
      answer: 'Sim é possível, pois não é necessário ter uma formação prévia para realização do curso, por se tratar de um curso livre de capacitação.',
      open: false
    },
    {
      question: '4. Qual a forma de avaliação das disciplinas?',
      answer: 'As avaliações serão feitas por meio de atividades online ao longo das matérias.',
      open: false
    },
    {
      question: '5. Ex-Alunos da UCAM têm desconto?',
      answer: 'Sim, alunos e ex alunos têm desconto de 15%',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(faqs.map((faq, i) => {

      if (i === index){
        faq.open = !faq.open
      }else {
        faq.open = false;
      }

      return faq;
    }))
  }

  return (

    <div className="container-faq-section">
      <h2>FAQ</h2>
      <div className="container-faqs">
        {faqs.map((faq, index) => (
            
            <FAQList 
              key={index}
              faq={faq}
              index={index}
              toggleFAQ={toggleFAQ}
            />

          ))}
      </div>
    </div>

  )
}
