import { default as ImportedDrawer } from '@material-ui/core/Drawer';
import React from 'react';
import useStyles from './Drawer.styles';
import clsx from 'clsx';
import Button from '../Button/Button';

type Props = {
  open: boolean;
  setOpen?: (open: boolean) => void;
  anchor?: 'top' | 'right' | 'bottom' | 'left';
  children: React.ReactNode;
  title?: string;
  onClose?: () => void;
  isFromHeader?: boolean;
  condensed?: boolean;
};

const Drawer = ({
  open,
  anchor = 'left',
  children,
  title,
  setOpen,
  onClose,
  isFromHeader,
  condensed,
}: Props) => {
  const classes = useStyles();
  const handleClose = (event: any): any => {
    event?.preventDefault();
    setOpen && setOpen(false);
    !!onClose && onClose();
  };

  return (
    <ImportedDrawer
      open={open}
      anchor={anchor}
      ModalProps={{
        disablePortal: true,
        keepMounted: true,
        onClose: handleClose,
        disableScrollLock: false,
      }}
      transitionDuration={700}
      className={clsx(
        isFromHeader ? classes.modalBackDrop : '',
        condensed ? classes.adjustHeader : '',
      )}
    >
      <div
        className={clsx(
          classes.contentContainer,
          isFromHeader ? classes.menuContainer : '',
        )}
      >
        {!isFromHeader && (
          <div className={classes.header}>
            {title && <h3>{title}</h3>}
            <Button
              icon="close"
              variant="primary"
              onClick={(event: any) => handleClose(event)}
            />
          </div>
        )}
        {children}
      </div>
    </ImportedDrawer>
  );
};

export default Drawer;
