import { makeStyles } from '@material-ui/core/styles';

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
}));

export default useStyles;
