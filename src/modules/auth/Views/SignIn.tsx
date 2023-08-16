import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Input, Text, Box, Flex, useColorModeValue, Stack, Heading, Link, Center } from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import * as yup from 'yup'
import { useSearchParams } from 'next/navigation';
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
const LoginForm = () => {
  const router = useRouter();

  const queryParams = useSearchParams()
  const params = queryParams.get('query')
  
const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});
  const handleSubmit = async (values:any, { setSubmitting, setErrors }:any) => {
    
    try {
      const response = await axios.post(`${API_ENDPOINT}/${!params ? 'client' : params}/login`, values);
      console.log(response)
      const { token } = response.data;

      // Store the token in a cookie
      document.cookie = `token=${token}; Path=/`;

      // Redirect to a protected page or perform other actions

      
        router.back()
        router.back()
      
      
    
    } catch (error) {
      setErrors({ password: 'Invalid credentials' });
    }

    setSubmitting(false);
  };

  return (

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

          {params && <Center><Heading fontSize={'md'} fontWeight={'medium'}>Sign In as Admin</Heading></Center>}
        <Formik initialValues={{ username: '', password: '' }} validationSchema={validationSchema} onSubmit={handleSubmit}>
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
              <Text>Password</Text>
              <Field as={Input} type="password" name="password" />
              <Box mt={2} color="red.500" fontSize="sm">
                <ErrorMessage name="password" />
              </Box>
              
            </Box>
            <button
              type="submit"
              className={`bg-blue-900 w-full hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : 'opacity-100 cursor-pointer'
              }`}
              disabled={isSubmitting}
            >
              Login
            </button>
            <Stack>
              <Text align={'center'}>
                Dont have an account?{' '}
                <Link
                  fontWeight={'bold'}
                  href="../auth/sign-up"
                  color={'blue.500'}
                >
                  Sign up
                </Link>
              </Text> 
              {!params && 
              <Box>
              <Flex justify={'center'} align={'center'}>OR</Flex>
             
                <Text align={'center'}>
                Login as{' '}
                <Link
                  fontWeight={'bold'}
                  href="../auth/sign-in?query=admin"
                  color={'blue.500'}
                >
                  Admin
                </Link>
              </Text>
              </Box>
              }
            </Stack>
            
          </Form>
        )}
      </Formik>
      </Stack>
    </Flex>  
  );
};

export default LoginForm;


