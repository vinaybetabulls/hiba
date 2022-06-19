import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '../../styles/jss/variables';

const useStyles = makeStyles(theme => ({
  dialogActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // marginTop: theme.spacing(2),
  },
  addressContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
  },
  container: {
    marginBottom: theme.spacing(2),
    flex: '50%',
    paddingRight: '8px',
  },
  label: {
    display: 'block',
    marginBottom: theme.spacing(1),
    fontWeight: 600,
  },
}));

export default useStyles;
