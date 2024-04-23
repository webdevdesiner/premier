import React from 'react'
import './styles.css'
import logo from './imagens/logo.png'
import premier from './imagens/PremierImportacoes.png'
import mercado from './imagens/Ativo 4mercado.png'
import menuicone from './imagens/icone menu.png'

const Header = () => {
  return (
    <div className='headerArea'>
      <div className='headerAreaLogo'>
        <img className='logoPremier' src={logo} alt="imagem da Logo Premier" />
        <img className='nomePremier' src={premier} alt='nome Premier' />
        <img className='mercadoLogo' src={mercado} alt='carrinho de mercado' />
      </div>
      <div className='headerPesquisa'>
        <img className='menuIcone' src={menuicone} alt='icone Menu'/>
        <input className='pesquisaInput' placeholder='Digite sua pesquisa'/>
      </div>
    </div>
  )
}

export default Header