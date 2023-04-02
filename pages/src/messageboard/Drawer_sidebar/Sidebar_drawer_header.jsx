import React from 'react'
import { Flex, Box, VStack, Text, Button, Input} from '@chakra-ui/react'
import { auth } from '../../../../firebase_connection/firebase_config_app'
import Messageboard_searcher from '../Default_sidebar/Messageboard_searcher'

function Sidebar_drawer_header() {

const handleLogout = async () => {
    try {
        await auth.signOut();
        router.push("/Login_main");
    } catch (error) {
        console.log(error);
    }
};

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
                    <Button colorScheme='gray' size='sm' variant='outline' onClick={handleLogout}>Logout</Button>
                </Box>
            </Flex>
        </Box>
        <Box h='50px' >
            <Messageboard_searcher />
        </Box>
    </VStack>
  )
}

export default Sidebar_drawer_header