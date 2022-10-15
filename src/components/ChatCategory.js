import React from 'react'

function ChatCategory(props) {
  return (
    <div className='group w-full h-8 flex items-center mb-5'>
        <p className='ml-2 text-gray-300 group-hover:text-white text-sm font-bold'>{props.categoryName}</p>
    </div>
  )
}

export default ChatCategory