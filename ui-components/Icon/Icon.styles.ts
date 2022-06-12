import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '../../styles/jss/variable';

const useStyles = makeStyles(() => ({
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: 'fit-content',
    // color: colors.supplementary.black,
    '& div': {
      marginTop: spacing.xxs,
    },
  },
  svg: {
    height: '1em',
    width: '1em',
    overflow: 'hidden',
    fontSize: '1.7142857142857142rem',
    flexShrink: 0,
    userSelect: 'none',
  },
  small: { fontSize: '1.4285714285714284rem' },
  large: { fontSize: ' 2.571428571428571rem' },
  inherit: { fontSize: 'inherit' },
  roundel: {
    // backgroundColor: colors.wildExotic[400],
    maskSize: 'cover',
    WebkitMaskSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default useStyles;
