import React, { Dimensions } from 'react'

import { Flex, VStack, StackDivider, Box, Text} from '@chakra-ui/react'
import Messageboard_body_header from './Messageboard_body_header'
import Messageboard_body_content from './Messageboard_body_content'
import Messageboard_body_input from './Messageboard_body_input'

function Messageboard_body() {
  return (
    <Box className='all100'>
      <VStack divider={<StackDivider borderColor='gray.200' />} spacing={3} align='stretch' className='all100' >

        <Box  h='5%' maxH='25%'>
          <Messageboard_body_header />
        </Box >

        <Box  h='85%' display='flex' overflowY='auto'>
          <VStack align='stretch' spacing={2} w='100%' >
            <Messageboard_body_content />
          </VStack>
        </Box >

        <Box  h='10%' maxH='25%' w='100%'>
          <Messageboard_body_input />
        </Box>
        
      </VStack>
    </Box>
  )
}

export default Messageboard_body