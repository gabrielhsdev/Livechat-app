import React,  {useContext} from 'react'
import useWindowSize from '@/hooks/useWindowSizechatapp'
import { Flex, Text, Box, Button, Spacer, useDisclosure, Input} from '@chakra-ui/react'
import { PhoneIcon, DeleteIcon, HamburgerIcon } from '@chakra-ui/icons'
import { UserContext } from '../../../UserContext'
import Sidebar_drawer from '../Drawer_sidebar/Sidebar_drawer'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

function Messageboard_body_header(props) {
  let recipientName = props.recipientName;
  if(recipientName == 'e'){
    recipientName = 'No Chat Selected';
  }
  //console.log(recipientName);

  //Check for mobile screens on grid
  const size = useWindowSize();    

  //Drawer function
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  //Get context
  const userState = useContext(UserContext);
  let userData = userState.userData;

  return (
    <Flex className='all100' p={1}>
        <Box w='70%' h='100%' display='flex' alignItems='center'>
            <Text fontWeight="bold">{recipientName}</Text>
        </Box>
            <Spacer />
        <Box w='30%' h='100%' display='flex' alignItems='center' justifyContent='right'>
                <Button className='messageboard_body_header_btn' variant='outline' size='sm'><PhoneIcon /></Button>
                <Button className='messageboard_body_header_btn' variant='outline' size='sm'><DeleteIcon /></Button>
                {size.width < 768 && 
                  <Sidebar_drawer />
                }
        </Box>
    </Flex>
  )
}

export default Messageboard_body_header