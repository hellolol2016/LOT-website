import { ChakraProvider } from '@chakra-ui/provider';
import { ThemeProvider, CSSReset, extendTheme} from '@chakra-ui/react';
import '../styles/globals.css'

const theme = extendTheme({
  textStyles: {
    h1: {
      fontSize: ['48px', '72px'],
      fontWeight: 'bold',
      letterSpacing: "-2%",
      padding:["20px", "10px"],
    }
  }
})


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
