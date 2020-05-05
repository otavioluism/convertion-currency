import React, { useState } from 'react'; 

import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import convertImage from '../../assets/img_conversor.png';

import './style.css';

import api from '../../services/api';

export default function Create_currency(){ 

  const history = useHistory();
  const [name, setName] = useState('');       //Nome da moeda
  const [value, setValue] = useState('');             //Valor da moeda

  // funcao para criar uma nova moeda na aplicacao
  async function handleRegister(e){ 
    e.preventDefault();  //olha um evento e nao atualiza a página

        // pegando os valores dentro dos estados
        const data = {
          name, 
          value
        };

        
        try {
            // rota para enviar ao servidor com os dados
            const response = await api.post('/currency', data);
            alert(`Moeda ${response.data.id} cadastrada!`);
            // funcao para retornar a pagina html com a rota / 
            history.push('/');
        }catch(err){
          alert(" Não foi possível cadastrar a nova Moeda")
      } 
  }  


  return(
    <div className="register-container">
      <div className="content">
        <section className="form">
            <h1>Crie uma nova moeda</h1>
            <h3>Moeda:</h3>

            <input 
            type="text" 
            placeholder="Digite uma Moeda"
            value={name}
            onChange={e => setName(e.target.value)}
            />

            <h3>Valor:</h3>

            <input 
            type="text" 
            placeholder="Valor"
            value={value}
            onChange={e => setValue(e.target.value)}
            />

              <div className="buttons">
                <button className="create" onClick={handleRegister}>
                  Criar
                </button>
                <Link className="list" to="/">
                  <FiArrowLeft size={16} color="#E02041"/>
                  Voltar
                </Link>
              </div>
          </section>
          <img src={convertImage} alt="Imagem de Converção"/>
      </div>
    </div>
  );
}