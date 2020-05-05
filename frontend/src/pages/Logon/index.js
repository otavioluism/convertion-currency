import React from 'react'; 

import { Link } from 'react-router-dom';

import './styles.css';

import convertionImage from '../../assets/img_conversor.png';

export default function Logon(){ 
  return (
    <div className="logon-container">
      <div className="content">
          <section className="form">
              <header>CONVERSOR DE MOEDA</header>
              <div className="body">
                <p> Este é uma página web para que você possa converter sua moeda nativa para a moeda de outro país. Abaixo há duas opções, uma para criar 
                  uma nova moeda, e a outra para listar as moedas já existentes.
                </p>
                <section className="buttons">
                  <Link className="create" to="/create"> Nova Moeda </Link>
                  <Link className="list" to="/profile"> Todas Moedas </Link>
                </section>
              </div>
          </section>
          <img src={convertionImage} alt="Imagem de Conversão"/>
      </div>
    </div>
  ); 
}