import React from 'react'
import Layout from '../../components/Layout'
import './styles.css'
import logo from './image/logo.png'
import BotaoWhats from '../../components/BotaoWhats'


const Home = () => {
  return (
    <div className='container'>
      <Layout >
      <div className='layoutBotaoWhatsapp'>
        <BotaoWhats/>
        </div>
        <img className='logoHome' src = {logo}/>
        
    
      </Layout>
    </div>
  )
}

export default Home