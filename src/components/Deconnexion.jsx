import React, { useState } from 'react'

export default function Deconnexion() {
 const [isLogged, setIsLogged] = useState(false);

  return (
    isLogged ? 
      <Taches setIsLogged={setIsLogged} /> :
      <Inscription setRoute={setIsLogged} />
  );
}
