import React from 'react'
import { Flex, Box, Text, VStack } from '@chakra-ui/react'
import Messageboard_message from './Messageboard_message'

function Messageboard_body_content() {
  return (
    <VStack
        spacing={4}
        align='stretch'
        maxH='100%'
        w='100%'
        minW='100%'
        p={3}
        >
        <Messageboard_message message='Test message text would go inside this div. This is a test message to see how the app reacts' status='left'/>
        <Messageboard_message message='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' status='right'/>
    </VStack>
  )
}

export default Messageboard_body_content