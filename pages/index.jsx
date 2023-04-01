import * as React from 'react'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import Messageboard from './Messageboard'
import Login_main from './Login_main'
import Register_main from './Register_main'

//Start setting up the session variables
export default function Home() {
  return (
    <Login_main />
  )
}
