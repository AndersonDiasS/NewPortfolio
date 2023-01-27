import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import  defaultTheme  from '../styles/themes/defaultTheme'
export default function App({ Component, pageProps }: AppProps) {
  return(
      <div>
        <ThemeProvider theme={defaultTheme}>
          <Component {...pageProps} />
        </ThemeProvider> 
        </div>
      )
}
