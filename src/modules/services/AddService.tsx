import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import {
  ArrayHelpers,
  ErrorMessage,
  Field,
  FieldArray,
  Form,
  Formik,
} from "formik";
import Image from "next/image";
import React from "react";
import Dropzone from "react-dropzone";
import * as Yup from "yup";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

const NewProductForm: React.FC = () => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("title is required"),
    description: Yup.string().required("Description is required"),

    features: Yup.array().of(
      Yup.object().shape({
        title: Yup.string().required("Feature title is required"),
        description: Yup.string().required("Feature description is required"),
      })
    ),
    benefits: Yup.array().of(
      Yup.object().shape({
        title: Yup.string().required("Benefit title is required"),
        description: Yup.string().required("Benefit description is required"),
      })
    ),
  });

  const handleSubmit = async (values: any, { resetForm }: any) => {
    console.log(values);
    const formData = new FormData();
    formData.append("image", values.image[0]);
    formData.append("title", values.title);
    formData.append("description", values.description);

    formData.append("features", JSON.stringify(values.features));
    formData.append("benefits", JSON.stringify(values.benefits));

    const formDataAsObject = Array.from(formData.entries()).reduce(
      (acc, [key, value]) => {
        acc[key] = value;
        return acc;
      },
      {} as { [key: string]: any }
    );

    console.log("FormData as object:", formDataAsObject);

    try {
      await axios.post(
        `${API_ENDPOINT}/service`,

        formData
      );
      // resetForm();
      console.log("Service added successfully");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <Flex mt={8} minH={{ md: "100vh" }} align={"center"} justify={"center"}>
      <Stack w={{ md: "40%", base: "90%" }} p={{ base: 2, md: "unset" }}>
        <Stack align={"center"} mt={8}>
          <Heading fontSize={"4xl"}>Add New Service</Heading>
        </Stack>
        <Formik
          initialValues={{
            image: [],
            title: "",
            description: "",
            price: "",
            unitAvailable: "",
            features: [{ title: "", description: "" }],
            benefits: [{ title: "", description: "" }],
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, setFieldValue }) => (
            <Form encType="multipart/form-data" name="image">
              <Stack gap={4}>
                <FormControl isInvalid={!!errors.title} mt={4}>
                  <FormLabel htmlFor="title">
                    <Heading fontWeight={"medium"} fontSize={"md"}>
                      Product title
                    </Heading>
                  </FormLabel>
                  <Field
                    as={Input}
                    variant={"filled"}
                    type="text"
                    id="title"
                    name="title"
                  />
                  <FormErrorMessage>
                    <ErrorMessage name="title" />
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.description} mt={4}>
                  <FormLabel htmlFor="description">
                    <Heading fontWeight={"medium"} fontSize={"md"}>
                      Description
                    </Heading>
                  </FormLabel>
                  <Field
                    as={Textarea}
                    variant={"filled"}
                    id="description"
                    name="description"
                  />
                  <FormErrorMessage>
                    <ErrorMessage name="description" />
                  </FormErrorMessage>
                </FormControl>

                <FieldArray name="features">
                  {(arrayHelpers: ArrayHelpers) => (
                    <div>
                      <Heading fontWeight={"medium"} mt={6} fontSize={"md"}>
                        Features
                      </Heading>
                      {values.features.map((feature, index) => (
                        <div key={index}>
                          <Flex justify={"flex-end"} mt={6}>
                            <button
                              className="rounded-md	 px-1 py-1 text-red-700 bg-red-50 font-bold"
                              type="button"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              <DeleteIcon pb="1" /> Remove Feature
                            </button>
                          </Flex>
                          <FormControl>
                            <FormLabel mb={2}>Feature Title</FormLabel>
                            <Field
                              as={Input}
                              variant={"filled"}
                              type="text"
                              name={`features[${index}].title`}
                              placeholder="Feature Title"
                            />

                            <Box color={"red"}>
                              <ErrorMessage name={`features[${index}].title`} />
                            </Box>
                          </FormControl>

                          <FormControl>
                            <FormLabel mt={4}>Feature Description</FormLabel>
                            <Field
                              as={Textarea}
                              variant={"filled"}
                              name={`features[${index}].description`}
                              placeholder="Feature Description"
                            />
                            <Box color={"red"}>
                              <ErrorMessage
                                name={`features[${index}].description`}
                              />
                            </Box>
                          </FormControl>
                        </div>
                      ))}

                      <Flex
                        justify="flex-end"
                        direction={{ base: "column", md: "row" }}
                        my={6}
                      >
                        <button
                          className="bg-blue-50 hover:bg-blue-300 text-blue-600 font-bold py-2 md:px-4 rounded"
                          type="button"
                          onClick={() =>
                            arrayHelpers.push({ title: "", description: "" })
                          }
                        >
                          Add Another Feature
                        </button>
                      </Flex>
                    </div>
                  )}
                </FieldArray>

                <FieldArray name="benefits">
                  {(arrayHelpers: ArrayHelpers) => (
                    <div>
                      <Heading fontWeight={"medium"} fontSize={"md"} mt={6}>
                        Benefits
                      </Heading>
                      {values.benefits.map((benefit, index) => (
                        <div key={index}>
                          <Flex justify={"flex-end"} mt={6}>
                            <button
                              className="rounded-md	 px-1 py-1 text-red-700 bg-red-50 font-bold"
                              type="button"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              <DeleteIcon pb="1" /> Remove Benefit
                            </button>
                          </Flex>

                          <FormControl>
                            <FormLabel mb={2}>Benefit Title</FormLabel>
                            <Field
                              as={Input}
                              variant={"filled"}
                              type="text"
                              name={`benefits[${index}].title`}
                              placeholder="Benefit Title"
                            />

                            <Box color={"red"}>
                              <ErrorMessage name={`benefits[${index}].title`} />
                            </Box>
                          </FormControl>

                          <FormControl>
                            <FormLabel mt={4}>Benefit Description</FormLabel>
                            <Field
                              as={Textarea}
                              variant={"filled"}
                              name={`benefits[${index}].description`}
                              placeholder="Benefit Description"
                            />
                            <Box color={"red"}>
                              <ErrorMessage
                                name={`benefits[${index}].description`}
                              />
                            </Box>
                          </FormControl>
                        </div>
                      ))}
                      <Flex
                        justify="flex-end"
                        direction={{ base: "column", md: "row" }}
                        my={6}
                      >
                        <button
                          className="bg-blue-50 hover:bg-blue-300 text-blue-600 font-bold py-2 md:px-4 rounded"
                          type="button"
                          onClick={() =>
                            arrayHelpers.push({ title: "", description: "" })
                          }
                        >
                          Add New Benefit
                        </button>
                      </Flex>
                    </div>
                  )}
                </FieldArray>

                <FormControl
                  mt={4}
                  isInvalid={!!values.image.length && !values.image[0]}
                >
                  <FormLabel htmlFor="image">
                    <Heading fontWeight={"medium"} fontSize={"md"}>
                      Image
                    </Heading>
                  </FormLabel>
                  <Dropzone
                    onDrop={(acceptedFiles) =>
                      setFieldValue("image", acceptedFiles)
                    }
                  >
                    {({ getRootProps, getInputProps }) => (
                      <div
                        {...getRootProps()}
                        style={{ padding: "10px", border: "1px dashed" }}
                      >
                        <input {...getInputProps()} name="image" />
                        <p>Drag n drop an image here, or click to select one</p>
                        {values.image && values.image[0] && (
                          <Image
                            src={URL.createObjectURL(values.image[0])}
                            alt="Product"
                            style={{ maxWidth: "100%" }}
                            width={300}
                            height={300}
                          />
                        )}
                      </div>
                    )}
                  </Dropzone>
                  <FormErrorMessage>
                    <ErrorMessage name="image" />
                  </FormErrorMessage>
                </FormControl>

                <Stack spacing={4} pt={4}>
                  <button
                    type="submit"
                    className="my-4 bg-custom-orange hover:bg-orange-200 text-white font-semibold py-2 px-4 rounded"
                  >
                    Add New Service
                  </button>
                </Stack>
              </Stack>
            </Form>
          )}
        </Formik>
      </Stack>
    </Flex>
  );
};

export default NewProductForm;
