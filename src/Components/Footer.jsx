import React from 'react'
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'



const Footer = () => {

  const { state } = useContext(ContextGlobal)
  return (
    <footer>
        <p>Powered by</p>
        <img src="../public/images/DH.png" alt='DH-logo' />
      
   
    </footer>
  )
}

export default Footer