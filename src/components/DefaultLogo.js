import React from 'react'

function DefaultLogo(props) {
    return (
        <div>
            <div className='w-6 h-6 bg-orange-500 flex justify-center align-center text-white text-md font-normal'>
                {props.chatName[0].toUpperCase()}
            </div>
        </div>
    )
}

export default DefaultLogo