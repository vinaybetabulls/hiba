import {
  Checkbox as CheckoboxUI,
  CheckboxProps,
  FormControlLabel,
  FormControlLabelProps,
} from '@material-ui/core';
import clsx from 'clsx';
import { FormikContext, useField } from 'formik';
import React from 'react';
import { useContext } from 'react';
import { showValidationMeta } from '../../utils/common';
import useStyles from './Checkbox.styles';

type Props = CheckboxProps &
  Pick<FormControlLabelProps, 'labelPlacement'> & {
    name: string;
    value?: string;
    fullWidth?: boolean;
    errorMessage?: string;
    checked?: boolean;
    controlAlignment?: 'top' | 'center' | 'bottom';
    label?: string | JSX.Element;
    disabled?: boolean;
    state?: 'error' | 'success';
  };

const Checkbox = (props: Props) => {
  return !!useContext(FormikContext) ? (
    <FormikCheckCircle {...props} />
  ) : (
    <CheckCircle {...props} />
  );
};

const FormikCheckCircle = (props: Props) => {
  const [field, meta] = useField({
    name: props.name,
    type: 'radio',
    value: props.value,
  });
  const validation = showValidationMeta(meta);
  return <CheckCircle {...field} {...props} {...validation} />;
};

const CheckCircle = ({
  name,
  fullWidth,
  className,
  errorMessage,
  controlAlignment,
  label,
  disabled,
  state,
  labelPlacement,
  ...inputProps
}: Props) => {
  const classes = useStyles();
  return (
    <div className={clsx(className, fullWidth && classes.fullWidth)}>
      <FormControlLabel
        className={clsx(
          classes.checkCircle,
          fullWidth && classes.fullWidth,
          state === 'error' && classes.error,
          //   controlAlignment && controlAlignment !== 'center' && classes[controlAlignment]
        )}
        label={label}
        labelPlacement={labelPlacement}
        disabled={disabled}
        control={
          <CheckoboxUI
            edge="start"
            // icon={React.cloneElement(<CheckCircleIcon />, {
            //   fontSize: 'inherit',
            //   disabled,
            //   error: state === 'error',
            // })}
            // checkedIcon={React.cloneElement(<CheckCircleIcon />, {
            //   fontSize: 'inherit',
            //   checked: !disabled,
            //   disabled,
            //   error: state === 'error',
            // })}
            disabled={disabled}
            disableRipple
            disableFocusRipple
            disableTouchRipple
            {...inputProps}
            id={name}
          />
        }
      />
      {errorMessage && (
        <span className={classes.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
};
export default Checkbox;
