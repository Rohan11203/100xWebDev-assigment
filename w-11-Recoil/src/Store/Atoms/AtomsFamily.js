import { atomFamily } from "recoil";
import { TODOS } from "../../TODOS";

export const AtomFamily = atomFamily({
  key: "counterFamily",
  default: id => {
    return TODOS.find(todo => todo.id === id);
  }
})