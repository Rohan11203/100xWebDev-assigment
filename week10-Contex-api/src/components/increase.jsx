import { useContext } from "react"
import { BtnContext } from "../App"

export const IncreaseBtn = () => {
  const { count , setCount } = useContext(BtnContext)
  return (
    <button onClick={() => setCount(count+1)}>Increase</button>
  )
}