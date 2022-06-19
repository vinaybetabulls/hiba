import { makeStyles } from '@material-ui/core/styles';
// import { SiteTheme } from '../../styles/jss/theme';
import { colors, spacing } from '../../styles/jss/variables';
const useStyles = makeStyles(theme => ({
  modal: {
    // padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
      maxWidth: '100%!important',
      maxHeight: 'none!important',
      margin: '0!important',
      borderRadius: 0,
    },
    [theme.breakpoints.up('md')]: {
      // padding: theme.spacing(4),
      minWidth: '500px',
    },
    '& .MuiDialogContent-root': {
      overflowY: 'initial',
    },
  },
  noPadding: {
    '& $modal': {
      padding: 0,
    },
    '& $header': {
      padding: `${theme.spacing(3)} ${theme.spacing(3)} 0 ${theme.spacing(3)}`,
    },
  },
  header: {
    padding: `${spacing.medium}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: '0 0 auto',
    background: colors.primary.white,
    color: colors.primary.black,
    '& .MuiIconButton-root': {
      color: colors.primary.black,
    },
    '& h1': {
      margin: `0`,
      [theme.breakpoints.up('md')]: {
        // ...theme.typography.large_regular,
      },
    },
  },
  noTitleHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: theme.spacing(2),
    alignItems: 'center',
    padding: theme.spacing(2),
    paddingBottom: 0,
    paddingTop: 0,
    '& button': {
      zIndex: 5,
      position: 'relative',
    },
  },
  contentContainer: {
    padding: spacing.medium,
    paddingTop: 0,
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '& p': {
      // ...theme.typography.small_regular,
      marginBottom: theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        // ...theme.typography.medium_regular,
        marginBottom: theme.spacing(4),
      },
      '&:last-child': {
        marginBottom: 0,
      },
    },
  },
  imageGalleryHeader: {
    paddingRight: theme.spacing(0.5),
    marginBottom: '12px',
    [theme.breakpoints.up('md')]: {
      marginBottom: 'intial',
    },
  },
}));
export default useStyles;
