import React from 'react'
import DefaultLogo from '../DefaultLogo'

function MessageView() {
  return (
    <div className="w-full h-16 flex items-center pl-5 border-x border-black">
        <DefaultLogo size="medium" chatName="lili"/>
        <div className="ml-4">
            <p className='text-lg font-bold'>lili</p>
            <p>Estoy malito 😵‍💫😵🥴</p>
        </div>
    </div>
  )
}

export default MessageView