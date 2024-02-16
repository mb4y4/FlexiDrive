import { UserButton } from '@clerk/nextjs'
import React from 'react'

function NavBar() {
  return (
    <div  className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
        <img src="/logo2.jpg" alt="logo"  style={{width: "7%"}} />
        <div className='flex space-x-3 items-center'>
            <h2 className='hover:bg-blue-400 px-3 cursor-pointer p-2 rounded-full hover:text-white'>Home</h2>
            <h2 className='hover:bg-blue-400 px-3 cursor-pointer p-2 rounded-full hover:text-white'>History</h2>
            <h2 className='hover:bg-blue-400 px-3 cursor-pointer p-2 rounded-full hover:text-white'>Contact Us</h2>
            <div>
                <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
    </div>
  )
}

export default NavBar