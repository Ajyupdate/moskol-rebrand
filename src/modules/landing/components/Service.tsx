"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IconType } from "react-icons/lib";
import { Url } from "url";
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

export interface CardProps {
  _id?: string;
  description: string;
  imageUrl?: string;
  href?: string | Url | IconType;
  heading?: string;
  title?: string;
  features?: Benefit[];
  benefits?: Benefit[];
}
export interface Benefit {
  title: string;
  description: string;
}
export interface IServiceQueryProps {
  queryNumber: number;
}

export interface IServiceProps {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

export interface ICardprops {
  heading: string;
  imageUrl: string;
  description: string;
  href: string;
}
const Card = ({ heading, description, imageUrl, href }: ICardprops) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden">
      <Link href={href}>
        <Stack p={4} spacing={2}>
          <Flex
            w={"100%"}
            h={"90%"}
            align={"center"}
            justify={"center"}
            color={"white"}>
            <Image
              width={10000}
              height={10000}
              src={`${imageUrl ? `${API_ENDPOINT}/products/${imageUrl}` : ""}`}
              alt="Service"
            />
          </Flex>
          <Box mt={2}>
            <Heading
              fontSize={{ md: "18" }}
              fontWeight={{ md: "semibold", base: "medium" }}>
              {heading}
            </Heading>
            <Text mt={1} fontSize={"sm"}>
              {description}
            </Text>
          </Box>
          <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
            Learn more
          </Button>
        </Stack>
      </Link>
    </Box>
  );
};

export default function Service({ queryNumber }: IServiceQueryProps) {
  const [data, setData] = useState<IServiceProps[]>([]);

  React.useEffect(() => {
    if (API_ENDPOINT) {
      fetch(`${API_ENDPOINT}/service?p=${queryNumber}`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.log("error:", error));
    }
  }, []);

  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Service
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          At Moskol, we are dedicated to transforming the way you harness energy
          through our top-tier solar installation services. As a trusted and
          experienced solar solutions provider, we strive to empower individuals
          and businesses with clean, sustainable, and cost-efficient energy
          solutions.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          {data?.map((service) => (
            <Card
              key={service._id}
              heading={service.title}
              imageUrl={service.imageUrl}
              description={`${service.description
                .split(" ")
                .slice(0, 10)
                .join(" ")}...`}
              href={`/services/${service._id}`}
            />
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
