import React, { useState } from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '../TextField/TextField';
import IconButton from '@material-ui/core/IconButton';
import {
  errorMessages,
  HandleSubmit,
  inputValidationRegex,
  LoginValues,
} from '../../utils/common';
import useStyles from './Login.styles';
import Button from '../Button/Button';
import { Visibility, VisibilityOff } from '@material-ui/icons';

export const validationSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .min(1, errorMessages(1).minChars)
    .max(50, errorMessages(50).maxChars)
    .required('Please enter username')
    .matches(inputValidationRegex, errorMessages().unsupportedCharacters),
  password: Yup.string()
    .trim()
    .min(1, errorMessages(1).minChars)
    .max(40, errorMessages(40).maxChars)
    .required('Please enter password')
    .matches(inputValidationRegex, errorMessages().unsupportedCharacters),
});
type Props = {
  handleSubmit: HandleSubmit<LoginValues>;
};
const LoginForm = ({ handleSubmit }: Props) => {
  const initialValues = {
    username: '',
    password: '',
  };

  const formikConfig = {
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  };

  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  return (
    <Formik {...formikConfig}>
      {({ isSubmitting }) => (
        <>
          <Form>
            <div className={classes.container}>
              <TextField
                name="username"
                label="Username"
                placeholder="Enter username"
                hideRequiredOptional
                fullWidth
                required
              />
            </div>
            <div className={classes.container}>
              <TextField
                name="password"
                label="Password"
                placeholder="Enter password"
                fullWidth
                hideRequiredOptional
                required
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={(
                        event: React.MouseEvent<HTMLButtonElement>,
                      ) => event.preventDefault()}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>
            <div className={classes.dialogActions}>
              <Button
                title="Login"
                isSubmit
                variant="primary"
                disabled={isSubmitting}
              />
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default LoginForm;
