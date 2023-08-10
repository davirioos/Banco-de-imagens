import React from 'react';
import { useParams } from 'react-router-dom';
import './style.css';


const Download = ({ imagens }) => {
  const { id } = useParams();
  const imagem = imagens.find(img => img.id === id);

  if (!imagem) {
    return <div>Imagem não encontrada</div>;
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imagem.url;
    link.download = `imagem_${id}.jpg`;
    link.click();
  };

  return (
    <div>
      <div className='conteiner-download'>
        <img src={imagem.url} alt={`imagem ${imagem.id}`} className='imagens-download' />
        <button onClick={handleDownload} className='button-download'>Download</button>
      </div>
    </div>
  );
};

export default Download;