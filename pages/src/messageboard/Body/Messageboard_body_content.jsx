import React, { useEffect, useRef, useContext } from 'react'
import { Flex, Box, Text, VStack } from '@chakra-ui/react'
import { getMessages } from '../../../../firebase_actions/chat/get_messages';
import Messageboard_message from './Messageboard_message'
import { UserContext } from '../../../UserContext'

function Messageboard_body_content(props) {

  let messages = null;
  let orderedMessages = [];
  let chatContent = props.chatContent;
  const { currentUser } = useContext(UserContext);
  //console.log(chatContent);

  if(chatContent == null){
    messages = null;
  }else{
    messages = chatContent[2];
    if (messages != null) {
      orderedMessages = Object.keys(messages).map(message => {
        //console.log(messages[message].message);
        const newMessage = {
          from: messages[message].from,
          message: messages[message].message,
          timestamp: messages[message].timestamp
        };
        if (currentUser != null && messages[message].from == currentUser.uid) {
          newMessage.status = 'right';
        } else {
          newMessage.status = 'left';
        }
        return newMessage;
      })
      .sort((a, b) => a.timestamp - b.timestamp);
      console.log(orderedMessages);
    }
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
            ? Object.keys(orderedMessages).map(messageIndex => <Messageboard_message key={messageIndex} status={orderedMessages[messageIndex].status} message={orderedMessages[messageIndex].message} />)
            : <Text>Empty conversation</Text>
          }
          <div ref={messagesEndRef} />
    </VStack>
  )
}

export default Messageboard_body_content