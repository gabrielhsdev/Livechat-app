import React from 'react'
import { Center, Input } from '@chakra-ui/react'

function Messageboard_searcher() {
  return (
    <Center w='100%' h='10%' mt={3}>
        <Input w='100%' variant='filled' placeholder='Search' size='sm'/>
    </Center>
  )
}

export default Messageboard_searcher