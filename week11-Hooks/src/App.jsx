import { useState } from 'react'
import { useFetch } from './Hooks/useFetch'
import { usePrev } from './Hooks/usePrev';
import { useDebounce } from './Hooks/useDebounce';

function App() {
  const [count, setCount] = useState(0);
  const tasks = useFetch("url");
  const prev = usePrev(count);

  function sendDataToBackend(){
    fetch("api.amazon.com/search/");
  }

  const debouncedFn = useDebounce(sendDataToBackend);
  return (
    <>
    <input type='text' onChange={debouncedFn}></input>
      {/* Taks will render here {JSON.stringfy(tasks)}*/}
      <button onClick={() => setCount(count+1)}>onClick</button>
      <p>Count: {count}</p>
      <p>Previous count: {prev}</p>
    </>
  )
}

export default App
