import { FieldMetaProps, FormikHelpers } from 'formik';
import { FieldValidation } from '../common/props';

export const showValidationMeta = (meta: FieldMetaProps<any>) => {
  if (meta.touched && meta.error) {
    return { state: 'error', errorMessage: meta.error } as FieldValidation;
  } else if (meta.touched) {
    return { state: 'success' } as FieldValidation;
  }
  return {};
};

/* Regex to test against the extended ASCII character set */
export const inputValidationRegex = /^[\x20-\xFF\r\n]*$/;

export const errorMessages = (value?: any) => ({
  minChars: `Please enter more than ${value} characters`,
  maxChars: `${value} character limit exceeded`,
  required: `This field is required`,
  email: `Please enter a valid email address`,
  minNumber: `${value} is the minimum number`,
  maxNumber: `${value} is the maximum number`,
  date: `Please enter a valid date format`,
  phone: `Please enter only numbers and spaces, it can start with + for international numbers`,
  unsupportedCharacters:
    'Sorry, you have entered text that appears to contain some invalid characters, remove those characters and try again',
});

export const ucFirst = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export type HandleSubmit<Values> = (
  values: Values,
  formikHelpers?: FormikHelpers<Values>,
) => Promise<any>;

export type ArticleValues = {
  title: string;
  description: string;
  // images: string[];
};

export type LoginValues = {
  name: string;
  password: string;
};
