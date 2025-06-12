"use client"
import { useState } from "react";

export default  function Button(){
    const [count, setCount] = useState(0);

    return <div>
        {count}
        <button onClick={ () => setCount(prev => prev + 1 ) }>Click Me</button>
    </div>
}