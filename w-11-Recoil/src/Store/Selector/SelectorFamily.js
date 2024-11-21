import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const TodoFamilyS = atomFamily({
  key: "todoFamilyState1",
  default: selectorFamily({
    key: "getTodo",
    get: (id) => async ({get}) => {
      // throw new Promise(x => setTimeout(r,4000))
      await new Promise(x => setTimeout(x,4000))
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`); 
      console.log(response.data)
      return response.data;
    }
  })
})