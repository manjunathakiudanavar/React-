//  what react is react? 
//  react is the javascript library which helps to create the user interface
//  how to create react app 
//  in the terminal use the command npx create-react-app "name"
// after installing the packages it shows the file name 
// then we have to give the command cd filename
// then npm start
// when we are using create my react app we should use npm start to start the execution 
// when we use another tag we should wrap it with <div></div>
// how do we write javascript in the jsx ? function App(){
//     let a=2;
//     return(
       
//         <div>
//              to get the value we use curly braces {a} it gives us 2
//              {a+2} this gives us addition 
//         <h1>Hello iam component</h1>
//         <p> this is the sample of react component</p>
//         <p> this is the sample of react component of manjunath</p>
//         </div>
//     )
//  }
// how do i use css and inline css?
//  <div>
//              {a+2}
//         <h1 className='main'>Hello iam component</h1>
//         <p className= 'main'> this is the sample of react component</p>
//         <p style={{backgroundColor: "blue",color: "white"}}> this is the sample of react component of manjunath</p>
//         </div>
//     )
//  }
// INCEPTION OF THE COMPONENT
//  export default App;import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Mobile from './mobile.js';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     < Mobile/>
//   </React.StrictMode>
// ); 
//  import React from 'react'
 
// function Mobile() {
//    return (
//      <div>
//        <h1> hello iam manjunath </h1>
//      </div>
//    )
//  }
//   export default Mobile;

// whenever we are loading the img rmember we have to write <img src='image address'/> after this closing arrow only we have to write Header or p 
// if we are applying css we have to import directly css file itslef './Mobile.css''

// Props >> props are the data send to parent to child component 
// to use props we have to set in the the values using 
// Remember this differance whenever you export the particular document and import it into another document the exported document will become child document and imported document becomes parent component
// first we create a file for data and the data will be in jason format 
//  [
//     {
//      " image ":
//       "https://m.media-amazon.com/images/I/81cEgv9e-RL._SL1500_.jpg",
//       "price": "80000"
//     }
//     ,
//     {
//         "image ":"https://m.media-amazon.com/images/I/71WbAwLW7OL._SL1500_.jpg",
//         "price":"90000"
//     }
   
//  ] and will imports this parent component and we map it using json file file name 

// then in parent component will map the the element through for example {books.map((ele)=>{
    // 
    // ele.image
    // ele.price})}
    //  import React from 'react'
//  import MobileList from './MobileList';
//  import books from './books.json'
 
// function Mobile() {
//    return (
//      <div>
//       {books.map((ele)=>{
//         return <MobileList
//         price= {ele.price}
//         image={ele.image}
//         />
//       })}
//      </div>
//    )
//  }
//   export default Mobile;
// then from child component we


// import React from 'react'
// import './MobileList.css'

//  function MobileList(props) {
//     const{image,price}=props;
//     return (
//     <div className='main'>
//         {console.log(props)}
        
//      <img className='image' src={image}
//       alt="Mobile"
//      width="300"
//      />
//      <div>
//      <h2>Iphone 18 Pro</h2>
//      <p>Price:{price}</p>
//      <button>Add to cart</button>
//      </div>
//     </div>
//   )
// }
// export default MobileList;
