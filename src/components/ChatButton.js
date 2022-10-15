import React from 'react'
import { useState } from 'react'
import { RiHashtag } from 'react-icons/ri'

function ChatButton(props) {
    return (
        <div className={`h-7 flex justify-start items-center mx-6 pl-2 font-bold ${ props.selected ? 'bg-violet-500 text-white rounded' : 'text-gray-300 hover:text-white hover:bg-violet-600 rounded'}`}>
            <RiHashtag className='text-xl' />
            <p className='ml-3 text-md'>{props.chatName}</p>
        </div>
    )
}

export default ChatButton