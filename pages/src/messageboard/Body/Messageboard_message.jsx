import React from 'react'
import { Text, Box, Flex } from '@chakra-ui/react'

function Messageboard_message(props) {
    let message = props.message;
    let status = props.status;
    let txtAlign = status;
    let color;

    if (status == 'left') {
        status = 'flex-start';
        color = 'brand.400';
    }else{
        status = 'flex-end';
        color = 'brand.100';
    }

    return (
        <Flex minW='100%' w='100%' justifyContent={status}>
            <Box p='4' bg={color} maxW='75%' color='white' rounded='sm'>
                <Text textAlign={txtAlign}>{message}</Text>
            </Box>
        </Flex>
    )
}

export default Messageboard_message