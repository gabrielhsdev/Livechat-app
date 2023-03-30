import React from 'react'
import { Text, Stack, StackDivider, Heading, Box, Input, Flex, Button, Center } from '@chakra-ui/react'
import { submitHandler } from '../../../firebase_actions/register/register_user'

function Register_main() {
  return (
    <Flex className='all100' overflow='none'>
        <Box className='register_main_board_card' w='100%' bgColor='brand.300' overflow='auto' minH='400px'>
            <Box className='register_main_board_card' p={2} bgColor='white' w='60%' overflow='auto' boxShadow='2xl'>
            <Stack divider={<StackDivider />} spacing='4'>
                <form onSubmit={submitHandler}>
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
                            <Input type='text' variant='filled' placeholder='Email...' name='username'/>
                        </Box>
                        <Box>
                            <Input type='password' variant='filled' placeholder='Password...' name='password'/>
                        </Box>
                        <Box>
                            <Input type='file' hidden id='inputFile' variant='filled'  name='picture'/>
                            <label htmlFor='inputFile'>
                            <Box bgColor='#edf2f7' p='2' textAlign='center' rounded='md' color='#718096'>
                                Add profile picture...
                            </Box>
                            </label>
                        </Box>
                        <Box h='20%'>
                            <Flex justifyContent='center'>
                                <Center p={2}>
                                    <Button colorScheme='facebook' variant='solid' type="submit">
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
                    </form>
            </Stack>
            </Box>
        </Box>
    </Flex>
  )
}

export default Register_main