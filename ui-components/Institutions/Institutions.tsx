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
import { InstitutionValues } from '../../common/props';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(1, errorMessages(1).minChars)
    .max(50, errorMessages(50).maxChars)
    .required('Please enter title')
    .matches(inputValidationRegex, errorMessages().unsupportedCharacters),
  addressline1: Yup.string()
    .trim()
    .min(1, errorMessages(1).minChars)
    .max(40, errorMessages(40).maxChars)
    .required('Please enter description')
    .matches(inputValidationRegex, errorMessages().unsupportedCharacters),
  addressline2: Yup.string()
    .trim()
    .min(1, errorMessages(1).minChars)
    .max(40, errorMessages(40).maxChars)
    .required('Please enter description')
    .matches(inputValidationRegex, errorMessages().unsupportedCharacters),
  city: Yup.string()
    .trim()
    .min(1, errorMessages(1).minChars)
    .max(40, errorMessages(40).maxChars)
    .required('Please enter description')
    .matches(inputValidationRegex, errorMessages().unsupportedCharacters),
  state: Yup.string()
    .trim()
    .min(1, errorMessages(1).minChars)
    .max(40, errorMessages(40).maxChars)
    .required('Please enter description')
    .matches(inputValidationRegex, errorMessages().unsupportedCharacters),
  zipcode: Yup.string()
    .trim()
    .min(1, errorMessages(1).minChars)
    .max(40, errorMessages(40).maxChars)
    .required('Please enter description')
    .matches(inputValidationRegex, errorMessages().unsupportedCharacters),
  landmark: Yup.string()
    .trim()
    .min(1, errorMessages(1).minChars)
    .max(40, errorMessages(40).maxChars)
    .required('Please enter description')
    .matches(inputValidationRegex, errorMessages().unsupportedCharacters),
  yearOfEstablishment: Yup.string()
    .trim()
    .min(1, errorMessages(1).minChars)
    .max(40, errorMessages(40).maxChars)
    .required('Please enter description')
    .matches(inputValidationRegex, errorMessages().unsupportedCharacters),
  natureOfInstitution: Yup.string()
    .trim()
    .min(1, errorMessages(1).minChars)
    .max(40, errorMessages(40).maxChars)
    .required('Please enter description')
    .matches(inputValidationRegex, errorMessages().unsupportedCharacters),
  comments: Yup.string()
    .trim()
    .min(1, errorMessages(1).minChars)
    .max(40, errorMessages(40).maxChars)
    .required('Please enter description')
    .matches(inputValidationRegex, errorMessages().unsupportedCharacters),
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

type Props = {
  name?: string;
  addressline1?: string;
  addressline2?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  yearOfEstablishment?: string;
  natureOfInstitution?: 'UNDER_CONSTRUCTION' | 'RENOVATE' | 'DAMAGED';
  comments?: string;
  landmark?: string;
  handleSaveInstitute: HandleSubmit<InstitutionValues>;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const InstitutionsForm = ({
  name = '',
  addressline1 = '',
  addressline2 = '',
  city = '',
  state = '',
  zipcode = '',
  yearOfEstablishment = '',
  natureOfInstitution = 'UNDER_CONSTRUCTION',
  comments = '',
  handleSaveInstitute,
  landmark = '',
  open,
  setOpen,
}: Props) => {
  const initialValues = {
    name,
    addressline1,
    addressline2,
    city,
    state,
    zipcode,
    yearOfEstablishment,
    natureOfInstitution,
    comments,
    landmark,
  };

  const formikConfig = {
    initialValues,
    validationSchema,
    onSubmit: handleSaveInstitute,
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
            <div className={classes.addressContainer}>
              <div className={classes.container}>
                <TextField
                  name="addressline1"
                  label="Addressline1"
                  placeholder="Enter addressline1"
                  fullWidth
                  required
                />
              </div>
              <div className={classes.container}>
                <TextField
                  name="addressline2"
                  label="Addressline2"
                  placeholder="Enter addressline2"
                  fullWidth
                />
              </div>
              <div className={classes.container}>
                <TextField
                  name="city"
                  label="City"
                  placeholder="Enter City"
                  fullWidth
                  required
                />
              </div>
              <div className={classes.container}>
                <TextField
                  name="state"
                  label="State"
                  placeholder="Enter state"
                  fullWidth
                  required
                />
              </div>
              <div className={classes.container}>
                <TextField
                  name="landmark"
                  label="Landmark"
                  placeholder="Enter landmark"
                  fullWidth
                  required
                />
              </div>
              <div className={classes.container}>
                <TextField
                  name="zipcode"
                  label="Zipcode"
                  placeholder="Enter zipcode"
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
              <div className={classes.container}>
                <TextField
                  name="comments"
                  label="Comments"
                  placeholder="Enter comments"
                  fullWidth
                  multiline
                  rows={4}
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
