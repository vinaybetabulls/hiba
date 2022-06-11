import { Theme } from '@mui/material/styles';
import { spacing } from './variable';

export const inputStyles = () => ({
  textFieldWrapper: {
    width: '30ch',
  },
  textField: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.xs,
    border: '1px solid #f6f6f6',
  },
  textFieldUnboxed: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${spacing.small} ${spacing.xs}`,
  },
  label: {
    display: 'block',
  },
  labelCompleted: {
    display: 'block',
  },
  value: {
    width: '100%',
    backgroundColor: '#f6f6f6',
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
  errorMessage: {},
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
