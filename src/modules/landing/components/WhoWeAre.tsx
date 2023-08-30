"use client";

import {
  Center,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { MdPeopleOutline, MdVerifiedUser } from "react-icons/md";
// import Image from "next/image";
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function WhoWeAre() {
  return (
    <Container maxW={"5xl"} py={12} px={{ base: 8, md: "unset" }}>
      <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
        <Center>Who We Are</Center>
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={8}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}>
            Our Story
          </Text>
          <Heading fontSize={{ base: "xl", sm: "4xl" }} fontWeight={"semibold"}>
            An energy and high security company
          </Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            your trusted partner in sustainable energy solutions and advanced
            security technologies
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }>
            <Feature
              icon={
                <Icon as={MdVerifiedUser} color={"yellow.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Quality and Authencity"}
            />
            <Feature
              icon={
                <Icon as={FaRegLightbulb} color={"green.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Expertise and Reliability"}
            />
            <Feature
              icon={
                <Icon as={MdPeopleOutline} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Customer-Centric Approach"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={`${API_ENDPOINT}/products/uploads/5992a62a-f92e-4339-a444-731fe6b06477`}
            objectFit={"cover"}
          />
          {/* <Image objectFit={"cover"} alt={"consultation"} src={WhoWeArePic} /> */}
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
