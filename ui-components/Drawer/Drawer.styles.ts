import { makeStyles } from '@material-ui/core/styles';
import { SiteTheme } from '../../styles/jss/theme';
import { spacing, colors } from '../../styles/jss/variables';

const HEIGHT_BELOW_HEADER = 136;
const HEIGHT_BELOW_HEADER_SM_UP = 148;
const HEIGHT_BELOW_HEADER_CONDENSED = 63;
const HEIGHT_BELOW_HEADER_CONDENSED_SM_UP = 71;
const HEIGHT_BELOW_HEADER_FF = 96;

const useStyles = makeStyles<SiteTheme>(theme => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: `-33px 0 ${spacing.small} 0`,
  },
  contentContainer: {
    minWidth: '445px',
    height: '100%',
    padding: spacing.xl,
    '& h3': {
      // ...theme.typography.large_bold,
      marginBottom: 0,
      maxWidth: '300px',
    },
  },
  menuContainer: {
    minWidth: 'calc(100vw - 24px)',
    padding: 0,
  },
  modalBackDrop: {
    top: `${HEIGHT_BELOW_HEADER}px !important`,
    '& .MuiBackdrop-root': {
      top: HEIGHT_BELOW_HEADER,
      backgroundColor: 'rgba(0,0,0,0.6)',
    },
    '& .MuiDrawer-paper': {
      top: HEIGHT_BELOW_HEADER,
      right: spacing.medium,
      boxShadow: 'initial',
    },
    [theme.breakpoints.up('sm')]: {
      top: `${HEIGHT_BELOW_HEADER}px !important`,
      '& .MuiBackdrop-root': {
        top: HEIGHT_BELOW_HEADER_SM_UP,
        backgroundColor: 'rgba(0,0,0,0.6)',
      },
      '& .MuiDrawer-paper': {
        top: HEIGHT_BELOW_HEADER_SM_UP,
        right: spacing.medium,
      },
    },
  },
  adjustHeader: {
    top: `${HEIGHT_BELOW_HEADER_CONDENSED}px !important`,
    '& .MuiBackdrop-root': {
      top: HEIGHT_BELOW_HEADER_CONDENSED,
      backgroundColor: 'rgba(0,0,0,0.6)',
    },
    '& .MuiDrawer-paper': {
      top: HEIGHT_BELOW_HEADER_CONDENSED,
      right: spacing.medium,
      boxShadow: 'initial',
    },
    [theme.breakpoints.up('sm')]: {
      top: `${HEIGHT_BELOW_HEADER_CONDENSED_SM_UP}px !important`,
      '& .MuiBackdrop-root': {
        top: HEIGHT_BELOW_HEADER_CONDENSED_SM_UP,
        backgroundColor: 'rgba(0,0,0,0.6)',
      },
      '& .MuiDrawer-paper': {
        top: HEIGHT_BELOW_HEADER_CONDENSED_SM_UP,
        right: spacing.medium,
      },
    },
  },
}));

export default useStyles;
