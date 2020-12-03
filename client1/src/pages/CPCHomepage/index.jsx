import React from 'react';
import LandingPage from '../components/LandingPage';


export default function CPCHomepage(){

  const modulos = () => (
    <React.Fragment>
      <ol>
          <li><strong>Aprendendo a base do gerenciamento de projetos</strong>
            <ul>
              <li>
                <strong>Módulo certificação PMP e CAPM parte 1:</strong>
                <p>processos de gerenciamento de projetos;</p>
              </li>

              <li>
                <strong>Módulo certificação PMP e CAPM parte 2:</strong>
                <p>gerenciamento de integração.</p>
              </li>


            </ul>
          </li>

          <li><strong>Definindo escopo e cronograma de um projeto</strong>
            <ul>
              <li>
                <strong>Módulo certificação PMP e CAPM parte 3:</strong>
                <p>gerenciamento de escopo;</p>
              </li>

              <li>
                <strong>Módulo certificação PMP e CAPM parte 4:</strong>
                <p>gerenciamento de tempo.</p>
              </li>

            </ul>
          </li>

          <li>
            <strong>Gerenciando custos e qualidade</strong>
            <ul>
              <li>
                <strong>Módulo certificação PMP e CAPM parte 5:</strong>
                <p>gerenciamento de custos;</p>
              </li>

              <li>
                <strong>Módulo certificação PMP e CAPM parte 6:</strong>
                <p>gerenciamento de qualidade.</p>
              </li>

            </ul>
          </li>
          
          <li>
            <strong>Gerenciando pessoas e comunicação no seu projeto</strong>
            <ul>
              <li>
                <strong>Módulo certificação PMP e CAPM parte 7:</strong>
                <p>gerenciamento de recursos humanos;</p>
              </li>
              
              <li>
                <strong>Módulo certificação PMP e CAPM parte 8:</strong>
                <p>gerenciamento de comunicação.</p>
              </li>
              
            </ul>
          </li>

          <li>
            <strong>Gerenciando riscos e aquisições</strong>
            <ul>
              <li>
                <strong>Módulo certificação PMP e CAPM parte 9:</strong>
                <p>gerenciamento de riscos;</p>
              </li>
              
              <li>
                <strong>Módulo certificação PMP e CAPM parte 10:</strong>
                <p>gerenciamento de aquisições.</p>
              </li>
              
            </ul>
          </li>

          <li>
            <strong>Gerenciando partes interessadas, código de conduta e ética em projetos</strong>
            <ul>
              <li>
                <strong>Módulo certificação PMP e CAPM parte 11:</strong>
                <p>gerenciamento de partes interessadas;</p>
              </li>
              
              <li>
                <strong>Módulo certificação PMP e CAPM parte 12:</strong>
                <p>gerenciamento de aquisições.</p>
              </li>
              
            </ul>
          </li>

          <li>
            <strong>Conhecendo as atualizações da 6° edição do PMBOK</strong>
            <ul>
              <li>
                <strong>Módulo certificação PMP e CAPM parte 13:</strong>
                <p>PMBOK 6ª edição.;</p>
              </li>
              
            </ul>
          </li>

        </ol>
    </React.Fragment>
  )

  return (
    <React.Fragment>

      <LandingPage
        titulo="Certificação PMP e CAPM do PMI"
        formId="85329cd3-2c2c-4c73-aba1-b5a56dcec19d"
        linkMatricula="https://cursos.alura.com.br/compra/candido-mendes-certificacao-pmp-capm-pmi"
        cargaHoraria="70 horas"
        inicio="Agosto/2020"
        modalidade="100% on-line"
        investimento="R$ 700,00"
        objetivoDoCurso="O curso tem como objetivo habilitar e especializar o profissional na gestão de projetos, baseada em ferramentas de análises, gestão de pessoas, gestão de custos e gestão de riscos, que quando alinhadas com objetivo comum da empresa, impactarão diretamente os resultados."
        
        paraQuemSeDestina="O curso é voltado para profissionais formados em Gestão Empresarial e Gestão de Projetos, que já trabalham com isso, mas precisam aprimorar suas habilidades ou profissionais interessados em aprender sobre PMP e CAPM."
        modulos={modulos()}
      />

    </React.Fragment>
  )
}





