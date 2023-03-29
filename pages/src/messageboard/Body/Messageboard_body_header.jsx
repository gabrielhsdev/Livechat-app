import React from 'react'
import { Flex, Text, Box, Button, Spacer} from '@chakra-ui/react'
import { PhoneIcon, DeleteIcon } from '@chakra-ui/icons'

function Messageboard_body_header() {
  return (
    <Flex className='all100' p={1}>
        <Box w='70%' h='100%' display='flex' alignItems='center'>
            <Text fontWeight="bold">Recipient Username...</Text>
        </Box>
            <Spacer />
        <Box w='30%' h='100%' display='flex' alignItems='center' justifyContent='right'>
                <Button className='messageboard_body_header_btn' variant='outline' ><PhoneIcon /></Button>
                <Button className='messageboard_body_header_btn' variant='outline' ><DeleteIcon /></Button>
        </Box>
    </Flex>
  )
}

export default Messageboard_body_header