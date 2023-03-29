import * as React from 'react'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import Messageboard from './src/messageboard/Messageboard'
import mergedTheme from '../styles/customTheme'

export default function Home() {
  return (
    <ChakraProvider theme={mergedTheme}>
      <Flex className='outerboard_class' bgColor='brand.300'>
        <Messageboard />
      </Flex>
    </ChakraProvider>
  )
}
