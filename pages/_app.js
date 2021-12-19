import { ChakraProvider } from '@chakra-ui/provider';
import { ThemeProvider, theme, CSSReset, extendTheme} from '@chakra-ui/react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
