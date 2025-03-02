import React from 'react'
import Multi_drop_down from './DropDownMenu'
import { FaForward } from "react-icons/fa6";
import { FcReading } from "react-icons/fc";

function Class_selector() {
  return (
    <div className='h-[40vh] m-6 gap-6 flex flex-col items-center justify-center  bg-[#d4b8b8] rounded-3xl'>
        <h3 className='text-2xl flex items-center gap-2'>Choose your Class ,Stream And Subjects <FcReading/></h3>
        <Multi_drop_down />
        <button className='bg-[#ac7e7e] p-2 rounded-xl flex items-center gap-4 text-center  mr-5'>Go ahead <FaForward /></button>
    </div>
  )
}

export default Class_selector