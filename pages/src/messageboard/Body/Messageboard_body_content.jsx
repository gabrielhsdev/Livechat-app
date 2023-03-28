import React, { useEffect, useRef } from 'react'
import { Flex, Box, Text, VStack } from '@chakra-ui/react'
import Messageboard_message from './Messageboard_message'

const messages = [
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

function Messageboard_body_content() {

  //Makes us scroll to the bottom of the message board
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
      scrollToBottom()
  }, [messages]);

  return (
    <VStack
        spacing={4}
        align='stretch'
        maxH='100%'
        w='100%'
        minW='100%'
        p={3}
        >
          {messages.map(message => <Messageboard_message key={message.id} status={message.status} message={message.message} />)}
          <div ref={messagesEndRef} />
    </VStack>
  )
}

export default Messageboard_body_content