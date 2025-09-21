import { createContext, useState } from "react";

const TacheContext = createContext()

export function MyTaskProvider({children}){
    const [taches, setTaches]=useState([])

    return  (
        <TacheContext.Provider value={{taches, setTaches}}>
            {children}
        </TacheContext.Provider>
    )
}