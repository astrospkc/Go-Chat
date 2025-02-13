import React, { useContext } from 'react'

import { ChatInputContext } from '../context/ChatProvider'

const Chats = () => {

    const { chatHistory } = useContext(ChatInputContext)
    console.log("this is the chat histroy: ", chatHistory)

    return (
        <div className='w-[100vh] h-[50vh] border-2 border-gray-500 p-4 rounded-3xl overflow-y-scroll justify-center items-center m-auto text-center'>
            {
                chatHistory && chatHistory.map((chat, index) => {
                    console.log("chat and chat payload: ", chat,)
                    const parseChat = JSON.parse(chat)
                    console.log("parseChat: ", parseChat)
                    return (
                        <div key={index} className='text-white'>
                            {parseChat.payload}
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Chats
