"use client";
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { PiParallelogramFill } from "react-icons/pi";
import Accountability from "../../../public/Accountability.png";
import Reliability from "../../../public/Reliabilty.png";
import Transparency from "../../../public/Transparency.png";
import customerSatisfaction from "../../../public/customerSatisfaction.png";
const Data = [
  {
    id: 1,
    name: "Transparency",
    imageSrc: Transparency,
    text: " From the initial consultation to the final installation, you can trust us to be open and straightforward about our products, services, and pricing. ",
  },
  {
    id: 2,
    name: "Reliability",
    imageSrc: Reliability,
    text: "You can count on us. Our team of experienced professionals is dedicated to delivering solutions that work seamlessly day in and day out. ",
  },
  {
    id: 3,
    name: "Accountability",
    imageSrc: Accountability,
    text: "Our commitment to accountability means that you're never left in the dark when it comes to performance and upkeep.",
  },
  {
    id: 4,
    name: "Client Satisfaction",
    imageSrc: customerSatisfaction,
    text: "Ultimately, our success is measured by your satisfaction. We prioritize your needs and preferences, tailoring our solutions to  your expectations",
  },
];

export default function CoreValues() {
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
          Who Choose us
        </Text>
      </Flex>

      <Grid gap={8} templateColumns={["1fr", "1fr 1fr"]}>
        <GridItem colSpan={1}>
          <Heading fontSize={"5xl"}>
            Client Satisfaction is our primary focus
          </Heading>
        </GridItem>
        <GridItem colSpan={1}>
          <Text>
            At Moskol, we understand that making decisions about solar and
            security solutions for your home or business is a significant
            investment. That is why we strive to stand out from the rest and
            offer you compelling reasons to choose us as your trusted partner in
            the world of solar and CCTV technology.
          </Text>
        </GridItem>
      </Grid>
      <Grid
        mt={8}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
        gap={6}
        bg={"white"}
      >
        {Data.map((values) => (
          <GridItem
            key={values.id}
            colSpan={{ base: 1, md: 1 }}
            w="100%" // Set width to 100% to make each GridItem equal in width
          >
            <Center h="100%">
              {" "}
              {/* Set height to 100% to make each GridItem equal in height */}
              <VStack
                w={"full"}
                h={"full"} // Set a fixed height for each card container
                boxShadow={"md"}
                rounded={"lg"}
                p={6}
                textAlign={"center"}
                display="flex"
                flexDirection="column" // Ensure content stacks vertically
              >
                <Flex justify={"center"}>
                  <Image src={values.imageSrc} alt="Card Image" width={"50"} />
                </Flex>

                <Heading fontSize={"2xl"} fontFamily={"body"}>
                  {values.name}
                </Heading>

                <Text textAlign={"center"}>{values.text}</Text>
              </VStack>
            </Center>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
