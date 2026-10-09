 import React from 'react'
 import { useState } from 'react'
 
const App = ()=> {
    const[count,setCount]= useState(4)
    const handleClickInc = () => {
        setCount(count+1);
    }
     const handleClickDec = () => {
        setCount(count-1);
    }

    
   return (
     <div>
       <h1>{count}</h1>
       <button onClick={handleClickInc}>+</button>
       <button onClick={handleClickDec}>-</button>
     </div>
   )
 }
 export default App
 