 import React from 'react'
 import MobileList from './MobileList';
 
function Mobile() {
   return (
     <div>
       <MobileList price={80000}/>
       <MobileList price={90000}/>
       <MobileList price={100000}/>
       <MobileList/>
       <MobileList/>
     </div>
   )
 }
  export default Mobile;