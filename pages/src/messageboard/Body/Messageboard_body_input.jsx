import React from 'react'
import { Text, Box, Flex, Input, Button, Spacer } from '@chakra-ui/react'
import { ChevronRightIcon, AttachmentIcon } from '@chakra-ui/icons'

function Messageboard_body_input() {
  return (
    <>    
    <Flex alignItems='center' h='100%' w='100%' minW='100%' p={2}>
        <Box w='80%'>
          <Input placeholder='Input...' size='md' variant='filled' />
        </Box>
        <Spacer />
        <Box>
          <Button colorScheme='gray' variant='outline'>
            <ChevronRightIcon />
          </Button>
        </Box>
        <Spacer />
        <Box>
          <Button colorScheme='gray' variant='outline'>
            <AttachmentIcon />
          </Button>
        </Box>
    </Flex>
    </>
  )
}

export default Messageboard_body_input