
import './App.css'
import ChatInput from './components/ChatInput'
import Chats from './components/Chats'
import Header from './components/Header'
import { ChatInputProvider } from './context/ChatProvider'

function App() {


  return (
    <>
      <ChatInputProvider>
        <div className='w-full h-full flex flex-col justify-center items-center m-auto'>
          <Header />
          <Chats />
          <ChatInput />
        </div>

      </ChatInputProvider>


    </>
  )
}

export default App
