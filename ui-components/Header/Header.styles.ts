import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '../../styles/jss/variable';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  header: {
    '& .MuiToolbar-root': {
      '& img': {
        height: '40px',
        width: 'auto',
        marginRight: '12px',
      },
    },
  },
  links: {
    '& a': {
      color: '#fff',
      textDecoration: 'none',
      '&:not(:last-child)': {
        marginRight: spacing.small,
      },
    },
  },
}));

export default useStyles;
