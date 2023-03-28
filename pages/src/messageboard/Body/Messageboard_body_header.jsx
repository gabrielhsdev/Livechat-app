import React from 'react'
import { Flex, Text, Box, Button, Spacer} from '@chakra-ui/react'
import { PhoneIcon, DeleteIcon } from '@chakra-ui/icons'

function Messageboard_body_header() {
  return (
    <Flex h='100%' w='100%' minH='100%' minW='100%' p={1}>
        <Box w='70%' h='100%' display='flex' alignItems='center'>
            <Text fontWeight="bold">Recipient Username...</Text>
        </Box>
            <Spacer />
        <Box w='30%' h='100%' display='flex' alignItems='center' justifyContent='right'>
                <Button colorScheme='gray' variant='outline' size='sm' mr={2}><PhoneIcon /></Button>
                <Button colorScheme='gray' variant='outline' size='sm' mr={2}><DeleteIcon /></Button>
        </Box>
    </Flex>
  )
}

export default Messageboard_body_header