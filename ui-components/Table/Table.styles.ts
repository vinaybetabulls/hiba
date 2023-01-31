import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    '& .MuiTextField-root': {
      width: '25%',
    },
  },
}));

export default useStyles;
