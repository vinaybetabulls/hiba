import { makeStyles } from '@material-ui/core/styles';
import { inputStyles } from '../../styles/jss/inputs';

const useStyles = makeStyles(theme => ({
  ...inputStyles(theme),
  menuListItem: {
    // ...theme.typography.small_regular,
  },
  muiIcon: {
    display: 'none',
  },
  muiRoot: {
    marginTop: '0!important',
  },
  label: {
    // ...theme.typography.small_bold,
    display: 'block',
    cursor: 'pointer',
  },
  muiSelectRoot: {
    padding: 0,
    // ...theme.typography.small_regular,
    backgroundColor: 'inherit',
    '&:focus': {
      backgroundColor: 'inherit',
    },
  },
  formControl: {
    minWidth: 'calc(100% - 30px)',
  },
}));

export default useStyles;
