import React, { useEffect, useRef } from 'react'
import { Flex, Box, Text, VStack } from '@chakra-ui/react'
import Messageboard_message from './Messageboard_message'

//Will change later
const messages2 = [
  {
      id: 1,
      message:'Test message text would go inside this div. This is a test message to see how the app reacts',
      status:'right',
  },
  {
      id: 2,
      message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      status:'left',
  },
];

function Messageboard_body_content(props) {

  let messages = null;
  let chatContent = props.chatContent;

  if(chatContent == null){
    messages = null;
  }

  //Makes us scroll to the bottom of the message board
  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  useEffect(() => {
      scrollToBottom()
  }, [messages]);
  //End of scroll to bottom

  return (
    <VStack className='all100'  align='stretch' p={3} spacing={4} >
          {messages != null 
            ? messages.map(message => <Messageboard_message key={message.id} status={message.status} message={message.message} />)
            : <Messageboard_message key='1' status='right' message='No current messages in this convo' />
          }
          <div ref={messagesEndRef} />
    </VStack>
  )
}

export default Messageboard_body_content