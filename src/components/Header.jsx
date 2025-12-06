import React from 'react'

const Header = () => {
  return (
   <div className="bg-cyan-700 h-10vh w-full flex items-center justify-center gap-102 py-5 "  >
    <h1 className='text-5xl font-extrabold'>USERBASE</h1>
    <div className='flex items-center justify-center gap-32 '>
      <h2 className='text-2xl font-medium '>HOME</h2>
     <h2 className='text-2xl font-medium '>ABOUT</h2>
      <h2 className='text-2xl font-medium '>CONTACT</h2>
    </div>
   </div>
  )
}

export default Header