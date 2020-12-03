import React from 'react';

import nicoSteppat from '../../../assets/nico-steppat.png';
import luanMarques from '../../../assets/luan-marques.png';
import guilhermeSilveira from '../../../assets/guilherme-silveira.png';
import rodrigoSiqueira from '../../../assets/rodrigo-siqueira.png';
import yuriMatheus from '../../../assets/yuri-matheus.png';


import './responsive.css';
import './styles.css';

export default function Teachers(){
  return (
    <div className="Teachers__Container">
      <h2>Nossos professores</h2>

      <div className="container">
        <div className="teacher left">
          <img
            src={nicoSteppat}
            title="Nico Steppat"
            alt="Foto do professor Nico Steppat"
          />

          <div className="text">
            <p>Nico <br></br> Steppat</p>
          </div>
        </div>

        <div className="teacher right">
          <div className="text">
            <p>Luan <br></br> Marques</p>
          </div>

          <img
            src={luanMarques}
            title="Luan Marques"
            alt="Foto do professor Luan Marques"
          />
        </div>

        <div className="teacher left">
          <img
            src={guilhermeSilveira}
            title="Guilherme Silveira"
            alt="Foto do professor Guilherme Silveira"
          />

          <div className="text">
            <p>Guilherme <br></br> Silveira</p>
          </div>
        </div>

        <div className="teacher right">
          <div className="text">
            <p>Rodrigo <br></br> Siqueira</p>
          </div>

          <img
            src={rodrigoSiqueira}
            title="Rodrigo Siqueira"
            alt="Foto do professor Rodrigo Siqueira"
          />
        </div>

        <div className="teacher left">
          <img
            src={yuriMatheus}
            title="Yuri Matheus"
            alt="Foto do professor Yuri Matheus"
          />

          <div className="text">
            <p>Yuri <br></br> Matheus</p>
          </div>
        </div>
      </div>
    </div>
  )
}
