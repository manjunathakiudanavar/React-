 import React from 'react'
 import {useState , useEffect} from 'react' 
 
 const UseEffect = () => {
        const [clicked,setClicked]=useState();
    const[count,setCount]=useState(0);
    useEffect(()=>{
        alert("iam clicked")
    },[clicked])
   return (

     <div>
       <button onClick= {()=> setClicked("Subscribe")} >Subscribe</button>
       <br/>
              <button onClick= {()=> setClicked("to")} >to</button>
              <button onClick= {()=> setCount(count+1)}>Increse</button>
              <h1>{count}</h1>
     </div>
   )
 }
 
 export default UseEffect
 