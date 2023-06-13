import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  components: {
    CSSReset: {
      baseStyle: {
        body: {
          color: 'white', // Cambia esto al color adecuado para el tema claro
          bg: 'black',
        },
      },
    },
  },
});


export default theme;

