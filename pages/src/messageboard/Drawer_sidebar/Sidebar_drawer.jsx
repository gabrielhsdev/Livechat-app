import React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useDisclosure, Input, Button, Flex, Box, VStack, Text} from '@chakra-ui/react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import Sidebar_drawer_contacts from './Sidebar_drawer_contacts'
import Sidebar_drawer_header from './Sidebar_drawer_header'

function Sidebar_drawer() {

    //Drawer function
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
    <Button 
        className='messageboard_body_header_btn' 
        variant='outline' 
        ref={btnRef}
        onClick={onOpen}
        size='sm'
    >
    <HamburgerIcon />
    </Button>
    <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
    >
    <DrawerOverlay />
        <DrawerContent>

            <DrawerHeader h='100px'>
                <Sidebar_drawer_header />
            </DrawerHeader>

            <DrawerBody>
                <Sidebar_drawer_contacts />
            </DrawerBody>

            <DrawerFooter h='40px'>
                <Button variant='outline' mr={2} onClick={onClose} size='sm'>
                    <Text as='b'>Back</Text>
                </Button>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
    </>
  )
}

export default Sidebar_drawer