"use client";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { ReactElement } from "react";
import { FaLightbulb, FaShieldAlt } from "react-icons/fa";
import { PiParallelogramFill } from "react-icons/pi";
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

interface FeatureProps {
  text: string;
  heading: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, heading }: FeatureProps) => {
  return (
    <Stack direction={{ md: "row", base: "column" }} spacing={4}>
      <Flex
        w={12}
        h={12}
        align={"center"}
        justify={{ base: "center", md: "center" }}
        rounded={"full"}
        color={"white"}
        bg={"black"}
        p={4}
        ml={{ base: 6, md: "unset" }}
      >
        {icon}
      </Flex>
      <Box>
        <Text fontWeight={"semibold"}>{heading}</Text>
        <Text>{text}</Text>
      </Box>
    </Stack>
  );
};

const WhoWeAre = () => {
  return (
    <Grid
      templateColumns={["1fr", "1fr 1fr"]}
      gap={4}
      mx={{ md: 16, base: "unset" }}
    >
      {/* First GridItem with the image and text */}
      <GridItem colSpan={1} p={{ base: 4, md: "unset" }}>
        <Box position="relative">
          <Image
            shadow={"md"}
            src={`${API_ENDPOINT}/products/uploads/5992a62a-f92e-4339-a444-731fe6b06477`}
            alt="Experience Image"
            width="100%"
            height="auto"
          />

          <div className="absolute top-0 left-0 bg-custom-orange text-white p-6 rounded-full text-center p-4 ml-[-20px] mt-[-20px]">
            17+ <br /> years of <br /> experience
          </div>
        </Box>
      </GridItem>

      {/* Second GridItem with text */}
      <GridItem colSpan={1} position={"relative"} ml={{ base: "unset", md: 4 }}>
        <Box p={4}>
          <Flex>
            <Text>
              <PiParallelogramFill className="text-orange-600" />
            </Text>
            <Text>
              <PiParallelogramFill className="text-orange-600" />
            </Text>
            <Text as={"i"} fontSize="xs" fontWeight="semibold" ml={2}>
              Who We Are
            </Text>
          </Flex>

          <Heading my={4} fontSize={"5xl"}>
            We are Leader in Energy and Security Industry
          </Heading>

          <Text>
            At Moskol, we are dedicated to transforming the way you harness
            energy through our top-tier solar installation services. As a
            trusted and experienced solar solutions provider, we strive to
            empower individuals and businesses with clean, sustainable, and
            cost-efficient energy solutions.
          </Text>
          <Grid gap={8} mt={8} templateColumns={["1fr 1fr", "1fr 1fr"]}>
            <GridItem colSpan={1}>
              <Feature
                icon={<Icon as={FaLightbulb} color={"white"} w={6} h={6} />}
                text={
                  "At Moskol, we are committed to a brighter and more sustainable future. "
                }
                heading={"Clean Energy"}
              />
            </GridItem>

            <GridItem
              colSpan={1}
              // borderLeft={{ md: "2px solid gray", base: "none" }}
            >
              <Feature
                heading={"Safe Security"}
                icon={<Icon as={FaShieldAlt} color={"white"} w={6} h={6} />}
                text={"At Moskol, we prioritize your safety above all else"}
              />
            </GridItem>
          </Grid>
          <Link href={"/about"}>
            <Stack
              justify={{ base: "center", md: "center" }}
              direction={"row"}
              mt={4}
            >
              <button className="p-2 bg-custom-orange rounded-full text-white hover:bg-blue-500">
                More About Us
              </button>
            </Stack>
          </Link>
        </Box>
        <div
          style={{
            position: "absolute",
            bottom: -40,
            right: 0,
            width: 0,
            height: 0,
            borderLeft: "100px solid transparent",
            borderBottom: "100px solid rgb(253, 93, 0)",
          }}
        ></div>
      </GridItem>
    </Grid>
  );
};

export default WhoWeAre;
