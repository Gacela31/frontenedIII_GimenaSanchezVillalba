import {React, useState, useEffect} from 'react'
import Card from '../Components/Card'
import '../index.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useOutlet } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [doctors, setDoctors] = useState([]);

  const getDoctors = async ()=> {
    const res = await fetch ("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setDoctors(data)
  };

  useEffect(() => {
    getDoctors();
  }, []);
  
  const outlet = useOutlet();

  return (
    
    <main className="" >
      <Navbar/>
      {
      outlet || <main className='card-grid'>
                
                  {/* Aqui deberias renderizar las cards */}
                  {doctors &&
                  doctors.map((dr)=> {
                  return (<Card key={dr.id} name={dr.name} id={dr.id} username={dr.username}/>)
                  })}
                </main> 
      }
      <Footer/> 
    </main>
  )
}

export default Home