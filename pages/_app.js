import { ChakraProvider } from '@chakra-ui/provider';
import { ThemeProvider, CSSReset, extendTheme} from '@chakra-ui/react';
import '../styles/globals.css'

import Layout from '../components/layouts/page';

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
      '.navlinks': {
        display: ["none", "inherit"],
        borderRadius:"5px",
      
      },
      '.chakra': {
        "a": {
          width:"100vw"
        }
      }
    },
  }





})


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Layout>

        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
