import React, { useEffect, useState } from 'react'

function Multi_drop_down() {

  const [stream,setStream] = useState("")
  const [subject,setSubject] = useState([])
  

  const handleChange = ()=>{
    switch (stream) {
      case 'arts':
        setSubject(['English','Hindi','Political Science','History'])
        break;
      case 'comm' :
        setSubject(['Accountancy','Business Studies','Economics','Informatics Practices/ Mathematics','English'])
        break;
      case 'med' :
        setSubject(['Physics','Chemistry','Biology','English'])
        break;
      case 'non-med':
        setSubject(['Physics','Chemistry','Mathematics','English'])
        break;
      default:
        setSubject([])
        break;
    }
  }

  useEffect(handleChange,[stream])

  

  return (
    <div className='w-[100%] items-center'>
        <form action="#" className='flex justify-evenly  w-[100%]'>
            <select name="dropClass" className='bg-[#efecec] rounded-xl p-2' id="3">
                <option value="selClass">Select Class</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
            </select>
            <select name="drop1" id="1" className='bg-[#efecec] rounded-xl p-2' onChange={(e) => setStream(e.target.value)}>
              <option value="Select">Select Stream</option>
              <option value="arts">Arts</option>
              <option value="comm">Commerce</option>
              <option value="med">Medical</option>
              <option value="non-med">Non-Medical</option>
            </select>
            <select name="drop2" className='bg-[#efecec] rounded-xl p-2' id="2">
              <option value="sel">Select a Subject</option>
              {
                subject.map((sub, index) => (
                  <option key={index} value={sub}>{sub}</option>
                ))
              }
            </select>
        </form>
    </div>
  )
}

export default Multi_drop_down