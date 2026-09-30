import React from 'react'
import './MobileList.css'

 function MobileList(props) {
    const{image,price}=props;
    return (
    <div className='main'>
        {console.log(props)}
        
     <img className='image' src={image}
      alt="Mobile"
     width="300"
     />
     <div>
     <h2>Iphone 18 Pro</h2>
     <p>Price:{price}</p>
     <button>Add to cart</button>
     </div>
    </div>
  )
}
export default MobileList;
