"use client";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useParams } from "next/navigation";
import React from "react";
import { CardProps } from "../landing/components/Service";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
const SolarInstallationPage = () => {
  const [data, setData] = React.useState<CardProps>();

  const params = useParams();

  React.useEffect(() => {
    if (API_ENDPOINT) {
      fetch(`${API_ENDPOINT}/service/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data);
        })
        .catch((error) => console.log("error:", error));
    }
  }, []);

  return (
    <Box p={4} mx={"10%"}>
      <Heading mb={4}>{data?.title}</Heading>
      <Text>{data?.description}</Text>

      <Image
        src={`${
          data?.imageUrl ? `${API_ENDPOINT}/products/${data?.imageUrl}` : ""
        }`}
        alt={data?.title}
        mt={6}
        borderRadius="lg"
        boxShadow="lg"
      />

      <Heading mt={8} size="lg">
        Key Features
      </Heading>
      <Stack spacing={4} mt={4} direction={{ base: "column", md: "row" }}>
        {data?.features?.map((feature) => (
          <Feature
            key={feature.title}
            title={feature.title}
            description={feature.description}
          />
        ))}

        {/* <Feature title="High-Quality Solar Panels" description="We use top-of-the-line solar panels that are durable and built to last." />
        <Feature
          title="Customized Solutions"
          description="Each installation is tailored to your specific energy needs and the layout of your property."
        />
        <Feature
          title="Energy Storage Options"
          description="We can integrate energy storage solutions for uninterrupted power supply."
        /> */}
      </Stack>

      <Heading mt={8} size="lg">
        Benefits
      </Heading>
      <Stack spacing={4} mt={4} direction={{ base: "column", md: "row" }}>
        {data?.benefits?.map((benefit) => (
          <Benefit
            key={benefit.title}
            title={benefit.title}
            description={benefit.description}
          />
        ))}

        {/* <Benefit
          title="Reduce Energy Bills"
          description="Generate your own electricity and reduce your reliance on the grid, leading to lower energy bills."
        /> */}
        {/* <Benefit
          title="Environmentally Friendly"
          description="By using solar energy, you contribute to a cleaner environment and reduce greenhouse gas emissions."
        />
        <Benefit
          title="Energy Independence"
          description="With solar panels, you become less dependent on utility companies and power outages."
        />
        <Benefit title="Increased Property Value" description="Solar installations can increase the value of your property." /> */}
      </Stack>

      <Box mt={8}>
        <Heading size="lg" mb={4}>
          Contact Us
        </Heading>
        <ContactForm />
      </Box>
    </Box>
  );
};

const Feature = ({ title, description }: CardProps) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      boxShadow="sm"
      bg="white"
      flex="1"
      minW={{ base: "100%", md: "25%" }}
      mb={{ base: 4, md: 0 }}>
      <Heading size="md" mb={2}>
        {title}
      </Heading>
      <Text>{description}</Text>
    </Box>
  );
};

const Benefit = ({ title, description }: CardProps) => {
  return (
    <Box
      p={4}
      bg="gray.50"
      borderRadius="md"
      boxShadow="sm"
      flex="1"
      minW={{ base: "100%", md: "25%" }}
      mb={{ base: 4, md: 0 }}>
      <Heading size="md" mb={2}>
        {title}
      </Heading>
      <Text>{description}</Text>
    </Box>
  );
};

const ContactForm = () => {
  return (
    <form>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input type="text" id="name" required />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input type="email" id="email" required />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea id="message" required />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default SolarInstallationPage;
