import React from 'react'

function TextBox() {
  return (
    <div className="absolute bottom-0 w-full border-t-2 border-violet-300 h-16 flex items-center justify-center px-5 py-2">
        <input className='p-3 w-full h-full rounded' placeholder='Escribe un mensaje...'/>
    </div>
  )
}

export default TextBox