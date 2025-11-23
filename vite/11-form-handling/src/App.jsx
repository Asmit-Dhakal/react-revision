import React from 'react'

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter your name'/>
        <button type='submit'>Submit</button> 
      
      </form>  
    </>
  )
}

export default App
