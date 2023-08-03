import React from 'react';

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
            <img key={i} src={url} alt={`Imagem ${i}`} className='img-loop' />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MeuComponente;