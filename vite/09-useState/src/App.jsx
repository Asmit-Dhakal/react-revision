import React, { useState } from 'react'

const App = () => {
  const [value, setValue] = useState(5);
   function increaseNum(){
    setValue(value+1)
   }
   
   function decreaseNum(){
    setValue(value-1)
   }

  return (
    <div>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <h1>Value is {value}</h1>
    </div>
  )
}

export default App













// import React, { useState } from 'react'

// const App = () => {

//   const [num,setNum]=useState(20);
//  const [username,setUsername]=useState("JohnDoe"); 
//   const [arr,setArr]=useState([1,2,3,4,5]);
//   function changeNum(){
//     setNum(30);
//     setUsername("Alu");
//     setArr([6,7,8,9,10]);
//   }
//   return (
//     <div>
//       <h1> Value of num is {num} <br/> {arr}<br/>value of user is {username}</h1>
//       <button onClick={changeNum}>Click</button>
//     </div>
//   )
// }

// export default App