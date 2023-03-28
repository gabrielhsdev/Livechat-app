import React from 'react'
import { Center, Flex, Spacer, Text, VStack, Box, Image} from '@chakra-ui/react'
function Messageboard_user(props) {
    let message = props.messageTxt;
    let username = props.username;
  return (
    <Center h='60px'>
        <Flex 
            w='100%' 
            h='100%' 
            p={1} _
            transition="background-color 0.3s ease-in-out"
            rounded='lg'
            opacity={0.9}
            _hover={{ 
                bg: 'gray.100',
                cursor: 'pointer'
            }}
        >
            <Box h='100%'>
                <Image
                    borderRadius='full'
                    height='100%'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                    opacity={0.9}
                />
            </Box>
            <Center w='70%' h='100%'>
                <VStack
                    spacing={0}
                    align='stretch'
                    w="100%"
                    m={1}
                >
                    <Box> 
                        <Text fontSize='md'>{username}</Text>
                    </Box>
                    <Box>
                        <Text fontSize='sm' opacity={0.8} numberOfLines={1} style={{ width: '100%' }}>{message}</Text>
                    </Box>
                </VStack>
            </Center>
        </Flex>
    </Center>
  )
}

export default Messageboard_user