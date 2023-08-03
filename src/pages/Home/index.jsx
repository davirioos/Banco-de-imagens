import './style.css';
import MeuComponente from '../../components/LoopImg';
import Imagem1 from '../../img/pexels-eberhard-grossgasteiger-640781.jpg'
import Imagem2 from '../../img/pexels-eberhard-grossgasteiger-443446.jpg'
import Imagem3 from '../../img/pexels-btgl-♡-3894157.jpg'
import Imagem4 from '../../img/pexels-james-wheeler-417074.jpg'
import Imagem5 from '../../img/pexels-piccinng-3052361.jpg'
import Imagem6 from '../../img/pexels-pixabay-326055.jpg'
import Imagem7 from '../../img/pxfuel (4).jpg'
import Imagem8 from '../../img/pxfuel (5).jpg'


export default function Home (){

  const imagens = [Imagem1,Imagem2,Imagem3,Imagem4,Imagem5,Imagem6,Imagem7,Imagem8,Imagem8,Imagem8,Imagem3,Imagem4,Imagem5,Imagem6,Imagem2,Imagem1  ]

  return (
    <>
    <div className="containerOne">
      <div className='containerForm'>
        <form>
          <input type='text' placeholder='Pesquisar...' className='containerInput inputStyle' />
        </form>
      </div>
    </div>
    <div className='image-grid-container'>
      <MeuComponente imagens={imagens} className='img-loop'/>
    </div>
    </>
  );
}