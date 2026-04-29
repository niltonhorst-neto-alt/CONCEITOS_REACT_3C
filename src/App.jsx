import { useState } from 'react'
import './App.css'
import Login from './paginas/Login'
import Cadastro from './paginas/Cadastro'
import Usuarios from './paginas/Usuarios' 

function App() {
  const [tela, setTela] = useState('login');
  
  const trocarDeTela = (pagina) => {
    setTela(pagina)
  }

const renderizar = () => {
  switch (tela) {
    case 'cadastro':
      return <Cadastro />
    case 'login':
      return <Login />
    case 'usuarios':
      return <Usuarios />
    default:
      return <Login />
  }
}
  return (
  <>
    <button onClick={() => trocarDeTela('cadastro')}>Cadastro</button>
    <button onClick={() => trocarDeTela('login')}>Login</button>
    <button onClick={() => trocarDeTela('usuarios')}>Lista de Usuários</button>

    <hr />

    {renderizar()}
  </>
)
}

export default App
