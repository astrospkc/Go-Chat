import { createContext, useState } from "react";

const ChatInputContext = createContext(null);

const ChatInputProvider = ({ children }) => {
    const [chatHistory, setChatHistory] = useState([]);

    return (
        <ChatInputContext.Provider value={{
            chatHistory,
            setChatHistory
        }}>
            {children}
        </ChatInputContext.Provider>

    )
}

export { ChatInputContext, ChatInputProvider }