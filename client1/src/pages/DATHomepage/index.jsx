import React from 'react';
import LandingPage from '../components/LandingPage';


export default function DATHomepage(){
  const modulos = () => (
    <React.Fragment>
      <ol>
          <li><strong>Aprendendo com o Design e UX</strong>
            <ul>
              <li>
                <strong>Curso Design Thinking:</strong>
                <p>Concretizando ideias</p>
              </li>

              <li>
                <strong>Curso Design Sprint 2.0:</strong>
                <p>Crie produtos digitais rapidamente</p>
              </li>

              <li>
                <strong>Post:</strong>
                <p>O que é MVP? Minimum Viable Product</p>
              </li>

              <li>
                <strong>Post:</strong>
                <p>UX não é só para designers</p>
              </li>

              <li>
                <strong>Curso UX: </strong>
                <p>o que é experiencia de usuario </p>
              </li>

            </ul>
          </li>

          <li><strong>Mindset Ágil</strong>
            <ul>
              <li>
                <strong>Post:</strong>
                <p>O que é metodologia ágil</p>
              </li>

              <li>
                <strong>Curso Fundamentos de Agilidade:</strong>
                <p>seus primeiros passos para transformação ágil</p>
              </li>

              <li>
                <strong>Curso Organização de Equipes Ágeis:</strong>
                <p>Os papéis existentes em uma equipe</p>
              </li>

              <li>
                <strong>Curso Empresa Ágil:</strong>
                <p>Introduzindo o business agility nas organizações</p>
              </li>

              <li>
                <strong>Curso Práticas Ágeis:</strong>
                <p>O dia a dia do ambiente Agile</p>
              </li>

            </ul>
          </li>

          <li>
            <strong>Ferramentas Ágeis</strong>
            <ul>
              <li>
                <strong>Curso Scrum:</strong>
                <p>Agilidade em seu projeto</p>
              </li>

              <li>
                <strong>Podcast:</strong>
                <p>Scrum do zero ao Sprint</p>
              </li>

              <li>
                <strong>Curso Kanban Parte 1:</strong>
                <p>Fundamentos Essenciais</p>
              </li>

              <li>
                <strong>Podcast:</strong>
                <p>Kanban e o fluxo de trabalho</p>
              </li>

              <li>
                <strong>Curso Agile Avançado:</strong>
                <p>Crie modelos e descubra o Nexus</p>
              </li>
            </ul>
          </li>
          
          <li>
            <strong>Liderança</strong>
            <ul>
              <li>
                <strong>Post:</strong>
                <p>O que é Management 3.0 por que aplicá lo na sua empresa</p>
              </li>
              
              <li>
                <strong>Podcast:</strong>
                <p>Gestão com Management 3.0</p>
              </li>
              
              <li>
                <strong>Curso Gestão de Pessoas 4.0 Parte 1:</strong>
                <p>Entendendo as mudanças da transformação digital</p>
              </li>
              
              <li>
                <strong>Curso Gestão de Pessoas 4.0 Parte 2:</strong>
                <p>Avaliando as mudanças da transformação digital</p>
              </li>
              
              <li>
                <strong>Post:</strong>
                <p>Como manter os colaboradores engajados </p>
              </li>
              
            </ul>
          </li>

          <li>
            <strong>Discovery e Delivery</strong>
            <ul>
              <li>
                <strong>Curso de Gestão de Produtos Digitais:</strong>
                <p>Produto vs Projeto</p>
              </li>
              
              <li>
                <strong>Curso de Gestão de Produtos Digitais:</strong>
                <p>Product Discovery</p>
              </li>
              
              <li>
                <strong>Podcast:</strong>
                <p>Product Discovery</p>
              </li>
            </ul>
            
          </li>
        </ol>   
    </React.Fragment>
  )

  return (
    <React.Fragment>

      <LandingPage
        titulo="Digital & Agile Thinking"
        formId="e62cc904-70ca-4f20-bb60-78e4af0dae8e"
        linkMatricula="https://cursos.alura.com.br/compra/candido-mendes-digital-e-agile-thinking"
        cargaHoraria="100 horas"
        inicio="Agosto/2020"
        modalidade="100% on-line"
        investimento="R$ 990,00"
        objetivoDoCurso="O curso tem como objetivo preparar gestores e futuros gerentes as novas tendências e melhores práticas administrativas do mercado, apresentando ferramentas e metodologias eficazes para auxiliar neste processo."
        
        paraQuemSeDestina="O curso é destinado para profissionais e gestores que desejam conhecer e implantar as metodologias ágeis voltadas a gestão, a fim de promover uma melhoria nos processos. E também para profissionais que já trabalham com esta metodologia e desejam se atualizar ou detalhar mais seus conhecimentos."
        modulos={modulos()}
      />

    </React.Fragment>
  )
}

