import { useContext } from "react"
import { BtnContext } from "../App"

export const DecreaseBtn = () => {

  const { count,setCount } = useContext(BtnContext)
  return (
    <button onClick={() => setCount(count-1)}> Decrease </button>
  )
}