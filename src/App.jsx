
import { useState } from 'react'
import './App.css'
import Connexion from './components/Connexion'
import Taches from './components/Tache'

function App() {

  const [route, setRoute] = useState(false)

  return (
    <div>
      {
        route ? <Taches/> : <Connexion setRoute = {setRoute}/>
      }
    </div>
 
    // <Connexion/>

  )
}

export default App
