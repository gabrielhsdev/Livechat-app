import React,  {useContext} from 'react'
import useWindowSize from '@/hooks/useWindowSizechatapp'
import { Flex, Text, Box, Button, Spacer, useDisclosure, Input} from '@chakra-ui/react'
import { PhoneIcon, DeleteIcon, HamburgerIcon } from '@chakra-ui/icons'
import { UserContext } from '../../../../context/UserContext'
import Sidebar_drawer from '../Drawer_sidebar/Sidebar_drawer'
import { deleteMessages } from '../../../../firebase_actions/chat/delete_messages'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

function capitalizeFirstLetter(string) {
  if(string == null || string == undefined)
    return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Messageboard_body_header(props) {

  let recipientName = props.recipientName;
  
  let chatReference = props.chatReference;
  if(chatReference != null && chatReference != undefined && chatReference[2] != null){
    chatReference = chatReference[1];
    console.log(chatReference);
  }

  if(recipientName == 'e'){
    recipientName = 'No Chat Selected';
  }
  //console.log(recipientName);

  //Check for mobile screens on grid
  const size = useWindowSize();    

  return (
    <Flex className='all100' p={1}>
        <Box w='70%' h='100%' display='flex' alignItems='center'>
          <Text fontWeight="bold">{capitalizeFirstLetter(recipientName)}</Text>
        </Box>
          <Spacer />
        <Box w='30%' h='100%' display='flex' alignItems='center' justifyContent='right'>
          <Button className='messageboard_body_header_btn' variant='outline' size='sm' hidden ><PhoneIcon /></Button>
          <Button className='messageboard_body_header_btn' variant='outline' size='sm' onClick={() => deleteMessages(chatReference)}><DeleteIcon /></Button>
          {size.width < 768 && 
            <Sidebar_drawer />
          }
        </Box>
    </Flex>
  )
}

export default Messageboard_body_header