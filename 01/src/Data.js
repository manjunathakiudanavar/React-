import React, {useState} from 'react';
import Datas from './ Datas.json'

const Data = () => {
     const [nData,setnData]= useState(Datas);
     const handleRemove = (itemID)=>{
        setnData(nData.filter(item => item.id!==itemID))
     }
     
     
  return (
    <div>
      <ul>
        {
        nData.map(items =>
         <li key ={items.id}>
            {items.name}
            <br/>
            <button onClick={()=>handleRemove(items.id)} >Remove</button>
            
        </li>
        
        )
        }
        

       
      </ul>
      <br/>
      
      <button onclick>Clear</button>
    </div>
  )
}

export default Data
