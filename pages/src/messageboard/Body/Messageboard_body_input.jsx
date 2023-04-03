import React, {useState, useContext} from 'react'
import { Text, Box, Flex, Input, Button, Spacer } from '@chakra-ui/react'
import { ChevronRightIcon, AttachmentIcon } from '@chakra-ui/icons'
import { sendMessage } from '../../../../firebase_actions/chat/send_message'
import {UserContext} from '../../../../context/UserContext'

function Messageboard_body_input(props) {

  const { currentUser } = useContext(UserContext) || {};

  const [messageText, setMessageText] = useState("");
  let chatReference = props.chatReference;

  if(chatReference){
    let chatReference = props.chatReference[1]; 
    //console.log(chatReference[1]);
  }

  function handleSubmit() {
    sendMessage(chatReference, messageText, currentUser?.uid);
    setMessageText("");
  }

  return (
    <Flex alignItems="center" h="100%" w="100%" minW="100%" p={2}>
      <Box w="80%">
        <Input
          placeholder="Input..."
          size="md"
          variant="filled"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
        />
      </Box>
      <Spacer />
      <Box>
        <Button
          colorScheme="gray"
          variant="outline"
          onClick={handleSubmit}
          disabled={!messageText.trim()}
        >
          <ChevronRightIcon />
        </Button>
      </Box>
      <Spacer />
      <Box hidden>
        <Button colorScheme="gray" variant="outline">
          <AttachmentIcon />
        </Button>
      </Box>
    </Flex>
  );
}

export default Messageboard_body_input