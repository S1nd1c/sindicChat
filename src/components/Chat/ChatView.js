import React from 'react'
import Header from './Header'
import TextBox from './TextBox'
import Messages from './Messages'

function ChatView() {
  return (
    <div className='w-5/6 h-full flex flex-col justify-between items-center bg-gray-100'>
      <Header title="general"/>
      <Messages />
      <TextBox />
    </div>
  )
}

export default ChatView