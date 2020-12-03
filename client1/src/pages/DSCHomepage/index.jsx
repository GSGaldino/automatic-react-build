import React from 'react';
import LandingPage from '../components/LandingPage';


export default function DSCHomepage(){

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
        titulo="Data Science"
        formId="250e0624-0ad5-4154-993f-6ebd071ddf52"
        linkMatricula="https://cursos.alura.com.br/compra/candido-mendes-data-science"
        cargaHoraria="80 horas"
        inicio="Agosto/2020"
        modalidade="100% on-line"
        investimento="R$ 800,00"
        objetivoDoCurso="Lorem Ipsum"
        
        paraQuemSeDestina="Lorem Ipsum"
        modulos={modulos()}
      />

    </React.Fragment>
  )
}





