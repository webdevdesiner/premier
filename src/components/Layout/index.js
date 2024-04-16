import React from 'react'
import './styles.css'
import Header from '../Header'
import Footer from '../Footer'
import Menu from '../Menu'


const Layout = ({children}) => {
  return (
    <div className='fundoVerde'>
      <div className='layoutHeader'><Header/></div>
      <div className='layoutMenu'>
        <Menu/>
        </div>

         
      <main className='mainArea'>
        {children}
      </main>
      <div className='layoutFooter'><Footer/></div>
    
    </div>
  )
}

export default Layout