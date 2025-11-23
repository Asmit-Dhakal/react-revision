import React, { useState } from 'react'
const App = () => {
  const [num, setNum] = useState(10)
  const btnClicked = () => {

setNum(prev=>(prev+1))
  }
  return (
    <div>
      <h1>{num}
      </h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App 





// import React, { useState } from 'react'
// const App = () => {
//   const [num, setNum] = useState([1,2,3,4,5])
//   const btnClicked = () => {
// const newNum= [...num]
// newNum[0]=newNum +1
// setNum(newNum)
//   }
//   return (
//     <div>
//       <h1>{num[0]}
//       </h1>
//       <button onClick={btnClicked}>click</button>
//     </div>
//   )
// }

// export default App 











// import React from 'react'
// import { useState } from 'react'


// const App = () => {
//   const [num, setNumm] = useState([0,1,2,3,4,5])

//   const btnCLick=()=>{
//     const newNum=[...num]
//     newNum.push(newNum.length)
//     setNumm(newNum)
//   }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={btnCLick}>Click</button>
//     </div>
 
// )
// }

// export default App





// i
// cont [num, setNumm] = useState(0)mport React, { useState } from 'react'

// const App = () => {
//   const [num, setNum] = useState({user:'Sarthak', age:24})
//   const btnClicked=()=>{
//     const newNum={...num}
//     newNum.user='John Doe'
//     newNum.age=30
//     console.log(newNum)
//      setNum(newNum)
//   }
//   return (
//     <div>
//       <h1>{num.user},{num.age}</h1>
//       <button onClick={btnClicked}>click</button>
//     </div>
//   )
// }

// export default App
   
  