import { StyleRules } from '@material-ui/core';
import { spacing } from './variable';
import { Theme } from '@material-ui/core/styles/createTheme';
export const inputStyles = (theme: Theme): StyleRules => ({
  textFieldWrapper: {
    width: '30ch',
  },
  textField: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px',
    border: '1px solid #D4D6D8',
    borderRadius: '4px',
    '& input, & textarea': {
      padding: 0,
      fontSize: '13px',
    },
    '&:hover': {
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.32)',
      backgroundColor: '#fff',
    },
    '&:active': {
      backgroundColor: '#fff',
    },
    '&:focus-within': {
      boxShadow: '0px 0px 8px #008BE9, 0px 4px 8px rgba(0, 0, 0, 0.32)',
      backgroundColor: '#fff',
    },
  },
  textFieldUnboxed: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${spacing.small} ${spacing.xs}`,
  },
  label: {
    display: 'block',
    marginBottom: spacing.xs,
    fontWeight: 600,
  },
  labelCompleted: {
    display: 'block',
  },
  value: {
    width: '100%',
    backgroundColor: '#F6F6F6',
    border: 0,
    '&:focus': {
      outline: 'none',
    },
  },
  success: {},
  error: {},
  disabled: {},
  fullWidth: {
    width: '100%',
  },
  textContainer: {
    width: '100%',
  },
  errorMessage: {
    color: '#de4f60',
  },
  icon: {},
  textContent: {
    paddingRight: spacing.xs,
    display: 'block',
    overflowWrap: 'anywhere',
    overflow: 'hidden',
  },
  placeholder: {},
  input: {
    marginBottom: spacing.small,
  },
  inputSpacingLarge: { marginBottom: spacing.large },
});
