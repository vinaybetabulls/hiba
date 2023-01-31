import React, { useState } from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';

import TextField from '../TextField/TextField';
import {
  errorMessages,
  HandleSubmit,
  inputValidationRegex,
} from '../../utils/common';
import useStyles from './Articles.styles';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { ArticleValues } from '../../common/props';
import UploadImages from '../UploadImages/UploadImages';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

export const validationSchema = Yup.object().shape({
  title: Yup.string()
    .trim()
    .min(1, errorMessages(1).minChars)
    .max(50, errorMessages(50).maxChars)
    .required('Please enter title')
    .matches(inputValidationRegex, errorMessages().unsupportedCharacters),
  body: Yup.string()
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
  // addressLine1: Yup.string()
  //   .required('Please enter address line 1')
  //   .matches(inputValidationRegex, errorMessages().unsupportedCharacters),
  // addressLine2: Yup.string().matches(
  //   inputValidationRegex,
  //   errorMessages().unsupportedCharacters,
  // ),
  // city: Yup.string()
  //   .required('Please enter a city')
  //   .matches(inputValidationRegex, errorMessages().unsupportedCharacters),
  // postalCode: Yup.string()
  //   .required('Please enter a postcode')
  //   .matches(inputValidationRegex, errorMessages().unsupportedCharacters),
  // country: Yup.string().required('Please select a country'),
});

type Props = {
  title?: string;
  body?: string;
  images?: string[];
  handleSaveArticles: HandleSubmit<ArticleValues>;
  open: boolean;
  setOpen: (open: boolean) => void;
  uploadImages: (file: any) => Promise<any>;
};

const ArticlesForm = ({
  title = '',
  body = '',
  images = [],
  handleSaveArticles,
  open,
  setOpen,
  uploadImages,
}: Props) => {
  const initialValues = {
    title,
    body,
    // images,
  };

  const uploadPicture = async (e: any) => {
    const productData = new FormData();
    [...e.target.files].forEach(image => {
      productData.append('files', image);
    });
    console.log(productData);
    try {
      const response = await uploadImages(productData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const formikConfig = {
    initialValues,
    validationSchema,
    onSubmit: handleSaveArticles,
  };

  const classes = useStyles();

  return (
    <Formik {...formikConfig}>
      {({ isSubmitting }) => (
        <>
          {open && (
            <Modal
              open={open}
              onClose={() => setOpen(false)}
              keepMounted={true}
              // fullScreen={true}
              setOpen={() => setOpen(true)}
              maxWidth="md"
              // fullWidth={true}
              title="Article"
            >
              <Form>
                <div className={classes.container}>
                  <TextField
                    name="title"
                    label="Article"
                    placeholder="Enter title"
                    fullWidth
                    required
                  />
                </div>
                <div className={classes.container}>
                  <TextField
                    name="body"
                    label="Description"
                    placeholder="Enter description"
                    fullWidth
                    required
                    multiline
                    rows={4}
                  />
                </div>
                <UploadImages images={images} uploadingImages={uploadImages} />
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
                    title="Cancel"
                    variant="secondary"
                    className={classes.cancelButton}
                    onClick={() => setOpen(false)}
                  />
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
        </>
      )}
    </Formik>
  );
};

export default ArticlesForm;
