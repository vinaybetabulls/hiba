import React from 'react';
import type { AppProps } from 'next/app';
import '../public/css/fonts.css';
import ThemeWrapper from '../ui-components/ThemeWrapper/ThemeWrapper';

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
    <ThemeWrapper>
      <Component {...pageProps} />
    </ThemeWrapper>
  );
}

export default App;
