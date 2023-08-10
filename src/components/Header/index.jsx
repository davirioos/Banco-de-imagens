import { Link } from 'react-router-dom';
import Logomarca from '../image/img/Logomarca.png'
import './style.css';

export default function header (){
  return (
    <header className='containerHeader'>
      <div className='brand'>
        <Link to={"/"}><img src={Logomarca}  width={'150px'}/></Link>
      </div>
      <nav className='menuMain'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cadastro">Cadastro</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}