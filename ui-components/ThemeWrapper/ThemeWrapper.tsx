import CssBaseline from '@material-ui/core/CssBaseline';
import {
  jssPreset,
  StylesProvider,
  ThemeProvider,
} from '@material-ui/core/styles';
import { create } from 'jss';
import jssPluginExtend from 'jss-plugin-extend';
import createSiteTheme from '../../styles/jss/theme';
import React from 'react';

type Props = {
  site?: string;
  children: React.ReactNode;
};

const jss = create({
  plugins: [...jssPreset().plugins, jssPluginExtend()],
});

const ThemeWrapper: React.FC<Props> = props => {
  const { children } = props;
  const theme = createSiteTheme();
  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StylesProvider>
  );
};

export default ThemeWrapper;
