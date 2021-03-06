import { Input, InputProps } from '@material-ui/core';
import { FormikContext, useField } from 'formik';
import { useContext } from 'react';
import clsx from 'clsx';
import { showValidationMeta } from '../../utils/common';
import useStyles from './TextField.styles';

export type Props = InputProps & {
  name: string;
  label?: string;
  trimOnBlur?: boolean;
  state?: 'error' | 'success';
  errorMessage?: string;
  fullWidth?: boolean;
  setValue?: (value: any) => void;
  onChange?: (e: React.ChangeEvent<any>) => void;
  onClick?: () => void;
  onBlur?: (e: any) => void;
  hideError?: boolean;
  hideRequiredOptional?: boolean;
  rows?: number;
  multiline?: boolean;
  children?: React.ReactNode;
};

const TextFieldWrappper = (props: Props) => {
  return !!useContext(FormikContext) ? (
    <FormikTextField {...props} />
  ) : (
    <TextField {...props} />
  );
};
const FormikTextField = (props: Props) => {
  const [field, meta, helpers] = useField(props.name);
  const validation = showValidationMeta(meta);
  const errorMessage = Array.isArray(validation.errorMessage)
    ? validation.errorMessage[0]
    : validation.errorMessage;
  return (
    <TextField
      setValue={helpers.setValue}
      {...field}
      {...props}
      {...validation}
      errorMessage={errorMessage}
    />
  );
};
const TextField = (props: Props) => {
  const classes = useStyles();

  // separate props that are not passed through to text input field
  const {
    className,
    rows,
    id,
    name,
    value,
    disabled,
    onBlur,
    onClick,
    onChange,
    fullWidth,
    label,
    required,
    state,
    errorMessage,
    setValue,
    hideRequiredOptional,
    hideError,
    children,
    trimOnBlur,
    endAdornment,
    ...textInputProps
  } = props;

  const commonInputProps = {
    id: id || name,
    type: 'text',
    disableUnderline: true,
    className: classes.value,
    onChange,
    onBlur: trimOnBlur
      ? (event: any) => {
          console.log({ enetedvalue: event.target.value });
          onBlur && onBlur(event);
          setValue && setValue(event.target?.value?.trim());
        }
      : onBlur,
    value,
    rows,
    ...textInputProps,
  };

  return (
    <div
      className={clsx(classes.textFieldWrapper, fullWidth && classes.fullWidth)}
    >
      <div className={clsx(classes.textContainer)}>
        <label className={classes.label} htmlFor={commonInputProps.id}>
          {`${label} `}
          {hideRequiredOptional ? '' : required ? '(Required)' : '(Optional)'}
        </label>
        <Input
          {...commonInputProps}
          endAdornment={endAdornment}
          className={classes.textField}
        />
        {errorMessage && !hideError && (
          <span className={classes.errorMessage}>{errorMessage}</span>
        )}
      </div>
    </div>
  );
};

export default TextFieldWrappper;
