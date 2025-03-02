import React from 'react'
import { CgProfile } from "react-icons/cg";

function Header() {
  return (
    <div>
        <div className=""></div>
        <header className='bg-[#8d7172]'>
            <h3 className='text-white font-bold p-2 flex items-center gap-2'><CgProfile className='border-2 border-black h-8 w-8 bg-white text-black'/> Hii!! , Welcome to Peer-to-Peer Learning</h3>
        </header>
        <nav className='bg-[#ac7e7e]'>
            <ul className='text-white p-2 flex justify-start gap-6'>
                <li>Home</li>
                <li>Resources</li>
                <li>Mentors</li>
                <li>Community</li>
                <li>Contact</li>
            </ul>
        </nav>
    </div>
  )
}

export default Header