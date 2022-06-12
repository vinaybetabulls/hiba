import { makeStyles } from '@material-ui/core/styles';
import { inputStyles } from '../../styles/jss/inputs';
import { Theme } from '@material-ui/core/styles/createTheme';
const useStyles = makeStyles((theme: Theme) => inputStyles(theme));

export default useStyles;
