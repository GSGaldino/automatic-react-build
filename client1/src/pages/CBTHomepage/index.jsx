import React from 'react';
import LandingPage from '../components/LandingPage';


export default function CBTHomepage(){

  const modulos = () => (
    <React.Fragment>
      <ol>
          <li><strong>Conhecendo o Cobit e a Certificação</strong>
            <ul>
              <li>
                <strong>Módulo cobit 5 foundations parte 1:</strong>
                <p>introdução a governança corporativa;</p>
              </li>

              <li>
                <strong>Módulo cobit 5 foundations parte 2:</strong>
                <p>princípios do cobit 5;</p>
              </li>

              <li>
                <strong>Vídeo:</strong>
                <p>certificações, vale a pena tirar?</p>
              </li>

            </ul>
          </li>

          <li><strong>Avançando Com Framework</strong>
            <ul>
              <li>
                <strong>Módulo cobit 5 foundations parte 3:</strong>
                <p>habilitadores do cobit 5;</p>
              </li>

              <li>
                <strong>Módulo cobit 5 foundations parte 4:</strong>
                <p>implementação e avaliação de processos.</p>
              </li>

            </ul>
          </li>

        </ol>
    </React.Fragment>
  )

  return (
    <React.Fragment>

      <LandingPage
        titulo="Certificação Cobit 5"
        formId="7f83ca89-fc44-4903-ac9d-e06ae1a6a307"
        linkMatricula="https://cursos.alura.com.br/compra/candido-mendes-certificacao-cobit-5"
        cargaHoraria="50 horas"
        inicio="Agosto/2020"
        modalidade="100% on-line"
        investimento="R$ 630,00"
        objetivoDoCurso="O curso tem como objetivo preparar o profissional com as práticas necessárias para garantir a governança de TI, desde a sua implementação até a avaliação destes processos, de forma que a gestão da informação esteja alinhada com a área, para garantir uma boa comunicação e melhora nos resultados."
        
        paraQuemSeDestina="O curso é voltado para profissionais formados em tecnologia da informação, ciência da computação e análise de sistemas que já trabalham com isso, mas precisam aprimorar suas habilidades ou profissionais interessados em aprender sobre Cobit 5."
        modulos={modulos()}
      />

    </React.Fragment>
  )
}





