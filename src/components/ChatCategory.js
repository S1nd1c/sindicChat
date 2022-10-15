import React from 'react'
import { useState } from 'react';
import { RiArrowDropDownLine, RiAddFill } from 'react-icons/ri';
import ChatButton from './ChatButton';

function ChatCategory(props) {

    const [open, setOpen] = useState(true);

    const closeDropdown = () => {
        setOpen(!open);
    }

    const searchUser = () => {
        console.log("Search")
    }

    return (
        <div className="mb-5">
            <div className='relative flex items-center'>
                <div className='group w-full h-8 flex items-center' onClick={closeDropdown}>
                    {
                        open ?
                            <RiArrowDropDownLine className="text-2xl text-gray-300 group-hover:text-white"/>
                        :
                            <RiArrowDropDownLine className="text-2xl text-gray-300 group-hover:text-white -rotate-90"/>
                    }
                    <p className='ml-2 text-gray-300 group-hover:text-white text-sm font-bold'>{props.categoryName}</p>    
                </div>
                <RiAddFill className='absolute right-8 text-lg text-gray-300 hover:text-white cursor-pointer' onClick={searchUser}/>
            </div>
            {
                open &&
                <div>
                    <ChatButton isDM chatName="politono11"/>
                    <ChatButton isDM chatName="ikerlpz11"/>
                    <ChatButton isDM chatName="lili"/>
                    <ChatButton isDM chatName="mohamed"/>
                </div>
            }
        </div>
        
    )
}

export default ChatCategory