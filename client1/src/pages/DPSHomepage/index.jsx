import React from 'react';
import LandingPage from '../components/LandingPage';


export default function DPSHomepage(){

  const modulos = () => (
    <React.Fragment>
      <ol>
          <li><strong>Soft Skills</strong>
            <ul>
              <li>
                <strong>Módulo hábitos:</strong>
                <p>da produtividade às metas pessoais;</p>
              </li>

              <li>
                <strong>Post hábitos:</strong>
                <p>como melhorá-los - blog da alura;</p>
              </li>

              <li>
                <strong>Módulo eficácia parte 1:</strong>
                <p>hábitos para sua proatividade</p>
              </li>

              <li>
                <strong>Módulo eficácia parte 2:</strong>
                <p>hábitos para sua proatividade;</p>
              </li>

              <li>
                <strong>Podcast:</strong>
                <p>mais produtividade;</p>
              </li>

              <li>
                <strong>Módulo foco:</strong>
                <p>trazendo mais resultados para o dia a dia;</p>
              </li>

              <li>
                <strong>Vídeo</strong>
                <p>controle seu foco, aumente sua produtividade - youtube.</p>
              </li>

            </ul>
          </li>

          <li><strong>Habilidades E Comportamento</strong>
            <ul>
              <li>
                <strong>Modulo pontos fortes parte 1:</strong>
                <p>descubra os seus e aprenda a gerenciá-los;</p>
              </li>

              <li>
                <strong>Modulo pontos fortes parte 2:</strong>
                <p>habilidades e competências;</p>
              </li>

              <li>
                <strong>Módulo estresse parte 1:</strong>
                <p>buscando qualidade de vida;</p>
              </li>

              <li>
                <strong>Módulo estresse parte 2:</strong>
                <p>equilibre seu estilo de vida;</p>
              </li>

              <li>
                <strong>Vídeo:</strong>
                <p>transforme seu lado profissional com trabalho voluntário.</p>
              </li>

            </ul>
          </li>

          <li>
            <strong>Comunicação</strong>
            <ul>
              <li>
                <strong>Módulo comunicação:</strong>
                <p>como se expressar bem e ser compreendido;</p>
              </li>

              <li>
                <strong>Módulo relacionamento interpessoal:</strong>
                <p>aprenda a lidar melhor com você e com o outro;</p>
              </li>

              <li>
                <strong>Módulo feedback:</strong>
                <p>a arte de orientar e ser orientado com sentido;</p>
              </li>

              <li>
                <strong>Vídeo:</strong>
                <p>como lidar com feedbacks negativos e positivos- youtube;</p>
              </li>

              <li>
                <strong>Módulo oratória parte 1:</strong>
                <p>compartilhe ideias e histórias;</p>
              </li>

              <li>
                <strong>Módulo oratória parte 2:</strong>
                <p>apresentações em público.</p>
              </li>

            </ul>
          </li>
          
        </ol>
    </React.Fragment>
  )

  return (
    <React.Fragment>

      <LandingPage
        titulo="Desenvolvimento Pessoal"
        formId="308134be-c5f8-49bc-a582-92e5abb9f01b"
        linkMatricula="https://cursos.alura.com.br/compra/candido-mendes-desenvolvimento-pessoal"
        cargaHoraria="90 horas"
        inicio="Agosto/2020"
        modalidade="100% on-line"
        investimento="R$ 900,00"
        objetivoDoCurso="O curso tem como objetivo aumentar a capacidade de gerenciamento pessoal, apresentando os conceitos primordiais de como trabalhar os pontos de melhoria, produtividade, comunicação, relacionamento interpessoal, auto inovação e oratória."
        
        paraQuemSeDestina="O curso é voltado para profissionais formados, que precisam iniciar ou se recolocar no mercado mas desejam aprimorar suas habilidades pessoais ou profissionais interessados em aprender sobre desenvolvimento pessoal."
        modulos={modulos()}
      />

    </React.Fragment>
  )
}





