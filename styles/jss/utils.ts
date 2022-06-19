import { colors } from './variables';

export const link = (color?: string) => ({
  textDecoration: 'underline',
  display: 'inline-block',
  '&:hover': {
    color: color || colors.grey.grey5,
    cursor: 'pointer',
  },
});
