import './App.css'
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route path="detail/:id" element={<Detail/>}/>
            <Route path="/favs" element={<Favs/>}/>
            <Route path="/contact" element={<Contact/>}/>  
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
