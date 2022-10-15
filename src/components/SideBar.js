import React from 'react'
import tLogo from "../img/white-logo.png"
import pPhoto from "../img/profile-photo.jpg"
import ChatList from './ChatList'

function SideBar() {
  return (
    <div className="relative w-64 h-full bg-purple-700 flex flex-col select-none">
        <div className="logoContainer w-full h-40 flex justify-center items-center">
            <img src={tLogo} className="w-auto h-full"></img>
        </div>
        <ChatList />
        <div className="absolute bottom-0 w-full h-16 border-t-2 border-violet-400">
            <div className='w-full h-full flex items-center mx-4'>
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