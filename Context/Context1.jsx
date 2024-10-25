import React, { createContext, useState } from 'react'
import data from '../DummyData.json'
export const GlobalContext = createContext()
const Context = ({children}) => {
    const [Products] = useState(data);
    return (
        <GlobalContext.Provider value={Products}>
            {children}
        </GlobalContext.Provider>
    )
}

export default Context
