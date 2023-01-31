import { makeStyles } from '@material-ui/core/styles';
import { colors, spacing } from '../../styles/jss/variables';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    border: `1px solid ${colors.primary.black}`,
    paddingLeft: spacing.xs,
    paddingRight: spacing.xs,
    paddingTop: '10px',
    paddingBottom: '8px',
    [theme.breakpoints.up('md')]: {
      paddingTop: '13px',
      paddingBottom: '13px',
    },
  },
  message: {
    paddingTop: 0,
    paddingBottom: 0,
    [theme.breakpoints.up('md')]: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    '& a': {
      display: 'inline',
    },
    '& p': {
      paddingTop: '0px',
      paddingBottom: '0px',
    },
    '& > :last-child': {
      marginBottom: '0px',
    },
  },
  info: {
    borderColor: colors.stastus.warning,
  },
  error: {
    borderColor: colors.stastus.error,
    backgroundColor: colors.stastus.error,
  },
  success: {
    borderColor: colors.stastus.success,
  },
  errorMessage: {
    '& span': {
      '& p': {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
  },
}));

export default useStyles;
