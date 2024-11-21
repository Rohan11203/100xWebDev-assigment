import { useState } from 'react'
import { IncreaseBtn } from './components/increase'
import { DecreaseBtn } from './components/decrease'
import { createContext } from 'react'
import { Counter } from './components/Counter';

export const BtnContext = createContext();

function BtnContextProvider({children}){
  const [count, setCount] = useState(0)
  return (
    <BtnContext.Provider value={{count,setCount}}>
      {children}
    </BtnContext.Provider>
  )
}
function App() {
  

  return (
    <>
    <BtnContextProvider>
        <IncreaseBtn />
        <DecreaseBtn />
        <Counter />
      </BtnContextProvider>
     

    </>
  )
}

export default App
