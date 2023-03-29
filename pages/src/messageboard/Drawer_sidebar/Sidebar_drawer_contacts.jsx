import React from 'react'
import { Flex, Box, VStack, Text} from '@chakra-ui/react'
import Messageboard_contacts from '../Default_sidebar/Messageboard_contacts'

function Sidebar_drawer_contacts() {
  return (
    <Flex className='all100' overflow='auto'>
        <VStack
            spacing={4}
            align='stretch'
            w='100%'
        >
            <Messageboard_contacts />
        </VStack> 
    </Flex>
  )
}

export default Sidebar_drawer_contacts