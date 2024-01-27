import { useState } from 'react'
import Pokedex from './component/pokedex'
import {PokeAPIProvider} from './context/PokeAPIContext'

function App() {


  return (
    <PokeAPIProvider>
      <Pokedex/>
    </PokeAPIProvider>
  )
}

export default App
