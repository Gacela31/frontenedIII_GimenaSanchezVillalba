import React from "react";
import { useState, useContext} from "react";
import '../index.css'


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [send, setSend] = useState (false)
  const [errorSelect, setErrorSelect]= useState("")


  const onChangeName = (event) => {
    setName(event.target.value);
  }
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const validName = (name) =>{
    const validationName = name.trim();
    if(validationName.length > 5){
        return true
    }else{
        setErrorSelect("The name should have 5 letters or more");
    }
}

const validEmail = (email) =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(email)){
        return true
    }else{
        setErrorSelect("Invalid email address");
    }
}

const handleSubmit = (event) => {
  event.preventDefault();

  const isNameValid = validName(name);
  const isEmailValid = validEmail(email);

  if(isNameValid && isEmailValid){
      setSend(true);
      setErrorSelect("Thanks for contacting us!");
  } 
}

  return (
    <main className="">
      
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Full Name" value={name} onChange={onChangeName}/>
      <input type="email" placeholder="Email address" value={email} onChange={onChangeEmail} />
      <button type="submit" >Send</button>
    </form>
    <div className="error">{errorSelect}</div>
     
    </div>
    </main>
  );

};

export default Form;
