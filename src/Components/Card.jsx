import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";



const Card = ({ name, username, id }) => {

  const [buttonValue, setButtonValue] = useState("Add Fav");
  const { data, setData } = useContext(ContextGlobal);
  

  useEffect(() => {
    const dentists = JSON.parse(localStorage.getItem("favs"));
    const dentistInArray = dentists?.find(dentist => dentist.id === id);
    if(dentistInArray){
      setButtonValue("Add Fav");
    }
  },[])

  const handleEvent = (e) => {
    if(e.target.innerText === "ADD FAV"){
      addFav();
    }
  }

  const addFav = () => {
    const dentists = JSON.parse(localStorage.getItem("favs"));
    if(dentists){
      const dentistInArray = dentists.find(dentist => dentist.id === id);
      if(dentistInArray === undefined){
        const newArray = [...dentists, {name, username, id}]
        localStorage.setItem("favs", JSON.stringify(newArray));
        alert("Dentist added succesfully");
      }
      else {
        return;
      }
    }
    else{
      localStorage.setItem("favs", JSON.stringify([{name, username, id}]));
      alert("Dentist added succesfully");
    }
  }


  return (
    <div className="card">
    {/* En cada card deberan mostrar en name - username y el id */}
    {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
    {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
      
   
      <Link to={`detail/${id}`}>
      <img src="../public/images/doctor.jpg" width="200px" />
      <p>{name}</p>
      <p>{username}</p>  
      <p>{id}</p>   
      </Link>
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
