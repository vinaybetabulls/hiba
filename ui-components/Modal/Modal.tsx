import { default as ImportedDialog } from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import React, { ReactNode, useContext } from 'react';
import Link from '../Link/Link';
// import RoundButton from '../RoundButton/RoundButton'
import useStyles from './Modal.styles';
import CloseIcon from '@material-ui/icons/Close';
export type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: ReactNode;
  title?: string | ReactNode;
  keepMounted?: boolean;
  onClose?: () => void;
  onEnter?: () => void;
  fullScreen?: boolean;
  fullWidth?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  noPadding?: boolean;
  disablePortal?: boolean;
  container?: any;
  className?: string;
  isFromImageGallery?: boolean;
};
const Modal = ({
  open,
  children,
  title,
  setOpen,
  keepMounted,
  onClose,
  onEnter,
  fullWidth,
  fullScreen,
  maxWidth,
  disablePortal,
  noPadding,
  container,
  className,
  isFromImageGallery,
}: Props) => {
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
    !!onClose && onClose();
  };
  return (
    <ImportedDialog
      className={clsx(className ?? '', noPadding && classes.noPadding)}
      open={open}
      disablePortal={disablePortal}
      keepMounted={keepMounted}
      onClose={handleClose}
      onEnter={onEnter}
      fullWidth={fullWidth}
      fullScreen={fullScreen}
      maxWidth={maxWidth}
      disableAutoFocus={true}
      scroll="paper"
      PaperProps={{ className: classes.modal }}
      container={container}
    >
      <header
        className={clsx(
          title ? classes.header : classes.noTitleHeader,
          isFromImageGallery ? classes.imageGalleryHeader : '',
        )}
      >
        {title && <h1>{title}</h1>}
        <IconButton aria-label="close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </header>
      <DialogContent className={classes.contentContainer}>
        {children}
      </DialogContent>
    </ImportedDialog>
  );
};
export default Modal;
