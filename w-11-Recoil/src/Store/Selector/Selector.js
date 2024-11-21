import { selector } from "recoil";
import { Counter1 } from "../Atoms/atoms";

export const CounterSelector = selector({
  key: "IsEven",
  get: ({get}) => { 
    const count = get(Counter1);
    const IsEven = count % 2 === 0;
    return IsEven;
   }
})

// Slector is used When you don't want to re-render whole component based on Atom
// Selector is derived State of Atoms 