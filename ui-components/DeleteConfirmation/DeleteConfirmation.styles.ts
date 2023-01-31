import { makeStyles } from '@material-ui/core/styles';
import { SiteTheme } from '../../styles/jss/theme';
import {
  colors,
  fontSizes,
  fontWeights,
  spacing,
} from '../../styles/jss/variables';

const MAX_WIDTH_INNER = 520;

const useStyles = makeStyles<SiteTheme>(theme => ({
  container: {
    margin: '-60px auto 0',
    maxWidth: MAX_WIDTH_INNER,
    fontFamily: `'Gotham', sans-serif`,
    '& $itemText': {
      fontSize: fontSizes.large,
      fontWeight: fontWeights.medium,
      letterSpacing: '0px',
      lineHeight: '2.5rem',
      paddingTop: '3px',
      paddingBottom: '1px',
      color: colors.primary.black,
      marginBottom: spacing.medium,
    },
    '& $confirmationText': {
      fontSize: fontSizes.small,
      fontWeight: fontWeights.regular,
      letterSpacing: '0px',
      lineHeight: '1.5rem',
      paddingTop: '2px',
      paddingBottom: '2px',
      marginBottom: spacing.small,
      '&:last-child': {
        marginBottom: spacing.large,
      },
      [theme.breakpoints.up('md')]: {
        fontSize: fontSizes.medium,
        fontWeight: fontWeights.regular,
        letterSpacing: '0px',
        lineHeight: '2rem',
        paddingTop: '1px',
        paddingBottom: '3px',
        marginBottom: spacing.large,
        '&:last-child': {
          marginBottom: spacing.xl,
        },
      },
    },
  },
  itemText: {},
  confirmationText: {},
  title: {
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.regular,
    letterSpacing: '0px',
    lineHeight: '2rem',
    paddingTop: '2px',
    paddingBottom: '2px',
    color: '#4f4f4f',
    [theme.breakpoints.up('sm')]: {
      fontSize: fontSizes.large,
      fontWeight: fontWeights.regular,
      letterSpacing: '0px',
      lineHeight: '2.25rem',
      paddingTop: '1px',
      paddingBottom: '3px',
    },
  },
  buttonContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    marginBottom: spacing.large,
    [theme.breakpoints.up('md')]: {
      marginBottom: spacing.medium,
    },
  },
}));

export default useStyles;
