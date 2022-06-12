import { makeStyles, Theme } from '@material-ui/core/styles';
import { spacing } from '../../styles/jss/variable';
// import { colors, spacing } from '../../styles/jss/variables';

const useStyles = makeStyles((theme: Theme) => ({
  buttonPrimary: {
    '&.MuiButtonBase-root': {
      // color: colors.grey.grey7,
      // backgroundColor: colors.primary.gold4,
      '&:hover': {
        // backgroundColor:  colors.primary.gold3,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.32)',
      },
      '&:active': {
        boxShadow: 'none',
      },
      '&:disabled': {
        // color:  colors.grey.grey7,
        // backgroundColor: colors.primary.gold1,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.24)',
      },
    },
  },
  buttonSecondaryDark: {
    '&.MuiButtonBase-root': {
      // color: colors.supplementary.white,
      // backgroundColor colors.grey.grey7,
      '&:hover': {
        // color: colors.primary.gold1,
        // backgroundColor:  colors.supplementary.black,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.32)',
      },
      '&:focus': {
        // backgroundColor:  undefined,
      },
      '&:active': {
        boxShadow: 'none',
        // backgroundColor: colors.grey.grey5,
      },
      '&:disabled': {
        // color:  colors.grey.grey7,
        // backgroundColor: colors.grey.grey3,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.24)',
      },
    },
  },
  buttonSecondaryLight: {
    '&.MuiButtonBase-root': {
      // color: colors.grey.grey7,
      // backgroundColor: colors.supplementary.white,
      '&:hover': {
        // color:  undefined,
        // backgroundColor: colors.primary.gold1,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.32)',
      },
      '&:focus': {
        // color:  undefined,
        // backgroundColor:  undefined,
      },
      '&:active': {
        boxShadow: 'none',
        // backgroundColor: colors.grey.grey5,
      },
      '&:disabled': {
        // color: colors.grey.grey7,
        // backgroundColor: colors.grey.grey3,
        // boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.24)',
      },
    },
  },
  button: {
    textTransform: 'none',
    borderRadius: 4,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.24)',
    '&:focus': {
      boxShadow: '0px 0px 8px #008be9, 0px 4px 8px rgba(0, 0, 0, 0.32)',
    },
    '&:disabled': {
      boxShadow: undefined,
    },
    // Expected height 60px
    '&.MuiButtonBase-root.MuiButton-root': {
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 25,
      paddingRight: 25,
      '&$buttonTertiaryDark, &$buttonTertiaryLight': {
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 23,
        paddingRight: 23,
        borderWidth: '2px',
        borderStyle: 'solid',
      },
    },
    '& .MuiButton-label': {
      flexDirection: undefined,
      '& .MuiButton-startIcon': {
        marginLeft: 0,
        marginRight: spacing.xxs,
        // Use margin to adjust icon to same height as text
        marginTop: -2,
        marginBottom: -2,
      },
    },
    '& .MuiButton-startIcon': {
      marginLeft: 0,
      marginRight: spacing.xxs,
      // Use margin to adjust icon to same height as text
      marginTop: -2,
      marginBottom: -2,
    },
    '& .MuiIcon-root': { fontSize: '1.5rem' },
  },
  buttonThin: {
    // Expected height 44px
    '&.MuiButtonBase-root.MuiButton-root': {
      paddingTop: 14,
      paddingBottom: 14,
      paddingLeft: 31,
      paddingRight: 31,
      '&$buttonTertiaryDark, &$buttonTertiaryLight': {
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 29,
        paddingRight: 29,
      },
      '& .MuiButton-startIcon': {
        // Use margin to adjust icon to same height as text
        marginTop: -4,
        marginBottom: -4,
      },
    },
    '& $label': {
      // ...theme.typography.small_button,
    },
  },
  buttonThinMobile: {
    // Duplicate of buttonThin but inside breakpoint
    [theme.breakpoints.down('sm')]: {
      // Expected height 44px
      '&.MuiButtonBase-root.MuiButton-root': {
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 31,
        paddingRight: 31,
        '&$buttonTertiaryDark, &$buttonTertiaryLight': {
          paddingTop: 12,
          paddingBottom: 12,
          paddingLeft: 29,
          paddingRight: 29,
        },
        '& .MuiButton-startIcon': {
          // Use margin to adjust icon to same height as text
          marginTop: -4,
          marginBottom: -4,
        },
      },
      '& $label': {
        // ...theme.typography.small_button,
      },
    },
  },
  buttonTertiaryDark: {
    '&.MuiButtonBase-root': {
      color: undefined,
      // backgroundColor: colors.supplementary.white,
      // borderColor: colors.grey.grey7,
      '&:hover': {
        color: undefined,
        // backgroundColor: colors.primary.gold1,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.32)',
      },
      '&:focus': {
        // color:  undefined,
        backgroundColor: undefined,
      },
      '&:active': {
        boxShadow: 'none',
      },
      '&:disabled': {
        // color: colors.grey.grey8,
        // backgroundColor: colors.supplementary.white,
        // borderColor:  colors.grey.grey5,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.24)',
      },
    },
  },
  label: () => ({
    display: 'block',
    // ...theme.typography.medium_button,
  }),
  iconContainer: { color: 'inherit' },
  rippleClassPrimary: {
    // color: colors.primary.gold2,
  },
  rippleClassSecondaryDark: {
    // color: colors.grey.grey5,
  },
  spinner: {
    marginLeft: 5,
  },
}));

export default useStyles;
