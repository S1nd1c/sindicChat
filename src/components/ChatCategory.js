import React from 'react'
import { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import ChatButton from './ChatButton';

function ChatCategory(props) {

    const [open, setOpen] = useState(true);

    const closeDropdown = () => {
        setOpen(!open);
    }

    return (
        <div className="mb-5">
            <div className='group w-full h-8 flex items-center' onClick={closeDropdown}>
            {
                open ?
                    <RiArrowDropDownLine className="text-2xl text-gray-300 group-hover:text-white"/>
                :
                    <RiArrowDropDownLine className="text-2xl text-gray-300 group-hover:text-white -rotate-90"/>
            }
            <p className='ml-2 text-gray-300 group-hover:text-white text-sm font-bold'>{props.categoryName}</p>
            </div>
            {
                open &&
                <ChatButton chatName="general"/>
            }
        </div>
        
    )
}

export default ChatCategory