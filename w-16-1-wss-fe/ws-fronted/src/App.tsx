import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState()
  const inputRef = useRef<HTMLInputElement>(null);


  function sendMessage(){
    if(!socket){
      console.error('No socket');
      return;
    }
    const message = inputRef.current?.value;
    //@ts-ignore
    socket.send(message);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onmessage = (event) => {
      console.log('Received: ', event.data);
    };
  },[])
  return (
    <>
      <input ref={inputRef} type='text' placeholder='Enter here'></input>
      <button onClick={sendMessage}>Send</button>
    </>
  )
}

export default App
