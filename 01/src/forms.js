 import React from 'react'
 import { useState } from 'react'
 
 const Forms = () => {
    // const[name, setName]=useState("")
    // const[Email,setEmail]=useState("")
    // const handleName= (e)=>{
    //     console.log(e.target.value)
    //     setName(e.target.value)
    // }
    // const handleEmail= (e)=>{
    //     console.log(e.target.value)
    //     setEmail(e.target.value)
    // }
    const[formData,setFormData]=useState({
        name:"",
        Email:""
    })
    const handleName=(e)=>{
        setFormData({
            ...formData,
            name: e.target.value 
        });

    };
    const handleEmail=(e)=>{
        setFormData({
            ...formData,
            Email:e.target.value
        });
    };
   return (
     <div>
       <label >
        name:
        <input type='text' value={formData.name} onChange={handleName} />
        <br/>
        Email:
        <input type='text' value={formData.Email} onChange={handleEmail}/>
        </label>
     </div>
   );
 }
 
 export default Forms;
 