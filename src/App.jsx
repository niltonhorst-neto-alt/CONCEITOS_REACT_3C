import { useState } from 'react'
import './App.css'

function App() {
  let [carro, setCarro] = useState("BMW")

  function trocarCarro() {
    setCarro("Porsche")
  }

  return (
    <>
      <h1>{carro}</h1> 
      <button onClick={trocarCarro}>Trocar Carro</button>
    </>
  )
}

export default App
