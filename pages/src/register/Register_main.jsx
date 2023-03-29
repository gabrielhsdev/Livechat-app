import React from 'react'
import { Card, CardBody, Text, Stack, StackDivider, Heading, Box, Input, Flex, Button, Center } from '@chakra-ui/react'

function Register_main() {
  return (
    <Flex className='all100' overflow='none'>
        <Box w='100%' bgColor='brand.300' className='register_main_board_card' overflow='auto' minH='400px'>
            <Box p={2} bgColor='white' w='60%' overflow='auto' className='register_main_board_card' boxShadow='2xl'>
            <Stack divider={<StackDivider />} spacing='4'>
                <Stack spacing='4'>
                    <Box>
                        <Heading size='lg' textTransform='uppercase'>
                        Sign Up
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                        Register to GaChat
                        </Text>
                    </Box>
                    <Box>
                        <Input variant='filled' placeholder='Username...' />
                    </Box>
                    <Box>
                        <Input variant='filled' placeholder='Password...' />
                    </Box>
                    <Box>
                        <Input type='file' hidden id='inputFile' variant='filled' placeholder='Password...' />
                        <label for='inputFile'>
                        <Box bgColor='#edf2f7' p='2' textAlign='center' rounded='md' color='#718096'>
                            Add profile picture...
                        </Box>
                        </label>
                    </Box>
                    <Box h='20%'>
                        <Flex justifyContent='center'>
                            <Center p={2}>
                                <Button colorScheme='facebook' variant='solid'>
                                    Sing Up
                                </Button>
                            </Center>
                            <Center p={2}>
                                <Button colorScheme='gray' variant='solid'>
                                    Login
                                </Button>
                            </Center>
                        </Flex>
                    </Box>
                </Stack>
            </Stack>
            </Box>
        </Box>
    </Flex>
  )
}

export default Register_main