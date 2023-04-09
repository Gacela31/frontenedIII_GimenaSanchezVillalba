import { ClassNames } from '@emotion/react';
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const [dentist, setDentist] = useState({});
  const params = useParams();

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const getDentist = async ()=> {
    const res = await fetch (`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const data = await res.json();
    setDentist(data);
  }

  useEffect(() => {
    getDentist();
  }, [params]);

  return (
    <>
    
        <div className='box'>
        <h1>{dentist.name}</h1>
        <h2>{dentist.email}</h2>
        <h3>{dentist.website}</h3>
        <h3>{dentist.phone}</h3>
        </div>
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    
    </>
    )
}

export default Detail