import React from 'react'
import tLogo from "../img/sindicLogoTransparent.png"
import pPhoto from "../img/profile-photo.jpg"
import ChatList from './ChatList'

function SideBar() {
  return (
    <div className="relative w-64 h-full bg-purple-700">
        <div className="logoContainer w-full h-24 bg-red-300 flex items-center">
            <img src={tLogo} className="w-32 h-auto"></img>
            <p className="font-bold text-xl text-gray-100">SindicChat</p>
        </div>
        <ChatList />
        <div className="absolute bottom-0 w-full h-16 bg-cyan-600">
            <div className='w-full h-full flex items-center mx-6'>
                <div className="relative w-12 h-12">
                    <img src={pPhoto} className="rounded"></img>
                    <div className='absolute -bottom-1 -right-1 rounded-full w-4 h-4 bg-green-400'></div>
                </div>
                <p className="ml-6 font-bold text-l text-gray-100">Mischief</p>
            </div>
        </div>
    </div>
  )
}

export default SideBar