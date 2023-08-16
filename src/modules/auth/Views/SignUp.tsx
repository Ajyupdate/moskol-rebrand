import { Alert, AlertIcon, Box, CloseButton, Flex, Heading, Input, Stack, Text } from '@chakra-ui/react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import Link from 'next/link'
import React, { useState } from 'react'
import * as yup from 'yup'
import axios from 'axios';
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

export interface iInitialValuesProps{
    username: string,
    phoneNumber: string,
    occupation: string,
    password: string,
    confirmPassword: string
}

export default function SignUpForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const router = useRouter()
    const queryParams = useSearchParams()
    const params = queryParams.get('query')
    // let endpointQuery = ""
    // if(params === ""){
    //     endpointQuery === 'client'
    // } else{
    //     endpointQuery === params
    // }
    // console.log(endpointQuery)
    // console.log(params)
    const initialValues = {
        username: '',
        phoneNumber: '',
        occupation: '',
        password: '',
        confirmPassword: ''
    }

    const validationSchema = yup.object().shape({
        username: yup.string().email().required('Username is required'),
        phoneNumber: yup.string().matches(/^\d{11}$/, 'Phone number must be an 11-digit number'),
        occupation: yup.string().required('occupation is required'),
        password: yup.string().required('Password is required'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('Confirm Password is required'),
      });

    const handleSubmit = async (values: iInitialValuesProps) =>{
        const {confirmPassword, ...data} = values
        console.log(data)
        
        try {
            
            const response = await axios.post(`${API_ENDPOINT}/${!params ? 'client' : params}/register`, {
                username: data.username,
                password: data.password,
                phoneNumber: data.phoneNumber,
                occupation: data.occupation
            });
            setIsSubmitted(true)
            router.push('/auth/sign-in')
            console.log('Signup successful:', response.data);
            // Handle successful signup (e.g., redirect to a success page)
          } catch (error) {
            console.error('Signup error:', error);
            
          }
    }  
  return (
    <div>
        
    <Flex
      minH={{md:'100vh'}}
      align={'center'}
      justify={'center'}
      // bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
           <Heading fontSize={'4xl'}>Sign in to your account</Heading>
           <Text fontSize={'lg'} color={'gray.600'}>
             to get further access  ✌️
           </Text>
        </Stack>

        {isSubmitted && (
              <Alert status="success" mt={4} borderRadius="md">
                <AlertIcon />
                Client Account Created successfully successfully!
                <CloseButton
                  position="absolute"
                  right="8px"
                  top="8px"
                  onClick={() => setIsSubmitted(false)}
                />
              </Alert>
            )}
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting,  }) => (
          <Form>
            <Box marginBottom="2">
              <Text>Email</Text>
              <Field as={Input} type="text" name="username" />
              <Box mt={2} color="red.500" fontSize="sm">
                <ErrorMessage name="username" />
              </Box>
            </Box>
            <Box marginBottom="2">
              <Text>Phone Number</Text>
              <Field as={Input} type="text" name="phoneNumber" />
              <Box mt={2} color="red.500" fontSize="sm">
                <ErrorMessage name="phoneNumber" />
              </Box>
            </Box>
            <Box marginBottom="2">
              <Text>Ocuupation</Text>
              <Field as={Input} type="text" name="occupation" />
              <Box mt={2} color="red.500" fontSize="sm">
                <ErrorMessage name="occupation" />
              </Box>
            </Box>
            <Box marginBottom="2">
              <Text>Password</Text>
              <Field as={Input} type="password" name="password" />
              <Box mt={2} color="red.500" fontSize="sm">
                <ErrorMessage name="password" />
              </Box>
              
            </Box>
            <Box marginBottom="2">
              <Text>Confirm Password</Text>
              <Field as={Input} type="confirmPassword" name="confirmPassword" />
              <Box mt={2} color="red.500" fontSize="sm">
                <ErrorMessage name="confirmPassword" />
              </Box>
              
            </Box>
            <button
              type="submit"
              className={`bg-blue-900 w-full hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : 'opacity-100 cursor-pointer'
              }`}
            //   disabled={isSubmitting}
            >
              Login
            </button>
            <Stack>
              <Text align={'center'}>
                Already have an account?{' '}
                <Link
                //   fontWeight={'bold'}
                  href="../auth/sign-in"
                  color={'blue.500'}
                >
                  Sign in
                </Link>
              </Text>
              
              
            </Stack>
            
          </Form>
        )}
      </Formik>
      </Stack>
    </Flex>  
    </div>
  )
}
