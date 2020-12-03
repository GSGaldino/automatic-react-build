import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import AlgumaDuvidaSection from '../components/AlgumaDuvidaSection';
import Footer from '../components/Footer';

import heroe from '../../assets/heroe.jpg';

import gestaoInovacao from '../../assets/inovacao-e-gestao.png';

import './styles.css';
import './responsive.css';

export default function Homepage() {

  const ContainerCategoriaDeCursos = ({ color, tituloDoCurso }) => {
    const [mobileState, setMobileState] = useState('');

    const cursos = [
      {
        nomeDoCurso: 'Business Agility',
        cargaHoraria: '60 horas',
        tempoDeCurso: '3 meses',
        valorDoCurso: 'R$ 660',
        linkLandingPage: '/formacao-business-agility'
      },
      {
        nomeDoCurso: 'Certificação Cobit 5',
        cargaHoraria: '50 horas',
        tempoDeCurso: '3 meses',
        valorDoCurso: 'R$ 630',
        linkLandingPage: '/formacao-certificacao-cobit-5'
      },
      {
        nomeDoCurso: 'Certificação ITIL Foundation',
        cargaHoraria: '50 horas',
        tempoDeCurso: '3 meses',
        valorDoCurso: 'R$ 630',
        linkLandingPage: '/formacao-certificacao-itil-foundation'
      },
      {
        nomeDoCurso: 'Certificação PMP e CAPM do PMI',
        cargaHoraria: '70 horas',
        tempoDeCurso: '3 meses',
        valorDoCurso: 'R$ 700',
        linkLandingPage: '/formacao-certificacao-pmp-capm-pmi'
      },
      {
        nomeDoCurso: 'Currículos',
        cargaHoraria: '40 horas',
        tempoDeCurso: '3 meses',
        valorDoCurso: 'R$ 600',
        linkLandingPage: '/formacao-curriculos'
      },
      {
        nomeDoCurso: 'Desenvolvimento Pessoal',
        cargaHoraria: '90 horas',
        tempoDeCurso: '3 meses',
        valorDoCurso: 'R$ 900',
        linkLandingPage: '/formacao-desenvolvimento-pessoal'
      },
      {
        nomeDoCurso: 'E-commerce',
        cargaHoraria: '60 horas',
        tempoDeCurso: '3 meses',
        valorDoCurso: 'R$ 660',
        linkLandingPage: '/formacao-e-commerce'
      },
      {
        nomeDoCurso: 'Empreendedorismo Digital',
        cargaHoraria: '50 horas',
        tempoDeCurso: '3 meses',
        valorDoCurso: 'R$ 630',
        linkLandingPage: '/formacao-empreendedorismo-digital'
      },
      {
        nomeDoCurso: 'Gerente Ágil',
        cargaHoraria: '110 horas',
        tempoDeCurso: '6 meses',
        valorDoCurso: 'R$ 990',
        linkLandingPage: '/formacao-gerente-agil'
      },
      {
        nomeDoCurso: 'Digital & Agile Thinking',
        cargaHoraria: '100 horas',
        tempoDeCurso: '6 meses',
        valorDoCurso: 'R$ 990',
        linkLandingPage: '/formacao-digital-agile-thinking'
      }
    ];

    function toggleMobileState(){
      setMobileState(mobileState === '' ? 'open' : '');
      console.log(mobileState)
    }

    return (
      <div className="Container__Cursos">
        <section>
          <div className="container">
            <img
              src={gestaoInovacao}
              alt="Inovação e Gestão"
              title="Inovação e Gestão"
            />
          </div>
          <div className="container">
            <p style={{ color: color }}>Cursos de</p>
            <h2 style={{ color: color }}>{ tituloDoCurso }</h2>
          </div>
        </section>

        <section style={{ margin: "20px auto" }}>
          <p>A transformação digital está cada vez mais presente no nosso dia a dia e vindo pra ficar. Prepare-se para aplicar em seu dia a dia técnicas de gestão de produtos e projetos, agilidade, liderança, desenvolvimento pessoal e muito mais.</p>
        </section>

        <section>
          <div 
            className={`Courses ${mobileState}`}
            onClick={() => toggleMobileState}
          >
            {cursos.map((curso, indice) => {
              return (
                <div key={indice} className="Course">
                  <Link
                    to={ curso.linkLandingPage }
                    style={{ color: color, fontSize: '16px' }}
                  >
                    <p><strong>{curso.nomeDoCurso}</strong></p>
                  </Link>
                  <p>{curso.cargaHoraria}</p>
                  <p>{curso.tempoDeCurso}</p>
                  <p>{curso.valorDoCurso}</p>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    )
  }

  return (
    <React.Fragment>
      <Header />
      <div className="Homepage">
        <div className="Section">

          <div className="container">
            <div className="Modality">
              <span>100% online</span>
            </div>
            <h1>Bootcamps</h1>
            <p>Bootcamp é uma modalidade de ensino voltada para o aprendizado intensivo e imersivo do aluno sobre uma determinada área. Dessa forma, os participantes aprimoram suas habilidades ao colocar em prática os seus conhecimentos em dinâmicas em grupo e na solução de problemas.</p>

            <p>Além disso, os bootcamps preparam o profissional para o mercado de trabalho em um curto período de tempo. Outra vantagem da modalidade, é que não há restrições para se inscrever em um programa.</p>

            <h1>Conheça nossos cursos!</h1>
          </div>
          <div className="container">
            <img src={heroe} alt="Heroe" title="Heroe" />
          </div>
        </div>

        <ContainerCategoriaDeCursos
          color="#418dcc"
          tituloDoCurso="Inovação & Gestão"
        />
      </div>
      <AlgumaDuvidaSection />
      <Footer />
    </React.Fragment>
  )
}
