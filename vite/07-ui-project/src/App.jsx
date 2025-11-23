import React from 'react'
import Section2 from './components/Section2/Section2'
import Section1 from './components/Section1/Section1'

const App = () => {
  const users =[
    {
    img:'https://images.unsplash.com/photo-1696453423332-e2e75f5c8dfd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764',
    intro:'',
    color:'red',
    tag:'Satisfied'
    } ,
  {
    img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688',
    intro:'',
    color:'black',
    tag:'Underserved'
  },
  {
    img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
    intro:'',
    color:'green',
    tag:'Underbanked'
  },
   {
     img:'https://images.unsplash.com/photo-1507206130118-b5907f817163?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
    intro:'',
    color:'pink',
    tag:'Normal'
  },
  {  img:'https://images.unsplash.com/photo-1589038451932-fd10f966e098?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2Zlc3Npb25hbCUyMHNleHklMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
    intro:'',
    color:'orange',
    tag:'Simple'
  }
]

  return (
    <div >
      <Section1 users={users}/>
      {/* <Section2/> */}
    </div>
  )
}

export default App
App