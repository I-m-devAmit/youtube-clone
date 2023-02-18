import React from 'react'

const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex items-center  shadow-sm p-2'>
            <img className='h-8 shadow-lg'
                alt="user"
                src="https://yt4.ggpht.com/ytc/AL5GRJVvSP_0no96oG98lBlTaGRzD4qs2MlMU2hDFfneFg=s32-c-k-c0x00ffffff-no-rj"
                height="40"
                width="40"
            />
            <span className='font-bold px-2'>{name}</span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessage;