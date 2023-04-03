import React from 'react'
import { Center, Flex, Spacer, Text, VStack, Box, Image} from '@chakra-ui/react'
function Messageboard_user(props) {

    let message = props.messageTxt;
    let username = props.username;
    let imgSource = props.imgSource;
  
    return (
    <Center h='60px'>
        <Flex className='default_sidebar_user_flex' >
            <Box h='100%'>
                <Image className='default_sidebar_contact_img' src={imgSource} alt='profile picture'/>
            </Box>
            <Center w='70%' h='100%'>
                <VStack spacing={0} align='stretch' w="100%" m={1} >
                    <Box> 
                        <Text fontSize='md'>{username}</Text>
                    </Box>
                    <Box hidden>
                        <Text className='default_sidebar_contact_message'>{message}</Text>
                    </Box>
                </VStack>
            </Center>
        </Flex>
    </Center>
  )
}

export default Messageboard_user