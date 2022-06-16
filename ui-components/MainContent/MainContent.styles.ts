import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
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
      top: theme.spacing(8),
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
    padding: theme.spacing(3),
  },
  list: { padding: '0 !important' },
  sidenavLinks: {
    '& .MuiListItemIcon-root': {
      marginRight: '16px',
      minWidth: 0,
    },
    '&:hover': {
      backgroundColor: '#e0f3ff !important',
      '& a, & .MuiListItemIcon-root': {
        color: '#008be9',
      },
    },
    '& a': {
      textDecoration: 'none',
      color: '#343a40',
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
}));

export default useStyles;
