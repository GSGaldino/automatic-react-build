import React from 'react';
import LandingPage from '../components/LandingPage';


export default function BAGHomepage(){

  const modulos = () => (
    <React.Fragment>
      <ol>
          <li><strong>Fundamentos</strong>
            <ul>
              <li>
                <strong>Alura+Transformação Digital;</strong>
                <p></p>
              </li>

              <li>
                <strong>Podcast:</strong>
                <p>Business Agility;</p>
              </li>

              <li>
                <strong>Módulo Fundamentos de Agilidade:</strong>
                <p>seus primeiros passos para a transformação ágil.</p>
              </li>

            </ul>
          </li>

          <li><strong>O Ambiente Ágil</strong>
            <ul>
              <li>
                <strong>Módulo A Empresa Ágil:</strong>
                <p>Introduzindo o Business Agility nas organizações;</p>
              </li>

              <li>
                <strong>Módulo Gestão Ágil:</strong>
                <p>Liderando a mudança em um ambiente de agilidade;</p>
              </li>

              <li>
                <strong>Podcast:</strong>
                <p>Gestão com Management 3.0.</p>
              </li>

            </ul>
          </li>

          <li>
            <strong>Organizando Equipes Ágeis</strong>
            <ul>
              <li>
                <strong>Módulo Organização de equipes ágeis:</strong>
                <p>Os papéis existentes em uma equipe;</p>
              </li>

              <li>
                <strong>Módulo Escalando equipes ágeis:</strong>
                <p>como levar a agilidade adiante na organização;</p>
              </li>

              <li>
                <strong>Podcast:</strong>
                <p>Squads não-suicidas;</p>
              </li>

              <li>
                <strong>Módulo Agile Coach:</strong>
                <p>lidere a transformação nas empresas.</p>
              </li>

            </ul>
          </li>
          
          <li>
            <strong>Agilidade Do Dia A Dia</strong>
            <ul>
              <li>
                <strong>Módulo Práticas ágeis:</strong>
                <p>O dia a dia do ambiente Agile;</p>
              </li>
              
              <li>
                <strong>Podcast:</strong>
                <p>Kanban e o fluxo de trabalho;</p>
              </li>
              
              <li>
                <strong>Módulo Métricas ágeis:</strong>
                <p>como medir resultados em um ambiente ágil.</p>
              </li>
            </ul>
              
          </li>

        </ol>
    </React.Fragment>
  )

  return (
    <React.Fragment>

      <LandingPage
        titulo="Business Agility"
        formId="8c34ad01-e420-44f8-8275-e3e8edbaf324"
        linkMatricula="https://cursos.alura.com.br/compra/candido-mendes-business-agility"
        cargaHoraria="60 horas"
        inicio="Agosto/2020"
        modalidade="100% on-line"
        investimento="R$ 660,00"
        objetivoDoCurso="A constante mudança do mercado e o cenário com tantas incertezas, tem trazido diversas reflexões sobre a abordagem da gestão relacionada aos novos desafios que surgem no dia a dia. O objetivo do curso é trazer a transformação ágil para os processos dentro da empresa, que visam adaptação às mudanças com melhoria contínua, buscando se reinventar e trazendo soluções inovadoras para garantir o seu destaque. "
        
        paraQuemSeDestina="O curso é voltado para profissionais formados na área de negócios que já trabalham com isso, mas precisam aprimorar suas habilidades ou profissionais interessados em aprender sobre Gestão Ágil."
        modulos={modulos()}
      />

    </React.Fragment>
  )
}





