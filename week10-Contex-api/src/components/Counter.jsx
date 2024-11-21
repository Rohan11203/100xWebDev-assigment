import { useContext } from "react"
import { BtnContext } from "../App"

export const Counter = () =>{
  const { count } = useContext(BtnContext)
  return (
    <div>
      Count : {count}
    </div>
  )
}