import { FormikHelpers } from 'formik';

export type FieldValidation = {
  state?: 'error' | 'success';
  errorMessage?: string;
};

export type HandleSubmit<Values> = (
  values: Values,
  formikHelpers?: FormikHelpers<Values>,
) => Promise<any>;

export type AppContextProps = {
  isLoggedIn?: boolean;
};
