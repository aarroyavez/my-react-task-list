import { extendTheme } from '@chakra-ui/react';
import { CSSReset, GlobalStyle } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  components: {
    CSSReset,
    GlobalStyle: {
      baseStyle: {
        body: {
          bg: 'black',
          color: 'white',
        },
      },
    },
  },
});

export default theme;

