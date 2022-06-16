import React from 'react';
import type { AppProps } from 'next/app';
import '../public/css/fonts.css';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from '../styles/theme/theme';

function App({ Component, pageProps }: AppProps) {
  /*
   * Remove the server-side injected CSS when UI rendering kicks in.
   * This code comes from the MUI reference implementation of nextjs:
   * https://github.com/mui-org/material-ui/tree/master/examples/nextjs-with-typescript
   */
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
