import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  dialogActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // marginTop: theme.spacing(2),
  },
  imgUpload: {
    marginRight: theme.spacing(1),
  },
  imgPlaceHolder: {},
  imgContainer: {
    display: 'flex',
    flex: 1,
    '& $imgUpload, & $imgPlaceHolder': {
      height: '150px',
      border: '1px solid #d3d3d3',
      flex: 1,
    },
  },
  container: {
    marginBottom: theme.spacing(2),
  },
  label: {
    display: 'block',
    marginBottom: theme.spacing(1),
  },
}));

export default useStyles;
