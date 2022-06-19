import { makeStyles } from '@material-ui/core/styles';
import { colors, spacing } from '../../styles/jss/variables';
const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  header: {
    color: colors.color.secondary,
    boxShadow: 'none',
    borderBottom: `1px solid ${colors.grey.grey3}`,
    backgroundColor: '#fff',
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
      color: colors.primary.black,
      textDecoration: 'none',
      '&:hover': {
        color: colors.color.secondary,
      },
      '&:not(:last-child)': {
        marginRight: spacing.small,
      },
    },
  },
}));
export default useStyles;
