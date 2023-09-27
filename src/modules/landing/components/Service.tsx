"use client";

import { Box, Flex, Heading, Image, Link } from "@chakra-ui/react";
import axios from "axios";

// import Image from "next/image";
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
  id: string;
  heading: string;
  imageUrl: string;
  description: string;
  href: string;
}

const deleteService = async (id: string) => {
  console.log(id);
  try {
    const response = await axios.delete(`${API_ENDPOINT}/service/${id}`);
    // router.push("/services");
    console.log(response);
  } catch (error) {
    console.log("error", error);
  }
};

const Card = ({ heading, description, imageUrl, href, id }: ICardprops) => {
  return (
    <Link href={href}>
      <Box position="relative">
        <Image
          borderRadius={"md"}
          boxSize={{ md: "250px", base: "100%" }}
          src={imageUrl}
          // src={`${imageUrl ? `${API_ENDPOINT}/products/${imageUrl}` : ""}`}
          alt="service"
        />
        <Heading
          bg={"gray.100"}
          p={2}
          mx={2}
          fontSize={20}
          color={"black"}
          position="absolute"
          top="2%"
        >
          {heading}
        </Heading>
        <button className="m-4 absolute bottom-0 text-sm border border-gray-300 text-white hover:bg-gray-100 hover:text-black py-2 px-4 rounded-full transition duration-300 ease-in-out">
          See Details
        </button>
        {/* <button onClick={() => deleteService(id)}>Delete</button> */}
      </Box>
    </Link>
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
    <Box p={4} mx={{ md: 16, base: 4 }} my={16}>
      <Heading>Our Services</Heading>

      <Box mt={8}>
        <Flex flexWrap="wrap" gridGap={6}>
          {data
            ? data?.map((service) => (
                <Card
                  id={service._id}
                  key={service._id}
                  heading={service.title}
                  imageUrl={service.imageUrl}
                  description={`${service.description
                    .split(" ")
                    .splice(0, 20)
                    .join(" ")}...`}
                  href={`/services/${service._id}`}
                />
              ))
            : ""}
        </Flex>
      </Box>
    </Box>
  );
}
