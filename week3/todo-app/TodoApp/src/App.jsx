import { useState } from 'react'
import './App.css'
import {ReactQuiz} from './components/QuizCard';

function App() {
  const [start, setStart] = useState(false)

  function startQuiz(){
    setStart(true)
  }
  return (
    <>
    {!start && (<button onClick={startQuiz}>Start Quiz</button>)}
    {
      
      start && (
        <ReactQuiz />
      )
    }
    </>
  )
}

export default App
