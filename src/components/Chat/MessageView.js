import React from 'react'
import DefaultLogo from '../DefaultLogo'

function MessageView() {
  return (
    <div className="w-full h-16 flex items-center pl-5 border-l hover:border-violet-600 hover:bg-slate-200
    200">
        <DefaultLogo size="medium" chatName="lili"/>
        <div className="ml-4">
            <div className='flex items-center'>
              <p className='text-lg font-bold'>lili</p>
              <p className='text-sm text-gray-600 ml-3'>Hoy a las 11:00</p>
            </div>
            <p>Estoy malito 😵‍💫😵🥴</p>
        </div>
    </div>
  )
}

export default MessageView