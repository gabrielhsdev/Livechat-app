import * as React from 'react'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import Messageboard from './src/messageboard/Messageboard'
import customTheme from '../styles/customTheme'

export default function Home() {
  return (
    <ChakraProvider theme={customTheme}>
      <Flex height="100vh" width="100vw" justifyContent="center" alignItems="center" bgColor='brand.200'>
        <Messageboard />
      </Flex>
    </ChakraProvider>
  )
}
