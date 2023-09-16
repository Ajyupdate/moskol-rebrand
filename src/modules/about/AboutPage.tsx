import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import MoskolLogo from "../../public/moskolWebLogo.png";
import { CardProps } from "../landing/components/Service";

const AboutPage = () => {
  return (
    <Box p={{ md: 4, base: 2 }} mx={"10%"} mt={8}>
      <Heading mb={4}>About Us</Heading>
      <Center>
        <Image
          src={MoskolLogo}
          alt="Company Logo"
          width={"500"}
          height={"500"}
          //  mt={6}
          //  borderRadius="lg" boxShadow="lg" maxH="200px"
        />
      </Center>

      <Text mt={8}>
        Welcome to Moskol! We are a leading provider of solar energy solutions,
        CCTV surveillance systems, and solar power consultation services. With a
        passion for sustainability and cutting-edge technology, we are committed
        to helping individuals and businesses harness the power of renewable
        energy and enhance security through advanced surveillance systems.
      </Text>

      <Text mt={4}>
        At Moskol, our mission is to create a greener and safer future for our
        customers and the environment. We believe in the potential of solar
        energy to revolutionize the way we power our homes and businesses,
        reducing our carbon footprint and promoting energy independence.
      </Text>

      <Text mt={4}>
        Our team of experienced professionals is dedicated to delivering
        high-quality services tailored to your specific needs. Whether you are
        considering installing solar panels, setting up CCTV cameras for your
        property, or seeking expert advice on solar power solutions, we have got
        you covered.
      </Text>

      <Heading mt={6} size="lg">
        Why Choose Us:
      </Heading>

      <Stack spacing={4} mt={4}>
        <Feature
          title="Expertise"
          description="Our team consists of skilled technicians and engineers with years of experience in the solar energy and surveillance industry. We provide reliable solutions and exceptional service."
        />
        <Feature
          title="Quality Products"
          description="We partner with reputable suppliers to offer top-of-the-line solar panels, CCTV cameras, and related equipment. Quality is our priority, ensuring long-lasting performance."
        />
        <Feature
          title="Customized Solutions"
          description="Every project is unique, and we take the time to understand your requirements and tailor our solutions accordingly. Our personalized approach ensures optimal results."
        />
        <Feature
          title="Comprehensive Services"
          description="From consultation and installation to maintenance and support, we offer end-to-end services to keep your solar energy system and surveillance systems operating smoothly."
        />
        <Feature
          title="Customer Satisfaction"
          description="Our commitment to customer satisfaction drives us to deliver excellence in every aspect of our work. We take pride in building lasting relationships with our clients."
        />
      </Stack>

      <Text mt={6}>
        At Moskol, we are excited to be part of the renewable energy and
        security revolution. Our goal is to empower our customers to make a
        positive impact on the environment while enjoying the benefits of modern
        technology. Whether you are a homeowner, business owner, or institution,
        we have the expertise and passion to turn your vision into reality.
      </Text>

      <Text mt={4}>
        Join us in creating a cleaner, safer, and sustainable future. Contact us
        today for solar energy solutions, CCTV surveillance systems, and solar
        power consultation services. Lets work together to make a difference.
      </Text>
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
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.03)" }}
    >
      <Heading size="md" mb={2}>
        {title}
      </Heading>
      <Text>{description}</Text>
    </Box>
  );
};

export default AboutPage;
