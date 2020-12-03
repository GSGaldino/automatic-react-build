import React from 'react';
import LandingPage from '../components/LandingPage';


export default function CURHomepage(){

  const modulos = () => (
    <React.Fragment>
      <ol>
          <li><strong>Construindo sua carreira e currículo</strong>
            <ul>
              <li>
                <strong>Modulo currículo:</strong>
                <p>como chamar a atenção dos entrevistadores;</p>
              </li>

              <li>
                <strong>Módulo linkedin;</strong>
                <p>como fazer o seu perfil trabalhar para você;</p>
              </li>

              <li>
                <strong>Post:</strong>
                <p>quais as vantagens em saber usar o linkedin? - blog da alura;</p>
              </li>

              <li>
                <strong>Post;</strong>
                <p>como fazer um perfil de alta qualidade no linkedin e atrair mais trabalhos? - blog da alura;</p>
              </li>

              <li>
                <strong>Post;</strong>
                <p>como fazer uma leitura do mercado com foco em oportunidades de trabalho? - blog da alura.</p>
              </li>

            </ul>
          </li>

          <li><strong>Marketing pessoal</strong>
            <ul>
              <li>
                <strong>Módulo personal branding:</strong>
                <p>entenda o que é e como você pode usá-la a favor da sua carreira;</p>
              </li>

              <li>
                <strong>Post:</strong>
                <p>por que você deve saber estruturar um bom briefing de marketing pessoal - blog da alura;</p>
              </li>

              <li>
                <strong>Módulo networking:</strong>
                <p>potencialize oportunidades;</p>
              </li>

              <li>
                <strong>Post:</strong>
                <p>descubra as principais habilidades para destacar a sua carreira - blog da alura.</p>
              </li>

            </ul>
          </li>

          <li>
            <strong>Carreira no exterior</strong>
            <ul>
              <li>
                <strong>Módulo inglês:</strong>
                <p>candidate-se a vagas no exterior;</p>
              </li>

              <li>
                <strong>Módulo espanhol:</strong>
                <p>candidate-se a vagas no exterior;</p>
              </li>

              <li>
                <strong>Site podcast;</strong>
                <p>carreira sem fronteiras;</p>
              </li>

              <li>
                <strong>Podcast;</strong>
                <p>carreira de programação no exterior.</p>
              </li>

            </ul>
          </li>

        </ol>
    </React.Fragment>
  )

  return (
    <React.Fragment>

      <LandingPage
        titulo="Currículos"
        formId="71100345-1faf-46d4-a026-9842a99bd9ca"
        linkMatricula="https://cursos.alura.com.br/compra/candido-mendes-curriculos"
        cargaHoraria="40 horas"
        inicio="Agosto/2020"
        modalidade="100% on-line"
        investimento="R$ 600,00"
        objetivoDoCurso="O curso tem como objetivo explorar os pontos fortes e tornar mais palpável o plano de ação do candidato. Com técnicas de construção de carreira, marketing pessoal e construção de currículos em outros idiomas, como Inglês e Espanhol, para quem deseja construir uma carreira no exterior."
        
        paraQuemSeDestina="O curso é voltado para profissionais formados, que precisam iniciar sua carreira ou se recolocar no mercado mas desejam aprimorar seu currículo ou profissionais interessados em aprender sobre construção de currículos."
        modulos={modulos()}
      />

    </React.Fragment>
  )
}





