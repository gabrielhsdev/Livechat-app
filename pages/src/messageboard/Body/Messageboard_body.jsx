import React, { useState, useEffect, useContext} from 'react';
import { Flex, VStack, StackDivider, Box, Text} from '@chakra-ui/react'
import Messageboard_body_header from './Messageboard_body_header'
import Messageboard_body_content from './Messageboard_body_content'
import Messageboard_body_input from './Messageboard_body_input'
import { UserContext } from '../../../context/UserContext'
import {getMessages} from '../../../../firebase_actions/chat/get_messages'

function Messageboard_body() {

  const [chat, setChat] = useState(null);
  const [recipientName, setRecipientName] = useState(null);
  const { selectedContact, setSelectedContact } = useContext(UserContext);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    console.log('selectedContact: ', selectedContact);
    getMessages(selectedContact, currentUser, setChat);
  }, [selectedContact, currentUser, setChat]);

  //Update ou chat name
  useEffect(() => {
    if (chat && chat[0]) {
      setRecipientName(chat[0]);
    } else {
      setRecipientName('No Chat Selected');
    }
  }, [chat]);

  return (
    <Box className='all100'>
      <VStack divider={<StackDivider borderColor='gray.200' />} spacing={3} align='stretch' className='all100' >

        <Box  h='5%' maxH='25%'>
          <Messageboard_body_header recipientName={recipientName} chatReference={chat} />
        </Box >

        <Box  h='85%' display='flex' overflowY='auto'>
          <VStack align='stretch' spacing={2} w='100%' >
            <Messageboard_body_content chatContent={chat} />
          </VStack>
        </Box >

        <Box  h='10%' maxH='25%' w='100%'>
          <Messageboard_body_input chatReference={chat}/>
        </Box>
        
      </VStack>
    </Box>
  )
}

export default Messageboard_body