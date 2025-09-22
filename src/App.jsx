
import { useState } from 'react'
import './App.css'
import Connexion from './components/Connexion'
import Taches from './components/Tache'
import Inscription from './components/Inscription'

function App() {

  // const [route, setRoute] = useState(false)
   const [isLogged, setIsLogged] = useState(false);
   const [showLogin, setShowLogin] = useState(true); // toggle entre login/inscription

  return (
    <>
      {isLogged ? (
        <Taches setIsLogged={setIsLogged} />
      ) : showLogin ? (
        <Inscription setIsLogged={setIsLogged} setShowLogin={setShowLogin} />
      ) : (
        <Inscription setShowLogin={setShowLogin} />
      )}
    </>
  );
}

  // return (
  //   <div>
  //     { route ? <Taches/> : <Inscription setRoute = {setRoute}/> }
  //   </div>
 
  //   // <Connexion/>

  // )


export default App
