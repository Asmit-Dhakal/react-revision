import React from 'react'
import Card from './components/Card.jsx'
const App = () => {
  return (
    <div className='parent'>
      <Card user = 'Hello1' age={18} img='https://images.unsplash.com/photo-1760679209630-08dec6207de6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1909'/>
      <Card user ='Hello2' age={21} img= 'https://images.unsplash.com/photo-1760479290166-e56ebc42efa9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764'/>
     <Card user ='Hello3' age={24} img= 'https://images.unsplash.com/photo-1761604716337-6ed79e4c34f1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500'/>
     </div>
  )
}

export default App
