import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import clsx from 'clsx';
import useStyles from './Snackbar.styles';

export type Props = {
  open: boolean;
  handleClose: (event: React.SyntheticEvent) => void;
  type: 'success' | 'error' | 'info';
  message: string | JSX.Element;
};

const SnackbarUi = (props: Props) => {
  const { open, handleClose, type, message } = props;
  const classes = useStyles();
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message="Note archived"
      // action={action}
    >
      <div
        className={clsx(
          classes.container,
          type ? classes[type as 'success' | 'error' | 'info'] : '',
        )}
      >
        <span className={classes.message}>{message}</span>
      </div>
    </Snackbar>
  );
};

export default SnackbarUi;
