import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Input, Text, Box } from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
//   const router = useRouter();

  const handleSubmit = async (values:any, { setSubmitting, setErrors }:any) => {
    
    try {
      const response = await axios.post('http://localhost:3001/admin/login', values);
      console.log(response)
      const { token } = response.data;

      // Store the token in a cookie
      document.cookie = `token=${token}; Path=/`;

      // Redirect to a protected page or perform other actions
    //   router.push('/dashboard');
    
    
    } catch (error) {
      setErrors({ password: 'Invalid credentials' });
    }

    setSubmitting(false);
  };

  return (
    <Formik initialValues={{ username: '', password: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <Box marginBottom="2">
            <Text>Email</Text>
            <Field as={Input} type="text" name="username" />
          </Box>
          <Box marginBottom="2">
            <Text>Password</Text>
            <Field as={Input} type="password" name="password" />
            <ErrorMessage name="password" component="div" color="red.500" />
          </Box>
          <Button type="submit" isLoading={isSubmitting}>
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
