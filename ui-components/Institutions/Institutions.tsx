import React, { useState } from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';

import TextField from '../TextField/TextField';
import {
  errorMessages,
  HandleSubmit,
  inputValidationRegex,
} from '../../utils/common';
import useStyles from './Institutions.styles';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { Address, InstitutionValues } from '../../common/props';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(1, errorMessages(1).minChars)
    .max(50, errorMessages(50).maxChars)
    .required('Please enter name')
    .matches(inputValidationRegex, errorMessages().unsupportedCharacters),
  url: Yup.string()
    .trim()
    .min(1, errorMessages(1).minChars)
    .max(50, errorMessages(50).maxChars)
    .required('Please enter URL'),
  description: Yup.string()
    .trim()
    .min(1, errorMessages(1).minChars)
    .max(50, errorMessages(50).maxChars)
    .required('Please enter description')
    .matches(inputValidationRegex, errorMessages().unsupportedCharacters),
  address: Yup.object().shape({
    addressline1: Yup.string()
      .trim()
      .min(1, errorMessages(1).minChars)
      .max(40, errorMessages(40).maxChars)
      .required('Please enter addressline1')
      .matches(inputValidationRegex, errorMessages().unsupportedCharacters),
    addressline2: Yup.string()
      .trim()
      .min(1, errorMessages(1).minChars)
      .max(40, errorMessages(40).maxChars)
      .matches(inputValidationRegex, errorMessages().unsupportedCharacters),
    city: Yup.string()
      .trim()
      .min(1, errorMessages(1).minChars)
      .max(40, errorMessages(40).maxChars)
      .required('Please enter city')
      .matches(inputValidationRegex, errorMessages().unsupportedCharacters),
    mandal: Yup.string()
      .trim()
      .min(1, errorMessages(1).minChars)
      .max(40, errorMessages(40).maxChars)
      .required('Please enter mandal')
      .matches(inputValidationRegex, errorMessages().unsupportedCharacters),
    district: Yup.string()
      .trim()
      .min(1, errorMessages(1).minChars)
      .max(40, errorMessages(40).maxChars)
      .required('Please enter district')
      .matches(inputValidationRegex, errorMessages().unsupportedCharacters),
    state: Yup.string()
      .trim()
      .min(1, errorMessages(1).minChars)
      .max(40, errorMessages(40).maxChars)
      .required('Please enter state')
      .matches(inputValidationRegex, errorMessages().unsupportedCharacters),
    postalcode: Yup.string()
      .trim()
      .min(1, errorMessages(1).minChars)
      .max(40, errorMessages(40).maxChars)
      .required('Please enter pincode')
      .matches(inputValidationRegex, errorMessages().unsupportedCharacters),
    landmark: Yup.string()
      .trim()
      .min(1, errorMessages(1).minChars)
      .max(40, errorMessages(40).maxChars)
      .required('Please enter landmark')
      .matches(inputValidationRegex, errorMessages().unsupportedCharacters),
  }),
  yearOfEstablishment: Yup.string()
    .trim()
    .min(1, errorMessages(1).minChars)
    .max(40, errorMessages(40).maxChars)
    .required('Please enter yearOfEstablishment')
    .matches(inputValidationRegex, errorMessages().unsupportedCharacters),
  natureOfInstitution: Yup.string()
    .trim()
    .min(1, errorMessages(1).minChars)
    .max(40, errorMessages(40).maxChars)
    .required('Please enter nature of institution'),
  // images: Yup.mixed()
  //   .test(
  //     'fileSize',
  //     'File Size is too large',
  //     value => value.size <= 1024 * 1024,
  //   )
  //   .test('fileType', 'Unsupported File Format', value =>
  //     SUPPORTED_FORMATS.includes(value.type),
  //   ),
});

export type InstituteProps = {
  name?: string;
  url?: string;
  description?: string;
  address?: Address;
  yearOfEstablishment?: string;
  natureOfInstitution?: string;
};

