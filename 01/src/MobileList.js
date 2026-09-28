import React from 'react'
import './MobileList.css'

 function MobileList() {
    const image="https://m.media-amazon.com/images/I/81cEgv9e-RL._SL1500_.jpg"
    const price='1800$'
   return (
    <div className='main'>
     <img className='image' src={image}
      alt="Mobile"
     width="300"
     />
     <div>
     <h2>Iphone 18 Pro</h2>
     <p>{price}</p>
     <button>Add to cart</button>
     </div>
    </div>
  )
}
export default MobileList;
