import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '../../styles/jss/variables';

const useStyles = makeStyles(theme => ({
  hasInlineIcon: {
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    justifyContent: undefined,
  },
  iconLeft: {
    paddingRight: spacing.xs,
  },
  iconRight: {
    paddingLeft: spacing.xs,
  },
  linkButton: {
    cursor: 'pointer',
  },
}));

export default useStyles;
