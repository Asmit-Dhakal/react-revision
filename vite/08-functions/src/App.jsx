import React from 'react'


const App = () => {
  // function bthClicked() {
  //   console.log("button clicked")
  // }
  // function mouseEnter()
  // {
  //   console.log("mouse entered")
  // }

  function inputChanging(val) {
    console.log(val)
  }
  return (
    <div>
      <h1> Helloo , guyz </h1>
   {/* ?   <button onMouseEnter={mouseEnter} onClick={bthClicked}>change user</button> */}
      {/* <button onMouseEnter={mouseEnter} onClick={bthClicked}>2nd button</button> */}
      <input onChange={function(elem)
        {
          inputChanging(elem.target.value)
        }
      } type='text' placeholder='Enter Name'/>

      <div>
        <div onMouseMove={(elem)=>
          console.log(elem.clientX)
        } 
        className='box'>

        </div>
      </div>
    </div>
    
  )
}

export default App