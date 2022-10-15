import React from 'react'
import Header from './Header'
import TextBox from './TextBox'

function ChatView() {
  return (
    <div className='relative w-full h-full flex justify-center items-center bg-gray-100'>
      <Header title="general"/>
      <Messages />
      <TextBox />
    </div>
  )
}

export default ChatView