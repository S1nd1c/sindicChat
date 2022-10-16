import React from 'react'
import { useState, forwardRef, useImperativeHandle } from 'react'
import MessageView from './MessageView'


const Messages = forwardRef((props, ref) => {
  const [messages, setMessage] = useState([])

  const pushMessage = (message) => {
    setMessage([...messages, message])
  }

  useImperativeHandle(ref, () => ({
    pushMessage
  }))

  return (
    <div className='w-full h-full flex flex-col-reverse overflow-y-auto'>
      {
        messages.map((message, i) => (
          <MessageView key={i} user={message.username} content={message.content}/>
        ))
      }
    </div>
  )
})

export default Messages