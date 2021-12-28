import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({ //TODO : move  the siLLY STYLES IN A DIFFERNT FILE LATER FREAKING BAkA
  textStyles: {
    
    h1: {
      fontSize: ['30px','48px', '60px'],
      fontWeight: 'thin',
      letterSpacing: "-2%",
      padding:["20px", "10px"],
    },

    navlink: {
      fontSize: ["10px", "16px", "25px"],
      fontWeight: '300',
      padding: "10px",
    } 
  },
  styles: {

    global: {
      'html': {
        
        scrollBehavior:"smooth"
      },
      '.navlinks': {
        display: ["none", "inherit"],
        borderRadius:"5px",
      
      },
      '.chakra': {
        "a": {
          width:"100vw"
        }
      },
      'body': {
        color: "#2b2d42",
      },
      '.chakra-text': {
        fontSize:{base:'16px', md:'30px'},
      },
      '.small-font': {
        fontSize:{base:'14px', md:'26px'}
      },
      '.imglink': {
        _hover: {
          backgroundColor:"rgba(0,0,0,0.5)"
        }
      }
    },
  }





})
export default theme