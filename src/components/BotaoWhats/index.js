import React from "react";
import './styles.css';
import zapLogo from './Ativo 2.png'

const BotaoWhats = () => {
    return(
        
        <button className="buttonAreawhats" >
        <img className="logoZap" src = {zapLogo}/>
        <div className="textoWhatsapp" >Whatsapp</div>
        </button>
        
    )
}

export default BotaoWhats
