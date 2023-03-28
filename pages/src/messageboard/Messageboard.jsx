import { React } from 'react';
import { Box, Text, Grid, GridItem } from '@chakra-ui/react'
import { useState, useEffect } from "react";
import useWindowSize from '../../../hooks/useWindowSize'
import Messageboard_sidebar from './Messageboard_sidebar';
import Messageboard_body from './Body/Messageboard_body';

function Messageboard() {
    
    //Check for mobile screens on grid
    const size = useWindowSize();    
    let sidebar;
    if(size.width > 768) {
        sidebar = 6;    
    }else{
        sidebar = 8;
    }

    //w={{ base:'98%', sm: '98%', md: '95%', lg:'85%', xl:'60%' }} 
    //h={{ base:'98%', sm: '98%', md: '80%', lg:'75%', xl:'60%' }} 

    return (

    <Box bgColor='brand.50'
        w={{ base:'98%', sm: '98%', md: '95%', lg:'85%', xl:'60%' }} 
        h={{ base:'98%', sm: '98%', md: '80%', lg:'75%', xl:'60%' }} 
        boxShadow='2xl'
        rounded='md'
    >
            <Grid
            rounded='md'
            h='100%'
            w='100%'
            templateColumns='repeat(8, 1fr)'
            gap={1}
            bgColor='brand.50'
            >
                {size.width > 768 && 
                <GridItem 
                    colSpan={2} 
                    minW='100%' 
                    h='100%' 
                    overflow='auto' 
                    p={2}>
                    <Messageboard_sidebar />
                </GridItem>
                }
                <GridItem colSpan={sidebar} minW='100%' h='100%' overflow='auto' >
                    <Messageboard_body />
                </GridItem>
            </Grid>
    </Box>
  )

}

export default Messageboard