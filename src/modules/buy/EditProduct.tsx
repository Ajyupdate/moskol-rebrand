import React, { useEffect, useState } from 'react';
import {
  Formik,
  Form,
  Field,
  FieldProps,
} from 'formik';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Textarea,
  Alert,
  AlertIcon,
  CloseButton,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { useParams } from 'next/navigation';
import { IproductsProps } from './Views';
import axios from 'axios';
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;


export interface iProductPatchProps {
  _id:           string | undefined;
  name:          string | undefined;
  description:   string | undefined;
  unitAvailable: number | undefined;
  price:         number | undefined;
  imageUrl:      string | undefined;
  features:      string[] | undefined;
}

export default function UserProfileEdit() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [product, setProduct] = useState<iProductPatchProps>()
  const params = useParams()

  useEffect(() => {
    
    if (API_ENDPOINT) {
    fetch(`${API_ENDPOINT}/products/${params.id}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        setProduct(data)}
    )
    .catch((error) => console.log('error:', error))
    
    } 
  }, [])

  const initialValues: iProductPatchProps={
    _id: product?._id,
    name: product?.name,
    description: product?.description,
    unitAvailable: product?.unitAvailable,
    price:product?.price,
    
    features: product?.features,
    imageUrl: 'https://bit.ly/sage-adebayo', // Default image URL
  }

  
 async function handleSubmit(values:iProductPatchProps){
  

    try {
      const response = await axios.patch(`${API_ENDPOINT}/products/${params.id}`, values);
      console.log(response.data); // Updated product data
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error fetching product:', error);
      setErrorMessage(true)
    }
  }
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={handleSubmit}
    >
      {() => (
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          border={'1px solid black'}
        >
          
          <Form >
            <Stack
              spacing={4}
              w={{md:'600px'}}
              maxW={{md:'600px'}}
             
              rounded={'xl'}
              // boxShadow={'lg'}
              p={6}
              my={12}
            >
              {isSubmitted && (
              <Alert status="success" mt={4} borderRadius="md">
                <AlertIcon />
                Product updated successfully!
                <CloseButton
                  position="absolute"
                  right="8px"
                  top="8px"
                  onClick={() => setIsSubmitted(false)}
                />
              </Alert>
            )}

          {errorMessage && (
                <Alert status="error">
                  <AlertIcon />
                  Please check your internet connection and try again
                  <CloseButton
                    position="absolute"
                    right="8px"
                    top="8px"
                    onClick={() => setErrorMessage(false)}
                  />
                </Alert>
              )}
              <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                User Profile Edit
              </Heading>
              <FormControl id="name" >
                <FormLabel>Userr Icon</FormLabel>
                <Stack direction={['column', 'row']} spacing={6}>
                  <Center>
                    <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                      <AvatarBadge
                        as={IconButton}
                        size="md"
                        rounded="full"
                        top="-10px"
                        colorScheme="red"
                        aria-label="remove Image"
                        icon={<SmallCloseIcon />}
                      />
                    </Avatar>
                  </Center>
                  <Center w="full">
                    <button className='bg-gray-300 py-2 px-2 md:w-full'>Change Icon</button>
                 </Center>
                </Stack>
              </FormControl>
              <FormControl id="name"  >
                <FormLabel>Name</FormLabel>
                <Field name="name">
                  {({ field }:FieldProps) => (
                    <Input
                      
                      {...field}
                      placeholder="name"
                      _placeholder={{ color: 'gray.500' }}
                      type="text"
                    />
                  )}
                </Field>
              </FormControl>
              <FormControl id="description" >
                <FormLabel>description address</FormLabel>
                <Field name="description">
                  {({ field }:FieldProps) => (
                    <Textarea
                      {...field}
                      
                      _placeholder={{ color: 'gray.500' }}
                     
                      rows={4}
                    />
                  )}
                </Field>
              </FormControl>

              <FormControl id="unitAvailable" >
                <FormLabel>unit Available </FormLabel>
                <Field name="unitAvailable">
                  {({ field }:FieldProps) => (
                    <Input
                      {...field}
                      
                      _placeholder={{ color: 'gray.500' }}
                      type="unitAvailable"
                    />
                  )}
                </Field>
              </FormControl>

              <FormControl id="price" >
                <FormLabel>Price </FormLabel>
                <Field name="price">
                  {({ field }:FieldProps) => (
                    <Input
                      {...field}
                      
                      _placeholder={{ color: 'gray.500' }}
                      type="price"
                    />
                  )}
                </Field>
              </FormControl>

              <FormControl id="imageUrl" >
                <FormLabel>imageUrl </FormLabel>
                <Field name="imageUrl">
                  {({ field }:FieldProps) => (
                    <Input
                      {...field}
                      
                      _placeholder={{ color: 'gray.500' }}
                      type="imageUrl"
                    />
                  )}
                </Field>
              </FormControl>

              <FormControl id="features" >
                <FormLabel>features (seperated by comma)</FormLabel>
                <Field name="features">
                  {({ field }:FieldProps) => (
                    <Textarea
                      {...field}
                      placeholder="features"
                      _placeholder={{ color: 'gray.500' }}
                      rows={4}
                    />
                  )}
                </Field>
              </FormControl>
              <Stack spacing={6} direction={['column', 'row']}>
              <button
                className="bg-red-400 py-2 hover:bg-red-500 text-white w-full"
                type="reset"
              >
                Cancel
              </button>

              <button
                className="bg-blue-700 py-2 hover:bg-blue-500 text-white w-full"
                type="submit"
              >
                Submit
              </button>

              </Stack>
            </Stack>
          </Form>
        </Flex>
      )}
    </Formik>
  );
}
