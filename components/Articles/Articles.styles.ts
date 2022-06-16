import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
  },
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
  noResults: {
    height: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default useStyles;
