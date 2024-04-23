import React, { useState, useEffect } from 'react';
import './styles.css'; 
import Layout from '../../components/Layout';


const Carrossel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    require('./images/image1.jpg'),
    require('./images/image2.webp'),
   require( './images/image3.jpg'),
   require( './images/image4.webp'),
   require( './images/image5.jpg'),
   require( './images/image6.webp'),
   require( './images/image7.jpg'),
   require( './images/image8.webp'),
   require( './images/image9.jpg'),
   require( './images/image10.webp'),
    // Adicione aqui os caminhos das suas imagens dentro da pasta "images"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <Layout>
    <div className="carrossel-container">
      {[...Array(10)].map((_, index) => {
        const imageIndex = (currentIndex + index) % images.length;
        const isActive = index < 3; // Ative as primeiras 3 imagens
        return (
          <img
            key={index}
            src={images[imageIndex]}
            alt={`Imagem ${imageIndex + 1}`}
            className={`carrossel-image ${isActive ? 'active' : ''}`}
          />
        );
      })}
    </div>
    
    </Layout>
  );
};

export default Carrossel;