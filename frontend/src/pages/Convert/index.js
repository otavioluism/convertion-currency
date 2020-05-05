import React, {useState} from 'react';

import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import './style.css';

import api from '../../services/api';

export default function Convert(){ 

  const [result, setResult] = useState('');        // variavel estado para resutaldo convertido
  const history = useHistory();                   // funcao para passar o proximo caminho
  const [value, setValue] = useState('');        // variavel estado para pegar o valor do input 
  const name = localStorage.getItem("name");    // buscando no local storage variavel com nome = name;
  

  async function handleConvert(e){ 
    e.preventDefault();                         // funcao para nao atualizar a pagina 

    try{ 
      const response = await api.post("/convertion-currency", {name, value});   // retornara o calculo feito
      setResult(response.data);                 // atualizando a variavel resultado                                 
    }catch(err){ 
      alert("Converção Inválida ou Server não esta rodando");
    }
  }

  // funcao para que volte a rota
  function botaoVoltar(){ 
    history.push('/profile');                // passando o caminho após executar a rota acima 
    localStorage.clear();                     // limpando a historia do localStorage
  }


// Codigo JSX - XML 
  return(
    <div className="convert-container">
      <div className="content">
        <section>
          <h1>Convertendo de Real para {name}</h1>
          <p>Informe o valor em reais no input a direita</p>
          <button className="back-link" onClick={botaoVoltar}>
              <FiArrowLeft size={16} color="#E02041"/>
              Voltar
          </button>
        </section>

        <form>
          <input 
          type="text" 
          placeholder="Digite o valor em R$"
          value={value}
          onChange={e => setValue(e.target.value)}
          />

          <button onClick={handleConvert}>
            Converter
          </button>

          <div className="resultado">
         <p>Resultado em {name}: {result} </p>
          </div>
        </form>
      </div>
    </div>
  );
}