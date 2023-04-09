import { useContext, useState } from 'react'
import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context';
import ToogleButton from './ToogleButton';
import { StyledEngineProvider } from '@mui/material/styles';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch } = useContext(ContextGlobal)

  const handleTheme = (currentMode) => {
      dispatch({type: currentMode})
  }

  return (
    <StyledEngineProvider injectFirst>
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to="/">Home </Link>
      <Link to="/Contact">Contact </Link>
      <Link to="/Favs">Favs </Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <ToogleButton onClick={() => handleTheme(state.palette.mode)} />
    </nav>
    </StyledEngineProvider>
  )
}

export default Navbar