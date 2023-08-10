import React from 'react';
import { Link } from 'react-router-dom';

const MeuComponente = ({ imagens }) => {
  const dividirEmGrupos = (array, tamanho) => {
    const grupos = [];
    for (let i = 0; i < array.length; i += tamanho) {
      grupos.push(array.slice(i, i + tamanho));
    }
    return grupos;
  };

  const gruposDeImagens = dividirEmGrupos(imagens, 4);

  return (
    <div>
      {gruposDeImagens.map((grupo, index) => (
        <div key={index} className='conteiner-imgs'>
          {grupo.map((url, i) => (
            <Link key={url} to={`imagem/${url.id}`}>
              <img key={i} src={url.url} alt={`imagem ${i}`} className='img-loop' />
            </Link>
          ))} 
        </div>
      ))}
    </div>
  );
};

export default MeuComponente;