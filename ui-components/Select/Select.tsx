import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import { default as MuiSelect, SelectProps } from '@material-ui/core/Select';
import clsx from 'clsx';
import { FormikContext, useField } from 'formik';
import React, { useContext } from 'react';
import { showValidationMeta } from '../../utils/common';
import Icon from '../Icon/Icon';
import useStyles from './Select.styles';

type Props = SelectProps & {
  name: string;
  label?: string;
  state?: 'error' | 'success';
  errorMessage?: string;
  completed?: boolean;
  value?: any;
  items: {
    value: string;
    label: string;
  }[];
  hideRequiredOptional?: boolean;
  autoFocus?: boolean;
};

const SelectWrappper = (props: Props) => {
  // check if formik is available
  return !!useContext(FormikContext) ? (
    <FormikSelect {...props} />
  ) : (
    <Select {...props} />
  );
};

const FormikSelect = (props: Props) => {
  const [field, meta] = useField(props.name);
  const validation = showValidationMeta(meta);
  return <Select {...field} {...props} {...validation} />;
};

const Select = (props: Props) => {
  const classes: any = useStyles();
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef(null);

  // separate props that are not passed through to text input field
  const {
    className,
    completed,
    fullWidth,
    label,
    onClick,
    required,
    state,
    errorMessage,
    items,
    placeholder = 'Please select',
    hideRequiredOptional,
    autoFocus,
    ...selectInputProps
  } = props;
  const { id = props.name, name, value, disabled } = props;

  const handleContainerClick = () => {
    if (!open && !disabled) {
      setOpen(prev => !prev);
    }
  };

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const renderSelectedValue = (value: unknown) => {
    const selectedItem = items.find(item =>
      typeof value === 'string'
        ? item.value.toLowerCase() === value.toLowerCase()
        : item.value === value,
    );
    if (!value) {
      return <span className={classes.placeholder}>{placeholder}</span>;
    }
    return <>{selectedItem?.label}</>;
  };

  return (
    <div
      ref={containerRef}
      className={clsx(classes.textFieldWrapper, fullWidth && classes.fullWidth)}
    >
      <div
        className={clsx(
          classes.textField,
          className ?? '',
          state === 'error' && classes.error,
          state === 'success' && classes.success,
          disabled && classes.disabled,
          (open || value) && classes.touched,
        )}
        role="button"
        onClick={handleContainerClick}
      >
        <FormControl className={classes.formControl}>
          <label className={classes.label} htmlFor={id || name}>
            {`${label} `}
            {hideRequiredOptional ? '' : required ? '(Required)' : '(Optional)'}
          </label>
          <MuiSelect
            {...selectInputProps}
            id={id || name}
            disableUnderline={true}
            displayEmpty={true}
            autoFocus={autoFocus || open}
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            className={classes.muiRoot}
            renderValue={renderSelectedValue}
            classes={{ icon: classes.muiIcon, select: classes.muiSelectRoot }}
            MenuProps={{
              anchorEl: containerRef.current,
              getContentAnchorEl: null,
            }}
          >
            {items.map((item, index) => (
              <MenuItem
                className={classes.menuListItem}
                value={item.value}
                key={`${index}${item.label}`}
              >
                {item.label}
              </MenuItem>
            ))}
          </MuiSelect>
        </FormControl>

        <Icon icon={open ? 'clear' : 'arrow_drop_down'} fontSize="inherit" />
      </div>
      {errorMessage && (
        <span className={classes.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
};

export default SelectWrappper;
