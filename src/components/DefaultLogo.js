import React from 'react'
import "../App.css"

function DefaultLogo(props) {
    return (
        <div className={`${props.size || "small"} rounded bg-orange-500 flex justify-center align-center text-white text-md font-normal`}>
            <p>{props.chatName[0].toUpperCase()}</p>
        </div>
    )
}

export default DefaultLogo