import { makeStyles } from '@material-ui/core/styles';
import { spacing, colors } from '../../styles/jss/variables';
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: spacing.small,
  },
  title: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    '& .MuiDrawer-paper': {
      top: '65px',
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    top: theme.spacing(8),
  },
  content: {
    flexGrow: 1,
    padding: spacing.medium,
  },
  list: { padding: '0 !important' },
  sidenavLinks: {
    '& .MuiListItemIcon-root': {
      marginRight: spacing.small,
      minWidth: 0,
    },
    '&:hover': {
      backgroundColor: `${colors.bghovercolor.secondary} !important`,
      '& a, & .MuiListItemIcon-root': {
        color: colors.color.secondary,
      },
    },
    '& a': {
      textDecoration: 'none',
      color: colors.primary.black,
      display: 'flex',
      lineHeight: '2.4rem',
      height: '2.4rem',
      padding: '0 1.5rem 0 0',
      position: 'relative',
      borderRadius: '0.25rem',
      whiteSpace: 'nowrap',
      transition: 'all .2s',
      margin: '0.1rem 0',
    },
  },
  activeItem: {
    backgroundColor: `${colors.bghovercolor.secondary} !important`,
    '& a, & .MuiListItemIcon-root': {
      color: colors.color.secondary,
    },
  },
}));
export default useStyles;
