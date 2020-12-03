import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdInformationCircleOutline } from 'react-icons/io';

import './styles.css';
import './responsive.css';

export default function Page404(){
  return (
    <div className="container__Page404">
      <IoMdInformationCircleOutline
        size={"120px"}
      />
      <h1>404</h1>
      <p>Ops... Nada por aqui!</p>
      <div className="sugestions">
        <p>Você quis dizer</p>
        <div className="container">
          <Link 
            to="/formacao-gerente-agil"
            className="button"
          >
            Formação Gerente Ágil
          </Link>
          <h2>ou</h2>
          <Link
            to="/formacao-digital-agile-thinking"
            className="button"
          >
            Formação Digital & Agile Thinking
          </Link>
          <h2>?</h2>
        </div>
      </div>
    </div>
  )
}
