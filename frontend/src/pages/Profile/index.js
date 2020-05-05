import React, { useEffect, useState } from 'react'; 

import { FiTrash2, FiEdit2, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import convertImage from '../../assets/img_conversor.png';

import './style.css';

import api from '../../services/api';

export default function Profile(){ 

  const [currencies, setCurrencies] = useState([]);

 
  
// É uma funcao para sempre que requisite essa pagina seja processada 
// 2 params - 1 função que quero que faça - 2 quando que eu quero que a funcao processe
useEffect(() => {
  api.get('/currency').then(response => {
    setCurrencies(response.data);
  });
}, []);

  // funcao para deletar Moeda
  async function handleDelete(id){ 
    try{ 
      await api.delete(`/currency/${id}`);
      alert(`Deletado a Moeda com o id=${id}`);
      setCurrencies(currencies.filter(currency => currency.id !== id )); // atualizando as listas 
    }catch(err){ 
      alert("Não foi possível deletar a Moeda");
    }
  }

  // funcao para editar a Moeda, caso haja alteracao no dia a dia 
  function handleEdit(id, name){ 
    localStorage.setItem("id", id);           //salvando nos dados do navegador 
    localStorage.setItem("name", name);       // salvando nos dados do navegador
  } 

  // funcao para converter o valor de reais para o escolhido
  function handleConvert(id, name){
    localStorage.setItem("name", name);       // salvando nos dados do navegador
  }
 
  return(
    <div className="profile-container">
      <header>
        <img src={convertImage} alt="Logo da Aplicação"/>
        <span>Bem Vindo!</span>
        <Link className="new-currency" to="/create" >Nova Moeda</Link>
        <Link className="menu" to="/">Menu</Link>
    </header>

    <h1>Moedas Cadastradas</h1>

    <ul>
       {currencies.map(currency => (
              <li key={currency.id}>
              <div className="text">
                <strong>Moeda:</strong>
                <p>{currency.name}</p>
      
                <strong>Valor:</strong>
                <p>{currency.value}</p>
              </div>
      
              <div className="botoes">
                <button onClick={() => handleDelete(currency.id)} type="button">
                  <FiTrash2 src={20} color="a8a8b3" />
                </button>
      
                <Link to="/edit"> 
                  <button onClick={() => handleEdit(currency.id, currency.name)} type="button" >
                    <FiEdit2 src={20} color="a8a8b3"/>
                  </button>
                </Link>
      
                <Link to="/convert"> 
                  <button onClick={() => handleConvert(currency.id, currency.name)} type="button" >
                    <FiSearch src={20} color="a8a8b3"/>
                  </button>
                </Link>
      
              </div>
            </li>
       ))}
    </ul>
  </div>
  );
}