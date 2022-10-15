import React from 'react'
import ChatCategory from './ChatCategory'

function ChatList() {
  return (
    <div className='w-full h-full mt-2'>
       <ChatCategory categoryName="CANALES PÚBLICOS" />
       <ChatCategory categoryName="CANALES PRIVADOS" />
       <ChatCategory categoryName="MENSAJES PRIVADOS" />
    </div>
  )
}

export default ChatList