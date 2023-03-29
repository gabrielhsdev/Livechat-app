import React from 'react'
import { Center, Text, Flex, Spacer, Box, Button } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'

function Messageboard_header() {
  return (
    <Center w='100%' h='100%'>
        <Flex w='100%' h='100%'>
            <Center><Text fontWeight="bold">GaChat</Text></Center>
            <Spacer />
            <Center><Button colorScheme='gray' size='sm' variant='outline'>Logout</Button></Center>
        </Flex>
    </Center>
  )
}

export default Messageboard_header