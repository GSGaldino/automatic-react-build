import React from 'react';
import LandingPage from '../components/LandingPage';


export default function BDSHomepage(){

  const modulos = () => (
    <React.Fragment>
      <ol>
          <p>
            Lorem Ipsum
          </p>

        </ol>
    </React.Fragment>
  )

  return (
    <React.Fragment>

      <LandingPage
        titulo="BI e data warehouse com SQL Sever e Power BI"
        formId="250e0624-0ad5-4154-993f-6ebd071ddf52"
        linkMatricula="https://cursos.alura.com.br/compra/candido-mendes-business-intelligence-data-warehouse"
        cargaHoraria="60 horas"
        inicio="Agosto/2020"
        modalidade="100% on-line"
        investimento="R$ 660,00"
        objetivoDoCurso="Lorem Ipsum"
        
        paraQuemSeDestina="Lorem Ipsum"
        modulos={modulos()}
      />

    </React.Fragment>
  )
}





