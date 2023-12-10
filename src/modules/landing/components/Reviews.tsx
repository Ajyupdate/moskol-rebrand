"use client";
import {
  Avatar,
  Badge,
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BiSolidQuoteRight } from "react-icons/bi";
import { PiParallelogramFill } from "react-icons/pi";
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  index: number;
  _id: string;
  title: string;
  comment: string;
  occupation: string;
  imageUrl: string;
}

export default function Reviews() {
  const [reviews, setReviews] = React.useState<TestimonialCardProps[]>([]);
  const [activeReview, setActiveReview] = React.useState(0);

  const handleIndicatorClick = (index: number) => {
    setActiveReview(index);
  };
  React.useEffect(() => {
    if (API_ENDPOINT) {
      fetch(`${API_ENDPOINT}/reviews`, {
        // method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setReviews(data);
        })
        .catch((error) => console.log("error", error));
    }
  }, []);

  return (
    <Box mx={{ md: 16, base: 4 }} mt={16}>
      <Flex my={6}>
        <Text>
          <PiParallelogramFill className="text-orange-600" />
        </Text>
        <Text>
          <PiParallelogramFill className="text-orange-600" />
        </Text>
        <Text as={"i"} fontSize="xs" fontWeight="semibold" ml={2}>
          Testimonials
        </Text>
      </Flex>

      <Grid templateColumns={["1fr", "1fr 1fr"]} gap={2}>
        <GridItem colSpan={1}>
          <Heading fontSize={"5xl"}>What our client say</Heading>

          <Box
            borderWidth="1px"
            borderColor="gray.300"
            borderRadius="lg"
            p={4}
            mr={{ md: 12 }}
            mt={8}
          >
            {reviews.length === 0 ? (
              <div>
                <Spinner color="red.500" />
              </div>
            ) : (
              <>
                <Text fontSize="lg" fontStyle="italic">
                  {`"${reviews[activeReview]?.comment}"`}
                </Text>
                <Flex mt={4}>
                  <Avatar
                    src={`${
                      reviews[activeReview]?.imageUrl
                        ? `${API_ENDPOINT}/products/${reviews[activeReview].imageUrl}`
                        : ""
                    }`}
                    height={"40px"}
                    width={"40px"}
                    alignSelf={"center"}
                  />
                  <VStack alignItems="flex-start" spacing={1} ml={4}>
                    <Text fontWeight="bold">{reviews[activeReview]?.name}</Text>
                    <Badge colorScheme="orange">
                      {reviews[activeReview]?.occupation}
                    </Badge>
                  </VStack>
                  <Box ml="auto">
                    <Text fontSize="6xl" color="orange.500">
                      <BiSolidQuoteRight />
                    </Text>
                  </Box>
                </Flex>
              </>
            )}
          </Box>

          {reviews ? (
            <HStack mt={4} justify={"center"}>
              {reviews?.map((review, index) => (
                <Box
                  key={review._id}
                  w="8px"
                  h="8px"
                  borderRadius="full"
                  bg={index === activeReview ? "orange.500" : "gray.300"}
                  onClick={() => handleIndicatorClick(index)}
                  cursor="pointer"
                ></Box>
              ))}
            </HStack>
          ) : (
            ""
          )}
        </GridItem>

        <GridItem colSpan={1} mt={{ md: "unset", base: "8" }}>
          <Box>
            <Image
              shadow={"md"}
              src={`${API_ENDPOINT}/products/uploads/5992a62a-f92e-4339-a444-731fe6b06477`}
              alt="Experience Image"
              width="100%"
              height="auto"
            />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
