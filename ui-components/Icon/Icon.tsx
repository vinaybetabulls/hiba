import { default as MaterialIcon } from '@material-ui/core/Icon';
import clsx from 'clsx';
import React from 'react';
import useStyles from './Icon.styles';

type Props = {
  icon: string;
  label?: string;
  className?: string;
  fontSize?: 'inherit' | 'small' | 'large';
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
  ariaLabel?: string;
};

const Icon = (props: Props) => {
  const { label, className, fontSize, onClick, ariaLabel } = props;
  const icon = props.icon?.toLowerCase();
  const classes = useStyles();

  const Contents = () => (
    <>
      <MaterialIcon {...(fontSize && { fontSize })}>{icon}</MaterialIcon>
      {label && <div>{label}</div>}
    </>
  );

  const commonProps = {
    className: clsx(classes.iconContainer, className ?? ''),
    'aria-label': ariaLabel || 'icon',
  };

  return (
    <>
      {!!onClick ? (
        <button
          type="button"
          onClick={onClick}
          style={{ cursor: 'pointer' }}
          {...commonProps}
        >
          <Contents />
        </button>
      ) : (
        <span {...commonProps}>
          <Contents />
        </span>
      )}
    </>
  );
};

export default Icon;
