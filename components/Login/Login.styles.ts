import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '../../styles/jss/variables';

const useStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    flexDirection: 'column',
    padding: spacing.medium,
    alignItems: 'center',
    boxShadow: '',
    justifyContent: 'center',
    margin: 'auto',
    '& form': {
      width: '100%',
    },
    '& h4': {
      marginBottom: spacing.medium,
    },
  },
  root: {
    maxWidth: '35%',
    margin: '100px auto',
  },
}));

export default useStyles;
