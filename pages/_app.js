import { ChakraProvider } from '@chakra-ui/provider';
import { ThemeProvider, CSSReset, extendTheme} from '@chakra-ui/react';
import '../styles/globals.css'
import theme from '../lib/theme'
import Layout from '../components/layouts/page'



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
