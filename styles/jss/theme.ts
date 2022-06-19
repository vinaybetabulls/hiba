import createTheme, { Theme } from '@material-ui/core/styles/createTheme';
import {
  Typography,
  TypographyStyle,
  Variant,
} from '@material-ui/core/styles/createTypography';
import { Overrides } from '@material-ui/core/styles/overrides';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { link } from './utils';
import { colors, fontWeights, spacing } from './variables';

const noSpacing = {
  margin: 0,
  padding: 0,
};

const breakpoints = {
  values: {
    xs: 480,
    sm: 720,
    md: 1024,
    lg: 1280,
    xl: 1672, // 1608px content with 32px margins
  },
};

const overrides = (theme: {}): Overrides => ({
  MuiCssBaseline: {
    '@global': {
      html: {
        height: '100%',
      },
      body: {
        height: '100%',
        color: colors.grey.grey7,
      },
      a: {
        textDecoration: 'none',
        color: 'inherit',
        ...noSpacing,
      },
      ul: {
        listStyle: 'none',
        ...noSpacing,
      },
      ol: {
        listStyle: 'none',
        ...noSpacing,
      },
      li: {
        display: 'block',
        ...noSpacing,
      },
      dl: {
        ...noSpacing,
      },
      dd: {
        ...noSpacing,
      },
      button: {
        background: 'none',
        border: 'none',
        padding: '0',
        font: 'inherit',
      },
      h1: {},
      h2: {},
      h3: {},
      p: {
        // removing browser default margins and adding defaults for content
        padding: 0,
      },
      mark: {
        // color: colors.primary,
        backgroundColor: 'inherit',
      },
      select: {
        '-webkit-appearance': 'none',
        cursor: 'pointer',
      },
      textarea: {
        fontSize: 16,
        border: 'none',
        overflow: 'auto',
        outline: 'none',
        '-webkit-box-shadow': 'none',
        '-moz-box-shadow': 'none',
        boxShadow: 'none',
        resize: 'none',
        backgroundColor: 'inherit',
        padding: 0,
      },
      main: { display: 'flex', flexDirection: 'column', minHeight: '100vh' },
      '.content': {
        '& > :last-child': {
          marginBottom: '0px',
        },
        '& ul': {
          listStyleType: 'disc',
        },
        '& ol': {
          listStyleType: 'decimal',
          '& > li::marker': {
            content: 'counter(list-item)"  "',
          },
        },
        '& ul, & ol': {
          margin: 'initial',
          paddingInlineStart: '2em',
        },
        '& ul > li, & ol > li': {
          display: 'list-item',
          listStyle: 'outside',
        },
        '& a': {
          ...link(undefined),
        },
      },
    },
  },
  MuiTextField: {
    root: {
      margin: 0,
      width: '100%',
    },
  },
  MuiInput: {
    root: {
      padding: '0',
      margin: '0!important',
      position: 'initial',
    },
    input: {
      padding: '0',
      '&::placeholder': {
        color: colors.grey.grey6,
        opacity: 1,
      },
    },
  },
  MuiFormControlLabel: {
    root: {
      margin: '0!important',
    },
    label: {
      marginBottom: '2px',
      '&$disabled': {
        color: colors.grey.grey6,
      },
    },
  },
  MuiRadio: {
    colorSecondary: {
      '&$checked': { '&:hover': { backgroundColor: 'inherit' } },
    },
  },
  MuiCheckbox: {
    colorSecondary: {
      '&$checked': { '&:hover': { backgroundColor: 'inherit' } },
    },
  },
  //@ts-ignore
  MuiFabRoot: {
    backgroundColor: colors.primary.white,
  },
  PrivateSwitchBase: { root: { padding: spacing.xs } },
});

export interface SiteTheme extends Theme {}

const createSiteTheme = () => {
  const baseTheme = createTheme({
    breakpoints,
    overrides: overrides({}),
  });
  return {
    ...baseTheme,
  };
};

export default createSiteTheme;
