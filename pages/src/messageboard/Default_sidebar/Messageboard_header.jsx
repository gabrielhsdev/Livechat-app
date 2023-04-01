import React from 'react'
import { Center, Text, Flex, Spacer, Box, Button } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { auth } from '../../../../firebase_connection/firebase_config_app'
import {router} from 'next/router'

function Messageboard_header() {

  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.push("/Login_main");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Center w='100%' h='100%'>
        <Flex w='100%' h='100%'>
            <Center><Text fontWeight="bold">GaChat</Text></Center>
            <Spacer />
            <Center><Button colorScheme='gray' size='sm' variant='outline' onClick={handleLogout}>Logout</Button></Center>
        </Flex>
    </Center>
  )
}

export default Messageboard_header