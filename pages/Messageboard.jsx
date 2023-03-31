import { React } from 'react';
import { Box, Text, Grid, GridItem } from '@chakra-ui/react'
import { useState, useEffect } from "react";
import useWindowSize from '../hooks/useWindowSize'
import Messageboard_sidebar from './src/messageboard/Default_sidebar/Messageboard_sidebar';
import Messageboard_body from './src/messageboard/Body/Messageboard_body';

export default function Messageboard() {
    
    //Check for mobile screens on grid
    const size = useWindowSize();    
    let sidebar;
    if(size.width > 768) {
        sidebar = 6;    
    }else{
        sidebar = 8;
    }

    return (
        <ChakraProvider theme={mergedTheme}>
            <Flex className='outerboard_class' bgColor='brand.300'>
                <Box className='main_board'>
                        <Grid templateColumns='repeat(8, 1fr)' className='main_grid'>
                            {size.width > 768 && 
                            <GridItem colSpan={2} className='default_sidebar'>
                                <Messageboard_sidebar />
                            </GridItem>
                            }
                            <GridItem colSpan={sidebar} className='messageboard_body'>
                                <Messageboard_body />
                            </GridItem>
                        </Grid>
                </Box>
            </Flex>
        </ChakraProvider>
    )

}