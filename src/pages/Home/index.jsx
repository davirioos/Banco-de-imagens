import './style.css';
import MeuComponente from '../../components/LoopImg/index';
import Imagens from '../../components/image';

export default function Home (){

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
      <MeuComponente imagens={Imagens} className='img-loop'/>
    </div>
    </>
  );
}