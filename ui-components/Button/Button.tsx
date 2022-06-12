import { default as MuiButton } from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from 'clsx';
import React, { CSSProperties } from 'react';
import { ButtonVariant } from '../../common/props';
import { ucFirst } from '../../utils/common';
import Icon from '../Icon/Icon';
import useStyles from './Button.styles';

export type Props = {
  variant: ButtonVariant;
  thin?: boolean;
  thinOnMobile?: boolean;
  icon?: string;
  title?: string;
  disabled?: boolean;
  className?: string;
  isSubmit?: boolean;
  onClick?: (e?: any) => any;
  href?: string;
  fullWidth?: boolean;
  loading?: boolean;
  style?: CSSProperties;
  id?: string;
};
/**
 * variants tertiary & secondary should be replaced
 */
const Button = (props: Props) => {
  const {
    title,
    disabled,
    thin,
    thinOnMobile,
    fullWidth,
    icon,
    onClick,
    isSubmit,
    variant = 'primary',
    href,
    className,
    style,
    loading,
    id,
  } = props;
  const classes: any = useStyles();
  const formattedVariat = ucFirst(
    variant === 'secondary'
      ? 'secondaryDark'
      : variant === 'tertiary'
      ? 'tertiaryDark'
      : variant,
  );
  const calcClassName = {
    [classes.button]: true,
    [classes[`button${formattedVariat}`]]: true,
    [classes.buttonThin]: thin,
    [classes.buttonThinMobile]: thinOnMobile,
  };

  return (
    <>
      <MuiButton
        disabled={disabled}
        onClick={onClick}
        fullWidth={fullWidth}
        type={isSubmit ? 'submit' : 'button'}
        className={clsx(className)}
        classes={{ root: clsx(calcClassName) }}
        startIcon={
          icon && <Icon icon={icon} className={classes.iconContainer} />
        }
        href={href}
        style={style}
        id={id}
        disableFocusRipple
      >
        <span className={classes.label}>{title}</span>
        {loading && <CircularProgress className={classes.spinner} size={20} />}
      </MuiButton>
    </>
  );
};

export default Button;
