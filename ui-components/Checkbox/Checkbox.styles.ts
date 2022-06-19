import { makeStyles } from '@material-ui/core/styles';
import { fontSizes, spacing } from '../../styles/jss/variables';

const useStyles = makeStyles(theme => ({
  fullWidth: {
    width: '100%',
    '& .MuiFormControlLabel-label': { flexGrow: 1 },
  },
  errorMessage: {},
  checkCircle: {
    '& .MuiIconButton-root': { fontSize: fontSizes.xl },
    '& .MuiIconButton-edgeStart': { marginLeft: `-${spacing.xs}` },
    '& .MuiIconButton-colorPrimary': {
      '&:hover': { backgroundColor: 'inherit' },
    },
    '& .MuiIconButton-colorSecondary': {
      '&:hover': { backgroundColor: 'inherit' },
    },
    '& .MuiIconButton-label': {
      borderRadius: '50%',
      '&:hover': { boxShadow: '0px 4px 8px rgb(0 0 0 / 32%)' },
      '&:focus-within': {
        outline: 'none',
        boxShadow: '0px 0px 8px #008be9, 0px 4px 8px rgb(0 0 0 / 32%)',
      },
    },
  },
  error: {
    '&  .MuiFormControlLabel-label': {
      //   color: theme.statusColors.error.base,
    },
  },
  controlAlignment: {},
}));

export default useStyles;
