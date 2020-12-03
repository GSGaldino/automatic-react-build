import React from 'react';
import GoalContainer from '../GoalContainer';

import chargeImg from '../../../assets/charge.jpg';
import startImg from '../../../assets/start.jpg';
import modalityImg from '../../../assets/modality.jpg';
import investimentImg from '../../../assets/investiment.jpg';

import './styles.css';
import './responsive.css';

export default function GoalsSection({ cargaHoraria, inicio, modalidade, investimento }){
  return (
    <div className="Goals__Section">
      
      <div className="goals">
        <GoalContainer
          src={chargeImg}
          title="Carga horária"
          firstText="Carga horária"
          secondText={cargaHoraria}
        />

        <GoalContainer
          src={startImg}
          title="Início"
          firstText="Início"
          secondText={inicio}
        />
      </div>
      <div className="goals">
        <GoalContainer
          src={modalityImg}
          title="Modalidade"
          firstText="Modalidade"
          secondText={modalidade}
        />

        <GoalContainer
          src={investimentImg}
          title="Investimento"
          firstText="Investimento"
          secondText={investimento}
        />
      </div>
    </div>
  )
}
