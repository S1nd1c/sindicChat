import React from 'react'
import { RiHashtag } from 'react-icons/ri'

function Header(props) {
  return (
    <div className='relative w-full h-24 flex items-center border-b-2 border-violet-300'>
        <div className="p-14 font-bold text-violet-600 text-2xl flex items-center">
            <RiHashtag className="text-3xl"/>
            <p className="ml-2">{props.title}</p>
        </div>
    </div>
  )
}

export default Header