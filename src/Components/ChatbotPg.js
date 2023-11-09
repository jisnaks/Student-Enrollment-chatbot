import React from 'react'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../Chatbot/config'
import ActionProvider from '../Chatbot/ActionProvider'
import MessageParser from '../Chatbot/MessageParser'

function ChatbotPg() {
  return (
    <div className='d-flex justify-content-center  mt-5'>
      <Chatbot  config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
    </div>
  )
}

export default ChatbotPg
