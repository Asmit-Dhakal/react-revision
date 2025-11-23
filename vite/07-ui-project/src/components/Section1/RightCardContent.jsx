import React from 'react'

const RightCardContent = (props) => {
  console.log(props);
  return (
      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h1 className='bg-white text-xl rounded-full  font-semibold h-10 w-10 flex justify-center items-center'>{props.id+1}</h1>
        <div>
        <p className='text-lg leading-relax text-white mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Amet aspernatur eaque nulla! Voluptas earum cumque, tenetur corporis totam possimus! Officia!
        </p>
        <div className='flex justify-between'>
          <button style={{backgroundColor:props.color}} className='text-white font-medium px-8 py-3 rounded-full'>{props.tag}</button>
          <button  className='bg-blue-600 text-white font-medium px-4 py-3 rounded-full'><i className='ri-arrow-right-line'></i></button>
        </div> 
        </div>
      </div>
  )
}

export default RightCardContent
  