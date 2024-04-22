import React from 'react'
import './styles.css'
import zap from './Ativo 2.png'
import {FaFacebook, FaGithub, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'





const Footer = () => {
  return (
    <div className='footerArea'>


    

  
    <ul class="wrapper">
      <li class="icon facebook">
        <span class="tooltip">Facebook</span>
        <span><i class="fab fa-facebook-f"><FaFacebook size = '2 em'/></i></span>
      </li>
      <li class="icon twitter">
        <span class="tooltip">Twitter</span>
        <span><i class="fab fa-twitter"><FaTwitter size = '2 em'/></i></span>
      </li>
      <li class="icon instagram">
        <span class="tooltip">Instagram</span>
        <span><i class="fab fa-instagram"><FaInstagram size= '2 em'/></i></span>
      </li>
      <li class="icon github">
        <span class="tooltip">Github</span>
        <span><i class="fab fa-github"><FaGithub size = '2 em'/></i></span>
      </li>
      <li class="icon youtube">
        <span class="tooltip">Youtube</span>
        <span><i class="fab fa-youtube"><FaYoutube size = '2 em'/></i></span>
      </li>
    </ul>
  

    </div>
  )
}

export default Footer