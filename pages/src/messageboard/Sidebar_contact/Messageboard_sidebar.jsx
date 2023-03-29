import React from 'react'
import { Center, Text } from '@chakra-ui/react'
import { Stack, HStack, VStack, StackDivider, Box } from '@chakra-ui/react'
import Messageboard_header from './Messageboard_header'
import Messageboard_searcher from './Messageboard_searcher'
import Messageboard_contacts from './Messageboard_contacts'

function Messageboard_sidebar() {
  return (
    <Box minW='100%' h='100%' >
        <VStack divider={<StackDivider borderColor='gray.200' />} spacing={2} align='stretch' >
            <Box h='10%' w='100%' p={2}>
                <Messageboard_header />
                <Messageboard_searcher />
            </Box>
            <Box h='90%' w='100%'>
                <Messageboard_contacts />
            </Box>
        </VStack>
    </Box>
  )
}

export default Messageboard_sidebar