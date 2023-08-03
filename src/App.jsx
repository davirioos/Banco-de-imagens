import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Routas from './Routes/Routes'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routas />
    </BrowserRouter>
  )
}

export default App
