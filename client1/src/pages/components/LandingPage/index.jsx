import React from 'react';

import Header from '../Header';
import FirstSection from '../FirstSection';
import GoalsSection from '../GoalsSection';
import CourseObjective from '../CourseObjective';
import ForWhoContainer from '../ForWhoContainer';
import ModulesSection from '../ModulesSection';
import FAQSection from '../FAQSection';
import CTA from '../CTA';
import AlgumaDuvidaSection from '../AlgumaDuvidaSection';
import MobileMatriculese from '../MobileMatriculese';
import Footer from '../Footer';
/* 
import './styles.css'; */

export default function LandingPage({ titulo, formId, linkMatricula, cargaHoraria, inicio, modalidade, investimento, objetivoDoCurso, paraQuemSeDestina, modulos }){
  const modulesSectionContent = () => (
    <React.Fragment>
      { modulos }
    </React.Fragment>
  )

  return (
    <div className="Homepage">
      <Header />
      <FirstSection 
        title={ titulo }
        formId={ formId }
        linkMatricula={ linkMatricula }
      />

      <GoalsSection 
        cargaHoraria={ cargaHoraria }
        inicio={ inicio }
        modalidade={ modalidade }
        investimento={ investimento }
      />
      
      <CourseObjective text={ objetivoDoCurso }/>

      <ForWhoContainer text={ paraQuemSeDestina }/>
      
      <ModulesSection
        title="Módulos"
        content={modulesSectionContent()}
      />
      {/* <Teachers /> */}
      <FAQSection certification={ titulo }/>
      <CTA href={linkMatricula}/>
      <AlgumaDuvidaSection />

      <MobileMatriculese
        value={ investimento }
        href={ linkMatricula }
      />
      
      <Footer />
    </div>
  )
}
