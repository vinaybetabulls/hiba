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
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'secondaryDark'
  | 'secondaryLight'
  | 'tertiary'
  | 'tertiaryDark'
  | 'tertiaryLight';

export type LinkProps = {
  label: string;
  url?: string;
  icon?: string;
  iconPosition?: 'left' | 'right' | 'top';
  iconFontSize?: 'inherit' | 'small' | 'large';
  highlight?: boolean;
  className?: string;
  nofollow?: boolean;
  noFollow?: boolean;
  newWindow?: boolean;
  onClick?: () => void;
  // Added to support links that appear as buttons
  button?: boolean;
  variant?: ButtonVariant;
  thin?: boolean;
  tabIndex?: number;
  highlightTextMatch?: string;
  id?: string;
};

export type BodyComponent = 'Articles' | 'Institutions';
export type Site = {
  bodyComponent: BodyComponent;
  setBodyComponent?: (bodyComponent: BodyComponent) => void;
};

export type SideNavLinks = {
  icon: string;
  url: string;
  label: string;
};

export type InstitutionValues = {
  name: string;
  addressline1: string;
  addressline2?: string;
  city: string;
  state: string;
  zipcode: string;
  landmark: string;
  yearOfEstablishment: string;
  // natureOfInstitution: 'UNDER_CONSTRUCTION' | 'RENOVATE' | 'DAMAGED';
  natureOfInstitution: string;
  comments: string;
};
