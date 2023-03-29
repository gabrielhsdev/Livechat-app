import { extendTheme } from "@chakra-ui/react"

// Custom theme 2
const messageboard_class = extendTheme({
  styles: {
    global: {

      ".outerboard_class": {
        height:"100vh" ,
        width:"100vw" ,
        justifyContent:"center" ,
        alignItems:"center"
      },
      ".main_board": {
        bgColor:'brand.50',
        w:{base:'98%', sm: '98%', md: '95%', lg:'85%', xl:'60%' },
        h:{ base:'98%', sm: '98%', md: '80%', lg:'75%', xl:'60%' },
        boxShadow:'xl',
        rounded:'md'
      },
      ".main_grid": {
        rounded:'md',
        h:'100%',
        w:'100%',
        gap:'1',
        bgColor:'brand.50',
      },
      ".default_sidebar": {
        colSpan:'2',
        minW:'100%' ,
        h:'100%' ,
        overflow:'auto' ,
        p:'2',
      },
      ".default_sidebar_user_flex": {
        w:'100%',
        h:'100%',
        p:'1',
        transition:"background-color 0.3s ease-in-out",
        rounded:'lg',
        _hover:{
            bg: 'gray.100',
            cursor: 'pointer'
        },
      },
      ".default_sidebar_contact_img": {
        borderRadius:'full', 
        height:'100%', 
        opacity:'0.9'
      },
      ".default_sidebar_contact_message": {
        fontSize:'sm', 
        opacity:'0.8',
        numberOfLines:'1', 
        style:{ width: '100%' }
      },
      ".messageboard_body_header_btn": {
        colorScheme:'gray', 
        size:'sm' ,
        mr:'2',
      },
      ".messageboard_body": {
        minW:'100%',
        h:'100%' ,
        overflow:'auto',
        p:'1',
      },
      ".all100": {
        h:'100%', w:'100%', minH:'100%', minW:'100%'
      },
    },
  },
});

export default messageboard_class;
