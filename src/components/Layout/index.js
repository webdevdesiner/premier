import React from 'react'
import './styles.css'
import Header from '../Header'
import Footer from '../Footer'
import Menu from '../Menu'
import logo from '../Header/imagens/logo.png'

const Layout = () => {
  return (
    <div className='fundoVerde'>
      <div className='layoutHeader'><Header/></div>
      <div className='layoutMenu'><Menu/></div>      
      <main className='mainArea'>
        <img className='logoHome' src = {logo}/>
      </main>
      <div className='layoutFooter'><Footer/></div>
    
    </div>
  )
}

export default Layout