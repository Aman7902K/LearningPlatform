import React from 'react'
import { RiUserCommunityLine } from "react-icons/ri";

function Connect_peers() {
  return (
    <div className="connect ml-6 mt-4 ">
        <h4 className='font-bold flex items-center gap-2'><RiUserCommunityLine />  Connect with Peers</h4>
        <p className='font-light'>Join our community to share study materials and collaborate on projects.</p>
        <button className='border-2 text-white text-sm rounded-3xl p-2 text-center bg-[#ac7e7e]'>Join Now</button>
    </div>
  )
}

export default Connect_peers