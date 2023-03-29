import React from 'react'
import { Flex, Box, VStack, Text, Button, Input} from '@chakra-ui/react'

function Sidebar_drawer_header() {
  return (
    <VStack
        spacing={1}
        align='stretch'
        w='100%'
    >
        <Box h='50px' w='100%'>
            <Flex w="100%" alignItems='center'>
                <Box w='50%'><Text fontSize='md' as='b'>GaChat</Text></Box>
                <Box w='50%' display='flex' alignItems='center' justifyContent='right'>
                    <Button colorScheme='gray' size='sm' variant='outline'>
                        <Text as='b'>Logout</Text>
                    </Button>
                </Box>
            </Flex>
        </Box>
        <Box h='50px' >
            <Input variant='filled' placeholder='Filled' size='sm' />
        </Box>
    </VStack>
  )
}

export default Sidebar_drawer_header