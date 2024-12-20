
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState(["Hello, Hiii"])
  const inputRef = useRef<HTMLInputElement>(null)
  const wsRef = useRef()
  
  function sendMessage (){

    if (!wsRef.current) {
      console.log('No WebSocket connection')
      return
    }
    const message = inputRef.current?.value
    wsRef.current.send(JSON.stringify({
      type: 'chat',
      payload: {
        message: message
      }
    }))
  }
  
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080")
    
    ws.onmessage = (e) => {
      console.log('Received: ', e.data)
      setMessage(m => [...m, e.data])
    }
    wsRef.current = ws;

    ws.onopen = () => {
      console.log('Connected to server')
      ws.send(JSON.stringify({
        type: 'join',
        payload: {
          roomId: 123
        }
      }))
    }
  },[]);
  return (
    <>
    <div>
    {
      message.map((msg, i) => <p key={i}>{msg}</p>)
    }
    </div>
      <input ref={inputRef} type='text' placeholder='Enter here'></input>
      <button onClick={sendMessage}>Send</button>
    </>
  )
}

export default App
