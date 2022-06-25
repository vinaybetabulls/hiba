import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { ButtonVariant } from '../../common/props';
import Button from '../Button/Button';
import useStyles from './PageHeader.styles';

type Props = {
  title?: string;
  buttonTitle?: string;
  buttonVariant?: ButtonVariant;
  setOpen?: (open: boolean) => void;
};

const PageHeader = ({
  title,
  buttonTitle,
  setOpen,
  buttonVariant = 'primary',
}: Props) => {
  const classes = useStyles();
  return (
    <Box className={classes.header}>
      {!!title && <Typography variant="h5">{title}</Typography>}
      {buttonTitle && (
        <Button
          variant={buttonVariant}
          title={buttonTitle}
          onClick={() => setOpen && setOpen(true)}
        />
      )}
    </Box>
  );
};

export default PageHeader;
