import React, { useState } from 'react';

export default function getCep(cep) {
    const [codPostal, setCodPostal] = useState(); 
    const [state, setState] = useState(); 
    const [city, setCity] = useState(); 
    const [bairro, setBairro] = useState();
    const [consulta, setConsulta] = useState([]);
    const [update, setUpdate] = useState(false); 
    function getCep(cep){
      fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
        .then( res => res.json() )
        .then( res => {
          // cep, state, city, neighborhood, street
          setCodPostal(res.cep)
          setState(res.state)
          setCity(res.city)
          setBairro(res.neighborhood)
          setUpdate(true);
          setConsulta ((arr) => [...arr,{id: new Date(),registrosCEP: codPostal, registrosSTATE: state, registrosCITY: city, registrosBAIRRO: bairro }]);
        })        
    };
    return {getCep , bairro, update, city, state, codPostal, consulta}
}