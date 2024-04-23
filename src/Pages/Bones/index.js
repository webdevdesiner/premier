import React from "react";
import Layout from '../../components/Layout'
import './styles.css'
import bone from './image/images.jpeg'

const Bones = () => {

    return(
        <Layout>
            <div className="areProdutoGeral">
            <div className="areaProdutos">
                <div className="areaProduto">
                    <img src = {bone} className="fotoProduto"/>
                    <div className="descricaoProduto">
                    <h6>Alpargata tradicional</h6>
                    <p>R$ 59,99</p>
                </div>
                
                </div>

                

                <div className="areaProduto">
                    <img src = {bone} className="fotoProduto"/>
                    <div className="descricaoProduto">
                    <h6>Alpargata tradicional</h6>
                    <p>R$ 59,99</p>
                </div>
                
                </div>
            </div>
            <div className="areaProdutos">
                <div className="areaProduto">
                    <img src = {bone} className="fotoProduto"/>
                    <div className="descricaoProduto">
                    <h6>Alpargata tradicional</h6>
                    <p>R$ 59,99</p>
                </div>
                
                </div>

                <div className="areaProduto">
                    <img src = {bone} className="fotoProduto"/>
                    <div className="descricaoProduto">
                    <h6>Alpargata tradicional</h6>
                    <p>R$ 59,99</p>
                </div>
                
                </div>
            </div>
            
            </div>
            
        </Layout>
    )
}

export default Bones