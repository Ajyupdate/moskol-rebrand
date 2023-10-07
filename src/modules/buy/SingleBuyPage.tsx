"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Spinner,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdLocalShipping } from "react-icons/md";
import { IproductsProps } from "./Views";
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete?: () => void;
  onBuy?: () => void;
  product?: IproductsProps;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onDelete,
}) => {
  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="rgba(0, 0, 0, 0.5)" p={{ base: 4, md: "unset" }} />
        <ModalContent>
          <ModalHeader>Confirm Deletion</ModalHeader>
          <ModalBody>Are you sure you want to delete this product?</ModalBody>
          <ModalFooter>
            <button
              onClick={onDelete}
              type="button"
              className="rounded-md	 px-2 py-2 text-red-700 bg-red-50 ml-2 font-bold"
            >
              Delete
            </button>

            <button onClick={onClose} className="ml-3">
              Cancel
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const BuyModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onBuy,
  product,
}) => {
  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Buy {product?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            There are {product?.unitAvailable} unit of this product available
            for this product. It will cost ${product?.price}. Ready to buy?
          </ModalBody>

          <ModalFooter>
            <button
              className="rounded-md	 px-2 py-2 text-red-700 bg-red-50 ml-2 font-bold"
              onClick={onClose}
            >
              Close
            </button>

            <button
              className="rounded-md	 px-2 py-2 text-green-700 bg-green-50 ml-2 "
              onClick={onBuy}
            >
              Confirm Buy
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default function SingleBuyPage() {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deleteProductId, setDeleteProductId] = useState<string | undefined>(
    ""
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [unitAvailable, setunitAvailable] = useState<number>();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [product, setProduct] = useState<IproductsProps>();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [buyProductAlert, setBuyProductAlert] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const router = useRouter();
  const params = useParams();

  const handleDelete = async (productId: string | undefined) => {
    // Perform delete logic here
    console.log(`Deleting role with ID: ${productId}`);
    setIsDeleteModalOpen(false);
    setDeleteProductId(productId);

    console.log(productId);
    try {
      const response = await axios.delete(
        `${API_ENDPOINT}/products/${productId}`
      );

      if (response.status === 200) {
        toast({
          title: "Success",
          description: "product deleted successfully",
          status: "success",
          duration: 9000,
          isClosable: true,
        });

        router.push("/buy");
      } else {
        console.error("Error:", response.data.message);
        toast({
          title: "Error",
          description: response.data.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Unable to delete, try again later",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    const checkToken = async () => {
      try {
        const jwt = document.cookie.replace(
          /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
          "$1"
        );

        const response = await axios.get(`${API_ENDPOINT}/admin/verify-token`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });

        if (response.status === 201) {
          setIsAdmin(true);
        }
      } catch (error) {
        // console.error("Error checking tokenn:");
      }
    };

    checkToken();
  }, []);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const jwt = document.cookie.replace(
          /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
          "$1"
        );

        const response = await axios.get(
          `${API_ENDPOINT}/client/verify-token`,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );

        if (response.status === 201) {
          setIsClient(true);
        }
      } catch (error) {
        // console.error("Error checking tokenn:");
      }
    };

    checkToken();
  }, []);

  useEffect(() => {
    // if (isAdmin && params.id) {
    if (API_ENDPOINT) {
      fetch(`${API_ENDPOINT}/products/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setProduct(data);
          setunitAvailable(data.unitAvailable);
        })
        .catch((error) => console.log("error:", error));
      // }
    }
  }, []);
  console.log(product?.imageUrl);

  const handleBuyClick = () => {
    if (isClient || isAdmin) {
      setIsBuyModalOpen(true);

      console.log(12);
    } else {
      router.push("/auth/sign-in");
    }
  };

  async function buyFunction() {
    if (unitAvailable !== undefined) {
      try {
        const response = await axios.patch(
          `${API_ENDPOINT}/products/${params.id}`,
          { unitAvailable: unitAvailable - 1 }
        );
        setIsBuyModalOpen(false);
        toast({
          title: "Success",
          description: "product bought successfully",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        router.push("/buy");
      } catch (error) {
        toast({
          title: "Error",
          description: "Unable to Buy, try again later",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    }
  }

  return (
    <Container maxW={"7xl"}>
      <>
        <ConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onDelete={() => handleDelete(deleteProductId)}
        />
      </>

      <>
        <BuyModal
          isOpen={isBuyModalOpen}
          onClose={() => setIsBuyModalOpen(false)}
          product={product}
          onBuy={() => buyFunction()}
        />
      </>

      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={`${product?.imageUrl ? `${product.imageUrl}` : ""}`}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {product?.name}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              ₦{product?.price?.toLocaleString()}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}>{product?.description}</Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue(" #f09e06", " #f09e06")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                {product?.unitAvailable} Units Available
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue(" #f09e06", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Features
              </Text>

              <List spacing={2}>
                {product?.features?.map((feature) => (
                  <ListItem key={feature}>
                    <Text as={"span"} fontWeight={"bold"}>
                      {feature}
                    </Text>{" "}
                  </ListItem>
                ))}
              </List>
            </Box>
          </Stack>

          <Stack>
            <button
              onClick={handleBuyClick}
              className="rounded-none w-full mt-8 py-4 text-lg uppercase transition-transform shadow-lg bg-blue-900 text-white dark:bg-gray-50 dark:text-gray-900 hover:translate-y-2"
            >
              Buy Now
            </button>

            {isAdmin && (
              <Stack>
                <button
                  onClick={() => {
                    setIsSubmitting(true);
                    router.push(`/buy/${product?._id}/edit`);
                  }}
                  className="rounded-none w-full mt-8 py-4 text-lg uppercase transition-transform shadow-lg bg-green-500 text-white dark:bg-gray-50 dark:text-gray-900 hover:translate-y-2"
                >
                  {isSubmitting ? <Spinner /> : "Edit"}
                </button>

                <button
                  onClick={() => {
                    // onOpen();
                    setDeleteProductId(product?._id);
                    setIsDeleteModalOpen(true);
                  }}
                  className="rounded-none w-full mt-8 py-4 text-lg uppercase transition-transform shadow-lg bg-red-500 text-white dark:bg-gray-50 dark:text-gray-900 hover:translate-y-2"
                >
                  Delete
                </button>
              </Stack>
            )}
          </Stack>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
