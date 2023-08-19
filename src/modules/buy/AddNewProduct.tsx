// components/NewProductForm.tsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

const NewProductForm: React.FC = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
    price: Yup.number().required('Price is required').positive('Price must be positive'),
    unitAvailable: Yup.number()
      .required('Units available is required')
      .integer('Must be a whole number'),
    features: Yup.string().min(1, 'At least one feature is required'),
  });

  const handleSubmit = async (values: any, { resetForm }: any) => {
    console.log(values)
    const formData = new FormData();
    formData.append('imageUrl', values.image[0]);
    formData.append('name', values.name);
    formData.append('description', values.description);
    formData.append('price', values.price);
    formData.append('unitAvailable', values.unitAvailable);
    formData.append('features', JSON.stringify(values.features));
  
    // Convert the FormData to an object to inspect its properties
    const formDataAsObject = Array.from(formData.entries()).reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {} as { [key: string]: any });
  
    console.log('FormData as object:', formDataAsObject);
  
    try {
      await axios.post(`${API_ENDPOINT}/products/addProduct`, formData);
      resetForm();
      console.log('Product added successfully');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };
  

  return (
    <Formik
      initialValues={{
        image: [],
        name: '',
        description: '',
        price: '',
        unitAvailable: '',
        features: '',
      }}
    //   validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <FormControl isInvalid={!!values.image.length && !values.image[0]}>
            <FormLabel htmlFor="image">Image</FormLabel>
            <Dropzone onDrop={(acceptedFiles) => setFieldValue('image', acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()} style={{ padding: '10px', border: '1px dashed' }}>
                  <input {...getInputProps()} />
                  <p>Drag n drop an image here, or click to select one</p>
                  {values.image && values.image[0] && (
                    <img
                      src={URL.createObjectURL(values.image[0])}
                      alt="Product"
                      style={{ maxWidth: '100%' }}
                    />
                  )}
                </div>
              )}
            </Dropzone>
            <FormErrorMessage>
              <ErrorMessage name="image" />
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!values.name}>
            <FormLabel htmlFor="name">Product Name</FormLabel>
            <Field as={Input} type="text" id="name" name="name" />
            <FormErrorMessage>
              <ErrorMessage name="name" />
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!values.description}>
            <FormLabel htmlFor="description">Description</FormLabel>
            <Field as={Textarea} id="description" name="description" />
            <FormErrorMessage>
              <ErrorMessage name="description" />
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!values.price}>
            <FormLabel htmlFor="price">Price</FormLabel>
            <Field as={Input} type="number" id="price" name="price" />
            <FormErrorMessage>
              <ErrorMessage name="price" />
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!values.unitAvailable}>
            <FormLabel htmlFor="unitAvailable">Units Available</FormLabel>
            <Field as={Input} type="number" id="unitAvailable" name="unitAvailable" />
            <FormErrorMessage>
              <ErrorMessage name="unitAvailable" />
            </FormErrorMessage>
          </FormControl>

         <FormControl isInvalid={!!values.features.length}>
  <FormLabel htmlFor="features">Features</FormLabel>
  <Field
    as={Textarea}
    id="features"
    name="features"
    placeholder="Enter each feature on a new line"
    format={(value: any) => (Array.isArray(value) ? value.join('\n') : '')} // Convert array to string
    parse={(value: any) => value.split('\n')} // Convert string back to array
  />
  <FormErrorMessage>
    <ErrorMessage name="features" />
  </FormErrorMessage>
</FormControl>


          <Button mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default NewProductForm;
