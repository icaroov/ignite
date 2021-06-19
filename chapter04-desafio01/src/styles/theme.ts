import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

export const theme = extendTheme({
  config,
  colors: {
    yellow: {
      '200': '#FFBA08',
    },
  },
  shadows: {
    outline: '0 0 1px 2px #FFBA08, 0 1px 1px rgba(0, 0, 0, .15)',
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        backgroundColor: 'white',
        color: '#47585B',
      },
    },
  },
})
