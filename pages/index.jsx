import * as React from 'react'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import Messageboard from './src/messageboard/Messageboard'
import Login_main from './src/login/Login_main'
import Regster_main from './src/register/Register_main'
import mergedTheme from '../styles/customTheme'

export default function Home() {
  return (
    <ChakraProvider theme={mergedTheme}>
      <Flex className='outerboard_class' bgColor='brand.300'>
        <Regster_main />
      </Flex>
    </ChakraProvider>
  )
}
