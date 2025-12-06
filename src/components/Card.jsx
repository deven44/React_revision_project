import React from 'react'

const Card = (props) => {

    
  return (
    <div className=' h-30vh  bg-cyan-100 flex items-center justify-center flex-col relative w-69 p-4 rounded-2xl'>
     <img className='h-full w-full border-100 ' src={props.user.profile} alt="" />
     <h1 className='text-2xl font-medium'>{props.user.name}</h1>
     <div className='flex items-center justify-center w-full flex-row gap-5 text-cyan-800 '>
         <h3 className=''>{props.user.role}</h3> 
         <h3>{props.user.status}</h3>
    </div> 
    <button className='px-6 py-2  rounded-2xl text-2xl font-bold bg-cyan-950 text-white mt-1'>Add Friend</button>

    </div>
  )
}

export default Card