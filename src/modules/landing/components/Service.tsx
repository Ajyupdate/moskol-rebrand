// "use client";

// import {
//   Box,
//   Container,
//   Flex,
//   Heading,
//   Image,
//   Stack,
//   Text,
// } from "@chakra-ui/react";

// // import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import { IconType } from "react-icons/lib";
// import { Url } from "url";
// const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

// export interface CardProps {
//   _id?: string;
//   description: string;
//   imageUrl?: string;
//   href?: string | Url | IconType;
//   heading?: string;
//   title?: string;
//   features?: Benefit[];
//   benefits?: Benefit[];
// }
// export interface Benefit {
//   title: string;
//   description: string;
// }
// export interface IServiceQueryProps {
//   queryNumber: number;
// }

// export interface IServiceProps {
//   _id: string;
//   title: string;
//   description: string;
//   imageUrl: string;
//   href: string;
// }

// export interface ICardprops {
//   heading: string;
//   imageUrl: string;
//   description: string;
//   href: string;
// }

// const Card = ({ heading, description, imageUrl, href }: ICardprops) => {
//   return (
//     <Box
//       maxW={{ base: "full", md: "275px" }}
//       w={"full"}
//       borderWidth="1px"
//       borderRadius="lg"
//       overflow="hidden">
//       <Link href={href}>
//         <Stack spacing={2} p={4}>
//           <Flex
//             w={"100%"}
//             h={"275px"} // Set a fixed height for the image container
//             align={"center"}
//             justify={"center"}
//             color={"white"}>
//             <Image
//               // width="100%" // Set a fixed width for the image
//               // height="100%" // Set a fixed height for the image
//               boxSize={"100%"} // Maintain aspect ratio while fitting within width and height
//               src={`${imageUrl ? `${API_ENDPOINT}/products/${imageUrl}` : ""}`}
//               alt="Service"
//             />
//           </Flex>
//           <Box mt={2}>
//             <Heading
//               fontSize={{ md: "18", base: "lg" }}
//               fontWeight={{ md: "semibold", base: "semibold" }}>
//               {heading}
//             </Heading>
//             <Text mt={1} fontSize={"sm"}>
//               {description}
//             </Text>
//           </Box>
//           <Box>
//             <button className="text-blue-500">Learn More</button>
//           </Box>
//         </Stack>
//       </Link>
//     </Box>
//   );
// };

// export default function Service({ queryNumber }: IServiceQueryProps) {
//   const [data, setData] = useState<IServiceProps[]>([]);

//   React.useEffect(() => {
//     if (API_ENDPOINT) {
//       fetch(`${API_ENDPOINT}/service?p=${queryNumber}`)
//         .then((res) => res.json())
//         .then((data) => setData(data))
//         .catch((error) => console.log("error:", error));
//     }
//   }, []);

//   return (
//     <Box p={4}>
//       <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
//         <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
//           Service
//         </Heading>
//         <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
//           At Moskol, we are dedicated to transforming the way you harness energy
//           through our top-tier solar installation services. As a trusted and
//           experienced solar solutions provider, we strive to empower individuals
//           and businesses with clean, sustainable, and cost-efficient energy
//           solutions.
//         </Text>
//       </Stack>

//       <Container maxW={"5xl"} mt={12}>
//         <Flex flexWrap="wrap" gridGap={6} justify="center">
//           {data &&
//             data?.map((service) => (
//               <Card
//                 key={service._id}
//                 heading={service.title}
//                 imageUrl={service.imageUrl}
//                 description={`${service.description
//                   .split(" ")
//                   .splice(0, 20)
//                   .join(" ")}...`}
//                 href={`/services/${service._id}`}
//               />
//             ))}
//         </Flex>
//       </Container>
//     </Box>
//   );
// }

"use client";

import { Box, Flex, Heading, Image, Link } from "@chakra-ui/react";

// import Image from "next/image";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  return (
    // <Box
    //   maxW={{ base: "full", md: "275px" }}
    //   w={"full"}
    //   borderWidth="1px"
    //   borderRadius="lg"
    //   overflow="hidden">
    //   <Link href={href}>
    //     <Stack spacing={2} p={4}>
    //       <Flex
    //         w={"100%"}
    //         h={"275px"} // Set a fixed height for the image container
    //         align={"center"}
    //         justify={"center"}
    //         color={"white"}>
    //         <Image
    //           // width="100%" // Set a fixed width for the image
    //           // height="100%" // Set a fixed height for the image
    //           boxSize={"100%"} // Maintain aspect ratio while fitting within width and height
    //           src={`${imageUrl ? `${API_ENDPOINT}/products/${imageUrl}` : ""}`}
    //           alt="Service"
    //         />
    //       </Flex>
    //       <Box mt={2}>
    //         <Heading
    //           fontSize={{ md: "18", base: "lg" }}
    //           fontWeight={{ md: "semibold", base: "semibold" }}>
    //           {heading}
    //         </Heading>
    //         <Text mt={1} fontSize={"sm"}>
    //           {description}
    //         </Text>
    //       </Box>
    //       <Box>
    //         <button className="text-blue-500">Learn More</button>
    //       </Box>
    //     </Stack>
    //   </Link>
    // </Box>
    <Link href={href}>
      <Box position="relative" onClick={() => router.push(href)}>
        <Image
          borderRadius={"md"}
          boxSize={{ md: "250px", base: "100%" }}
          src={`${imageUrl ? `${API_ENDPOINT}/products/${imageUrl}` : ""}`}
          alt="service"
        />
        <Heading
          p={2}
          fontSize={20}
          color={"white"}
          position="absolute"
          top="10%"
          // left="50%"
          // transform="translate(-50%, -50%)"
        >
          {heading}
        </Heading>
        <button className="m-4 absolute bottom-0 text-sm border border-gray-300 text-white hover:bg-gray-100 hover:text-black py-2 px-4 rounded-full transition duration-300 ease-in-out">
          See Details
        </button>
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
