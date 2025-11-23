import React from 'react'
import LeftContent from './LeftContent.jsx'
import RightContent from './RightContent.jsx'
const Page1Content = (props) => {
  return (
    <div className='pb-16 pt-6 h-[90vh]  gap-10 flex items-center justify-between'>
      <LeftContent/>
      <RightContent users= {props.users}/>
    </div>
  )
}

export default Page1Content
