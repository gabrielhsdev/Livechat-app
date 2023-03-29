import React from 'react'
import useWindowSize from '@/hooks/useWindowSizechatapp'
import { Flex, Text, Box, Button, Spacer, useDisclosure, Input} from '@chakra-ui/react'
import { PhoneIcon, DeleteIcon, HamburgerIcon } from '@chakra-ui/icons'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import Sidebar_drawer from '../Drawer_sidebar/Sidebar_drawer'

function Messageboard_body_header() {

  //Check for mobile screens on grid
  const size = useWindowSize();    

  //Drawer function
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <Flex className='all100' p={1}>
        <Box w='70%' h='100%' display='flex' alignItems='center'>
            <Text fontWeight="bold">Username...</Text>
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