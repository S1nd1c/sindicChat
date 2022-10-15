import React from 'react'
import ChatCategory from './ChatCategory'
import ChannelCategory from './ChannelCategory';

function ChatList() {
  return (
    <div className='w-full h-full'>
       <ChannelCategory categoryName="CANALES PÚBLICOS" />
       <ChannelCategory categoryName="CANALES PRIVADOS" />
       <ChatCategory categoryName="MENSAJES PRIVADOS" />
    </div>
  )
}

export default ChatList