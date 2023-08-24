// components/NewProductForm.tsx
import {
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
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import React from "react";
import Dropzone from "react-dropzone";
import * as Yup from "yup";
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

const NewProductForm: React.FC = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be positive"),
    unitAvailable: Yup.number()
      .required("Units available is required")
      .integer("Must be a whole number"),
    features: Yup.string().min(1, "At least one feature is required"),
  });

  const handleSubmit = async (values: any, { resetForm }: any) => {
    console.log(values);
    const formData = new FormData();
    formData.append("imageUrl", values.image[0]);
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("price", values.price);
    formData.append("unitAvailable", values.unitAvailable);
    formData.append("features", JSON.stringify(values.features));

    // Convert the FormData to an object to inspect its properties
    const formDataAsObject = Array.from(formData.entries()).reduce(
      (acc, [key, value]) => {
        acc[key] = value;
        return acc;
      },
      {} as { [key: string]: any }
    );

    console.log("FormData as object:", formDataAsObject);

    try {
      await axios.post(`${API_ENDPOINT}/products/`, formData);
      resetForm();
      console.log("Product added successfully");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <Flex minH={{ md: "100vh" }} align={"center"} justify={"center"}>
      <Stack w={{ md: "40%", base: "90%" }} p={{ base: 2, md: "unset" }}>
        <Stack align={"center"} mt={8}>
          <Heading fontSize={"4xl"}>Add Product To Sell</Heading>
        </Stack>
        <Formik
          initialValues={{
            image: [],
            name: "",
            description: "",
            price: "",
            unitAvailable: "",
            features: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          {({ values, errors, setFieldValue }) => (
            <Form>
              <FormControl isInvalid={!!errors.name} mt={4}>
                <FormLabel htmlFor="name">
                  <Heading fontWeight={"medium"} fontSize={"md"}>
                    Product Name
                  </Heading>
                </FormLabel>
                <Field
                  as={Input}
                  variant={"filled"}
                  type="text"
                  id="name"
                  name="name"
                />
                <FormErrorMessage>
                  <ErrorMessage name="name" />
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.description} mt={4}>
                <FormLabel htmlFor="description">
                  <Heading fontWeight={"medium"} fontSize={"md"}>
                    Description
                  </Heading>{" "}
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

              <FormControl isInvalid={!!errors.price} mt={4}>
                <FormLabel htmlFor="price">
                  <Heading fontWeight={"medium"} fontSize={"md"}>
                    Price
                  </Heading>{" "}
                </FormLabel>
                <Field
                  as={Input}
                  variant={"filled"}
                  type="number"
                  id="price"
                  name="price"
                />
                <FormErrorMessage>
                  <ErrorMessage name="price" />
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.unitAvailable} mt={4}>
                <FormLabel htmlFor="unitAvailable">
                  <Heading fontWeight={"medium"} fontSize={"md"}>
                    {" "}
                    Units Available
                  </Heading>
                </FormLabel>
                <Field
                  as={Input}
                  variant={"filled"}
                  type="number"
                  id="unitAvailable"
                  name="unitAvailable"
                />
                <FormErrorMessage>
                  <ErrorMessage name="unitAvailable" />
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.features} mt={4}>
                <FormLabel htmlFor="features">
                  <Heading fontWeight={"medium"} fontSize={"md"}>
                    Features
                  </Heading>{" "}
                </FormLabel>
                <Field
                  variant={"filled"}
                  as={Textarea}
                  id="features"
                  name="features"
                  placeholder="Enter each feature on a new line"
                  format={(value: any) =>
                    Array.isArray(value) ? value.join("\n") : ""
                  } // Convert array to string
                  parse={(value: any) => value.split("\n")} // Convert string back to array
                />
                <FormErrorMessage>
                  <ErrorMessage name="features" />
                </FormErrorMessage>
              </FormControl>

              <FormControl
                mt={4}
                isInvalid={!!values.image.length && !values.image[0]}>
                <FormLabel htmlFor="image">
                  <Heading fontWeight={"medium"} fontSize={"md"}>
                    Image
                  </Heading>
                </FormLabel>
                <Dropzone
                  onDrop={(acceptedFiles) =>
                    setFieldValue("image", acceptedFiles)
                  }>
                  {({ getRootProps, getInputProps }) => (
                    <div
                      {...getRootProps()}
                      style={{ padding: "10px", border: "1px dashed" }}>
                      <input {...getInputProps()} />
                      <p>Drag n drop an image here, or click to select one</p>
                      {values.image && values.image[0] && (
                        <Image
                          src={URL.createObjectURL(values.image[0])}
                          alt="Product"
                          style={{ maxWidth: "100%" }}
                          width={100}
                          height={100}
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
                  className="my-4 bg-custom-orange hover:bg-orange-200 text-white font-semibold py-2 px-4 rounded">
                  Add products
                </button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Stack>
    </Flex>
  );
};

export default NewProductForm;
