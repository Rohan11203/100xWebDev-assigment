import { Suspense, useState } from 'react'
import { RecoilRoot, selectorFamily, useRecoilState, useRecoilStateLoadable, useRecoilValue, useSetRecoilState } from 'recoil'
import { Counter1 } from './Store/Atoms/atoms'
import { CounterSelector } from './Store/Selector/Selector';
import { AtomFamily } from './Store/Atoms/AtomsFamily';
import { TodoFamilyS } from './Store/Selector/SelectorFamily';

function App() {

  return (
    <>
    <RecoilRoot>
  <Suspense fallback={"Loading"}> 
    {/* Google if you don't remember suspense */}
      <TodoAtomFamily id={1} />
      <TodoAtomFamily id={2} />
      <TodoAtomFamily id={2} />

      <TodoSelectorFamily id={1} />
    </Suspense>
      <Counter />
      <Increase />
      <Decrease />
      <IsEvenn />
    </RecoilRoot>
    </>
  )
}
function TodoSelectorFamily({id}) {
  const [todoo,setTodoo] = useRecoilStateLoadable(TodoFamilyS(id));
  console.log(todoo.state);
  if(todoo.state == "loading") return <div>Loading...</div>
  return (
    <>
    {todoo.contents.id}
    {todoo.contents.title}
    </>
  )
}
function TodoAtomFamily({id}){
  const todo = useRecoilValue(AtomFamily(id));
  return <div>
    Todo : {todo.title}<br></br>
  
  </div>
}


function Counter(){

  const count = useRecoilValue(Counter1);
  return (
    <div>
      Count : {count}<br></br>
    </div>
  )
}

function IsEvenn() {
  const count = useRecoilValue(CounterSelector);
  return (
    <div>
      {count % 2 === 0? 'Even' : 'Odd'}<br></br>
    </div>
  )
}

function Increase(){
  const setCount = useSetRecoilState(Counter1);
  return (
    <button onClick={() => setCount(c => c + 2)}>Increase</button>
  )
}

function Decrease(){

  const setCount = useSetRecoilState(Counter1);
  return (
    <button onClick={() => setCount(c => c - 1)}>Decrease</button>
  )
}

export default App
