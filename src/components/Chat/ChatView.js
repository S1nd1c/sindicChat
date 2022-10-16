import React from 'react'
import {useRef} from 'react'
import Header from './Header'
import TextBox from './TextBox'
import Messages from './Messages'

function ChatView() {
  const messages = useRef(null)
  return (
    <div className='w-5/6 h-full flex flex-col justify-between bg-gray-100'>
      <Header title="general"/>
      <Messages ref={messages}/>
      <TextBox reference={messages}/>
    </div>
  )
}

export default ChatView