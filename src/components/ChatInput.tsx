import React, { useContext, useEffect, useState } from 'react'
import { ChatInputContext } from '../context/ChatProvider'
import { connect, sendMsg } from '../api'

const ChatInput = () => {
    const { chatHistory, setChatHistory } = useContext(ChatInputContext)
    const [message, setMessage] = useState('')

    const handleMessage = (e) => {
        if (e.key == "Enter") {
            console.log("enter key pressed, input value: ", message)
            // if (chatHistory && chatHistory.length > 0) {
            //     setChatHistory([...chatHistory, message])
            // } else {
            //     setChatHistory([message])
            // }

            sendMsg(message)
            setMessage('')
        }

    }
    const handleChange = (e) => {
        // e.prevent.default()
        setMessage(e.target.value)
    }

    useEffect(() => {
        connect((msg) => {
            console.log("message in connect:: ", msg, msg.data)
            setChatHistory((prevChats) => [...prevChats, msg.data])
        })
    }, [])




    return (
        <div className='p-3 w-full justify-center items-center flex '>
            <input
                className='border-2 border-gray-500 p-2 rounded-3xl w-1/2'
                value={message}
                onKeyDown={handleMessage}
                onChange={handleChange}
                placeholder='Type a message' />

        </div>
    )
}

export default ChatInput
