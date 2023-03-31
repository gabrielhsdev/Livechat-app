import React from 'react'
import { Text, Stack, StackDivider, Heading, Box, Input, Flex, Button, Center, ChakraProvider } from '@chakra-ui/react'
import { submitHandler } from '../firebase_actions/register/register_user'
import mergedTheme from '../styles/customTheme'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Register_main() {

    const router = useRouter();


  return (
    <ChakraProvider theme={mergedTheme}>
        <Flex className='outerboard_class' bgColor='brand.300'>
            <Flex className='all100' overflow='none'>
                <Box className='register_main_board_card' w='100%' bgColor='brand.300' overflow='auto' minH='400px'>
                    <Box className='register_main_board_card' p={2} bgColor='white' w='60%' overflow='auto' boxShadow='2xl'>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <form onSubmit={(e) => submitHandler(e, router)} >
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
                                    <Input size='sm' type='text' variant='filled' placeholder='Email...' name='email'/>
                                </Box>
                                <Box>
                                    <Input size='sm' type='text' variant='filled' placeholder='Username...' name='username'/>
                                </Box>
                                <Box>
                                    <Input size='sm' type='password' variant='filled' placeholder='Password...' name='password'/>
                                </Box>
                                <Box>
                                    <Input type='file' hidden id='inputFile' variant='filled'  name='picture'/>
                                    <label htmlFor='inputFile'>
                                    <Box fontSize ='sm' bgColor='#edf2f7' p='1' textAlign='center' rounded='md' color='#718096'>
                                        <Text>Add profile picture...</Text>
                                    </Box>
                                    </label>
                                </Box>
                                <Box h='20%'>
                                    <Flex justifyContent='center'>
                                        <Center p={2}>
                                            <Button colorScheme='facebook' variant='solid' type="submit" size='sm'>
                                                Sing Up
                                            </Button>
                                        </Center>
                                        <Center p={2}>
                                            <Button colorScheme='gray' variant='solid' size='sm'>
                                            <Link href='/Login_main'>Login</Link>
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
        </Flex>
    </ChakraProvider>
  )
}

