import React from 'react'
import {useRef} from 'react'
import {RiSendPlane2Fill} from "react-icons/ri"
import createMessage from "../models/message"

function TextBox(props) {

  const sendMessage = () => {
    const message = createMessage("mischief", "Hello world");
    props.reference.current.pushMessage(message);
  }

  return (
    <div className="relative w-full border-t-2 border-violet-300 h-16 flex items-center justify-center px-5 py-2">
        <input className='p-3 w-full h-full rounded focus:border-violet-600' placeholder='Escribe un mensaje...'/>
        <RiSendPlane2Fill className='absolute right-5 text-2xl mr-2 cursor-pointer text-violet-500' onClick={sendMessage}/>
    </div>
  )
}

export default TextBox