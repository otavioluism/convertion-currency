import React, {useState} from 'react'; 

import { Link, useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi'

import convertImage from '../../assets/img_conversor.png';

import './style.css';

import api from '../../services/api';

export default function Edit(){ 
  

  const history = useHistory();                   //funcao com o objetivo de depois de executar determinada funcao joga a pag para outra rota
  const id = localStorage.getItem("id");          //pegando o valor da historia do navagador
  const name = localStorage.getItem("name");      //pegando o nome  na historia do navegador
  const [value, setValue] = useState('');         //variavel estado para buscar o valor digitado no input

  const data = { 
    value,
  }

  
      async function handleEdit(){ 
        try{
          if(data.value !== ''){
              await api.patch(`currency/${id}`, data);     // rota para atualizar o valor e passando os dados para atualizar
              alert(` Editado a Moeda ${name}`);           // alerta na tela 
              localStorage.clear();                        // depois de editar limpamos o localStorage
              history.push('/profile');                    // após editar, volta a pagina de perfil de moedas
          }else{
            alert("Você precisa inserir algum valor");
          }
        }catch(err){ 
          alert(` Não foi possível editar a Moeda ${name} `);
        }
      }
  
  
 // retorno da pagina HTML
  return(
    <div className="register-container">
      <div className="content">
        <section className="form">
          <h1>Edite a moeda {name}</h1>
            <h3>Valor:</h3>
            <input 
              type="text" 
              placeholder="Valor"
              value={value}
              onChange={e => setValue(e.target.value)}
            />
              <div className="buttons">
                <button onClick={handleEdit} className="create">
                  Edit
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