export type Props = InstituteProps & {
  // natureOfInstitution?: 'UNDER_CONSTRUCTION' | 'RENOVATE' | 'DAMAGED';
  handleSaveInstitute: HandleSubmit<InstitutionValues>;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const InstitutionsForm = ({
  name = '',
  description = '',
  url = '',
  address = {
    addressline1: '',
    addressline2: '',
    city: '',
    mandal: '',
    district: '',
    state: '',
    postalcode: '',
    landmark: '',
  },
  yearOfEstablishment = '',
  natureOfInstitution = '',
  handleSaveInstitute,
  open,
  setOpen,
}: Props) => {
  const initialValues = {
    name,
    description,
    url,
    address,
    yearOfEstablishment,
    natureOfInstitution,
  };
  console.log({ initialValues });
  const formikConfig = {
    initialValues,
    validationSchema,
    onSubmit: handleSaveInstitute,
    enableReinitialize: true,
  };

  const classes = useStyles();

  return (
    <Formik {...formikConfig}>
      {({ isSubmitting }) => (
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          keepMounted={true}
          // fullScreen={true}
          setOpen={() => setOpen(true)}
          maxWidth="md"
          // fullWidth={true}
          title="Institution"
        >
          <Form>
            <div className={classes.container}>
              <TextField
                name="name"
                label="Name of the Institution"
                placeholder="Enter name of the institution"
                fullWidth
                required
              />
            </div>
            <div className={classes.container}>
              <TextField
                name="description"
                label="Description"
                placeholder="Enter description"
                fullWidth
                required
                rows={4}
                multiline
              />
            </div>
            <div className={classes.container}>
              <TextField
                name="url"
                label="URL"
                placeholder="Enter url"
                fullWidth
                required
              />
            </div>
            <div className={classes.addressContainer}>
              <div className={classes.container}>
                <TextField
                  name="address.addressline1"
                  label="Addressline1"
                  placeholder="Enter addressline1"
                  fullWidth
                  required
                />
              </div>
              <div className={classes.container}>
                <TextField
                  name="address.addressline2"
                  label="Addressline2"
                  placeholder="Enter addressline2"
                  fullWidth
                />
              </div>
              <div className={classes.container}>
                <TextField
                  name="address.city"
                  label="City"
                  placeholder="Enter City"
                  fullWidth
                  required
                />
              </div>
              <div className={classes.container}>
                <TextField
                  name="address.mandal"
                  label="Mandal"
                  placeholder="Enter Mandal"
                  fullWidth
                  required
                />
              </div>
              <div className={classes.container}>
                <TextField
                  name="address.district"
                  label="District"
                  placeholder="Enter District"
                  fullWidth
                  required
                />
              </div>
              <div className={classes.container}>
                <TextField
                  name="address.state"
                  label="State"
                  placeholder="Enter state"
                  fullWidth
                  required
                />
              </div>
              <div className={classes.container}>
                <TextField
                  name="address.landmark"
                  label="Landmark"
                  placeholder="Enter landmark"
                  fullWidth
                  required
                />
              </div>
              <div className={classes.container}>
                <TextField
                  name="address.postalcode"
                  label="Postalcode"
                  placeholder="Postal code"
                  fullWidth
                  required
                />
              </div>
              <div className={classes.container}>
                <TextField
                  name="natureOfInstitution"
                  label="Nature of Insitution"
                  placeholder="Enter type of institution"
                  fullWidth
                  required
                />
              </div>
              <div className={classes.container}>
                <TextField
                  name="yearOfEstablishment"
                  label="Year of establishment"
                  placeholder="Enter year of establishment"
                  fullWidth
                  required
                />
              </div>
            </div>
            {/* <div className={classes.container}>
              <label className={classes.label}>Upload</label>
              <div className={classes.imgContainer}>
                <div className={classes.imgUpload}>
                  <input type="file" id="myFile" name="images" />
                </div>
                <div className={classes.imgPlaceHolder}></div>
              </div>
            </div> */}
            <div className={classes.dialogActions}>
              <Button
                title="Save"
                isSubmit
                variant="primary"
                disabled={isSubmitting}
              />
            </div>
          </Form>
        </Modal>
      )}
    </Formik>
  );
};

export default InstitutionsForm;
