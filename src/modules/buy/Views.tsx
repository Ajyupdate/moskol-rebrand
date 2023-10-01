"use client";

export interface IproductsProps {
  _id: string;
  name: string;
  description: string;
  unitAvailable: number;
  price: number;
  imageUrl?: string;
  features?: string[];
}

import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

const BuyPage = () => {
  const [products, setProducts] = useState<IproductsProps[]>([]);

  useEffect(() => {
    if (API_ENDPOINT) {
      fetch(`${API_ENDPOINT}/products`)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((error) => console.log("error:", error));
    }
  }, []);
  return (
    <Flex
      mt={12}
      direction="column"
      align="center"
      py={8}
      mx={{ base: "10%", md: "unset" }}
    >
      <Heading as="h1" size="xl" mb={8}>
        Buy Solar Energy and CCTV Products
      </Heading>

      <Grid
        maxW={"5xl"}
        templateColumns={{
          md: "repeat(auto-fill, minmax(300px, 1fr))",
          base: "column",
        }}
        gap={8}
      >
        {products.map((product) => (
          <Link href={`buy/${product._id}`} key={product._id}>
            <Box p={4} borderWidth="1px" borderRadius="md" bg="white">
              <Image
                src={`${product ? product.imageUrl : ""}`}
                alt={product.name}
                h="40"
                w={{ base: "100%", md: "100%", lg: "100%" }} // Responsive width
                mb={4}
              />

              <Heading as="h2" size="md" mb={2}>
                {product.name}
              </Heading>

              <Text color="gray.600" mb={4}>
                {product.description}
              </Text>

              <Text fontSize="lg" fontWeight="bold" color="blue.600" mb={2}>
                ${product.price}
              </Text>

              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                Buy Now
              </button>
            </Box>
          </Link>
        ))}
      </Grid>
    </Flex>
  );
};

export default BuyPage;
