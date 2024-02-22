import { UserButton } from '@clerk/nextjs'
import React from 'react'

function NavBar() {
  return (
    <div className="flex items-center justify-between bg-white p-1 px-5 shadow-md">
        <img src="/logo2.jpg" alt="logo" height={100} width={100} />
        <div className='hidden md:flex space-x-3 items-center'>
            <h2 className='hover:bg-blue-400 px-2 cursor-pointer p-1 rounded-full hover:text-white'>Home</h2>
            <h2 className='hover:bg-blue-400 px-2 cursor-pointer p-1 rounded-full hover:text-white'>History</h2>
            <h2 className='hover:bg-blue-400 px-2 cursor-pointer p-1 rounded-full hover:text-white'>Contact Us</h2>
        </div>
        <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default NavBar
