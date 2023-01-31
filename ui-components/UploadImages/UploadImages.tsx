import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Image from 'next/image';
import { uploadImages } from '../../services';

export type Props = {
  images: string[];
  uploadingImages: (files: any) => Promise<any>;
};

const UploadImages = ({ uploadingImages }: Props) => {
  const [selectedImage, setSelectedImage] = useState<any>();
  // const [imageUrl, setImageUrl] = useState<any>([]);

  // useEffect(() => {
  //   if (selectedImage) {
  //     setImageUrl([URL.createObjectURL(selectedImage)]);
  //   }
  // }, [selectedImage]);
  // console.log({ imageUrl });

  // useEffect(() => {
  //   const formData = new FormData();
  //   formData.append('file', selectedImage);
  //   console.log({ formData });
  // }, [selectedImage]);
  const uploadPicture = async (e: any) => {
    const productData = new FormData();
    [...e.target.files].forEach(image => {
      productData.append('files', image);
    });
    console.log(productData);
    try {
      const response = await uploadingImages(productData);
      if (response && response[0]) {
        console.log('multiple upload');
      } else {
        console.log('single upload');
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ display: 'none' }}
        onChange={uploadPicture}
        multiple
      />
      <label htmlFor="select-image">
        <Button variant="contained" color="primary" component="span">
          Upload Image
        </Button>
      </label>
      {/* {!!imageUrl?.length && selectedImage && (
        <Box mt={2} textAlign="center">
          <div>Image Preview:</div>
         {imageUrl?.map((image, index) => (
            <Image
              src={imageUrl}
              alt={selectedImage.name}
              height="100px"
              width="100px"
              key={`image_upload_${index}`}
            />
          ))} 
        </Box>
      )} */}
    </>
  );
};

export default UploadImages;
