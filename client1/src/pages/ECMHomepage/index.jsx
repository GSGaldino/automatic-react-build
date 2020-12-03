import React from 'react';
import LandingPage from '../components/LandingPage';


export default function ECMHomepage(){

  const modulos = () => (
    <React.Fragment>
      <ol>
          <li><strong>Decisões No Começo De Sua Loja!</strong>
            <ul>
              <li>
                <strong>Módulo plataforma e-commerce:</strong>
                <p>decisões no começo de sua loja virtual;</p>
              </li>

              <li>
                <strong>Módulo inteligência comercial:</strong>
                <p>aumente a competitividade do seu e-commerce;</p>
              </li>

              <li>
                <strong>Podcast:</strong>
                <p>startups, e-commerce e deploys;</p>
              </li>

              <li>
                <strong>Módulo marketplaces:</strong>
                <p>primeiros passos e estratégias de venda.</p>
              </li>

            </ul>
          </li>

          <li><strong>Avançando Com Sua Loja Virtual</strong>
            <ul>
              <li>
                <strong>Modulo entrega eficiente para seu e-commerce:</strong>
                <p>como escolher transportadores;</p>
              </li>

              <li>
                <strong>Modulo soluções de pagamento e-commerce:</strong>
                <p>melhore a conversão e o fluxo de caixa;</p>
              </li>

              <li>
                <strong>Podcast:</strong>
                <p>inspire-se: tecnologias e transformação digital no Magazine Luiza;</p>
              </li>

              <li>
                <strong>Post:</strong>
                <p>4 ações rápidas de marketing digital que vão destacar seu negócio.</p>
              </li>

              
            </ul>
          </li>

          <li>
            <strong>Medindo Os Resultados De Seu E-commerce</strong>
            <ul>
              <li>
                <strong>Módulo indicadores de e-commerce parte 1:</strong>
                <p>monitore o desempenho da sua loja;</p>
              </li>

              <li>
                <strong>Módulo indicadores de e-commerce parte 2:</strong>
                <p>aprofundando em métricas do negócio;</p>
              </li>

              <li>
                <strong>Módulo indicadores de e-commerce parte 3:</strong>
                <p>métricas avançadas.</p>
              </li>

            
            </ul>
          </li>
          
        </ol>
    </React.Fragment>
  )

  return (
    <React.Fragment>

      <LandingPage
        titulo="E-commerce"
        formId="dca7acf7-bc81-49f9-b860-820f73ffc598"
        linkMatricula="https://cursos.alura.com.br/compra/candido-mendes-e-commerce"
        cargaHoraria="60 horas"
        inicio="Agosto/2020"
        modalidade="100% on-line"
        investimento="R$ 660,00"
        objetivoDoCurso="O curso tem como objetivo capacitar o aluno sobre todo conhecimento técnico de lojas virtuais, abordando questões gerenciais e estratégicas, plano de negócios, KPIs, plano de logística e estocagem. Com intuito de dar uma visão mais ampla sobre o mercado e habilitar o profissional no processo completo de subir e montar uma plataforma e-commerce."
        
        paraQuemSeDestina="O curso é voltado para profissionais formados que já trabalham com o tema, mas precisam aprimorar suas habilidades ou profissionais interessados em aprender sobre construção de e-commerce"
        modulos={modulos()}
      />

    </React.Fragment>
  )
}





