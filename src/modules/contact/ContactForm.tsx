import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
  VStack,
  Wrap,
  WrapItem,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { BsPerson } from "react-icons/bs";
import { MdLocationOn, MdOutlineEmail, MdPhone } from "react-icons/md";
import * as Yup from "yup";
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
export interface IMessageprops {
  name: string;
  email: string;
  message: string;
}
const ContactForm = () => {
  const toast = useToast();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    email: Yup.string().required(),
    message: Yup.string().required(),
  });
  const handleSubmit = (values: IMessageprops, { resetForm }: any) => {
    try {
      axios.post(`${API_ENDPOINT}/message`, values);
      resetForm();
      toast({
        title: "Success",
        description: "Message Sent successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "error sending message",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="full" mt={4} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            {({ handleSubmit, errors }) => (
              <Form onSubmit={handleSubmit}>
                <Box p={4}>
                  <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                    <WrapItem>
                      <Box>
                        <Heading>Contact</Heading>
                        <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                          Fill up the form below to contact
                        </Text>
                        <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                          <VStack pl={0} spacing={3} alignItems="flex-start">
                            <Button
                              size="md"
                              height="48px"
                              width="200px"
                              variant="ghost"
                              color="#DCE2FF"
                              _hover={{ border: "2px solid #1C6FEB" }}
                              leftIcon={
                                <MdPhone color="#1970F1" size="20px" />
                              }>
                              08178555400
                            </Button>
                            <Button
                              size="md"
                              height="48px"
                              width="200px"
                              variant="ghost"
                              color="#DCE2FF"
                              _hover={{ border: "2px solid #1C6FEB" }}
                              leftIcon={
                                <MdOutlineEmail color="#1970F1" size="20px" />
                              }>
                              moskol@gmail.com
                            </Button>
                            <Button
                              size="md"
                              height="48px"
                              width="200px"
                              variant="ghost"
                              color="#DCE2FF"
                              _hover={{ border: "2px solid #1C6FEB" }}
                              leftIcon={
                                <MdLocationOn color="#1970F1" size="20px" />
                              }>
                              Onifade Ota Ogun State
                            </Button>
                          </VStack>
                        </Box>
                        {/* ... */}
                      </Box>
                    </WrapItem>
                    <WrapItem>
                      <Box bg="white" borderRadius="lg">
                        <Box m={8} color="#0B0E3F">
                          <VStack spacing={5}>
                            <Field name="name">
                              {({ field }: any) => (
                                <FormControl
                                  id="name"
                                  isInvalid={!!errors.name}>
                                  <FormLabel>Your Name</FormLabel>
                                  <InputGroup borderColor="#E0E1E7">
                                    <InputLeftElement pointerEvents="none">
                                      <BsPerson color="gray.800" />
                                    </InputLeftElement>
                                    <Input {...field} type="text" size="md" />
                                  </InputGroup>

                                  <FormErrorMessage>
                                    <ErrorMessage name="name" />
                                  </FormErrorMessage>
                                </FormControl>
                              )}
                            </Field>
                            <Field name="email">
                              {({ field }: any) => (
                                <FormControl
                                  id="email"
                                  isInvalid={!!errors.email}>
                                  <FormLabel>Email</FormLabel>
                                  <InputGroup borderColor="#E0E1E7">
                                    <InputLeftElement pointerEvents="none">
                                      <MdOutlineEmail color="gray.800" />
                                    </InputLeftElement>
                                    <Input {...field} type="email" size="md" />
                                  </InputGroup>
                                  <FormErrorMessage>
                                    <ErrorMessage name="email" />
                                  </FormErrorMessage>
                                </FormControl>
                              )}
                            </Field>
                            <Field name="message">
                              {({ field }: any) => (
                                <FormControl
                                  id="message"
                                  isInvalid={!!errors.message}>
                                  <FormLabel>Message</FormLabel>
                                  <Textarea
                                    {...field}
                                    borderColor="gray.300"
                                    _hover={{
                                      borderRadius: "gray.300",
                                    }}
                                    placeholder="message"
                                  />
                                  <FormErrorMessage>
                                    <ErrorMessage name="message" />
                                  </FormErrorMessage>
                                </FormControl>
                              )}
                            </Field>
                            <Button
                              type="submit"
                              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                              Send Message
                            </Button>
                          </VStack>
                        </Box>
                      </Box>
                    </WrapItem>
                  </Wrap>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    </Container>
  );
};

export default ContactForm;
