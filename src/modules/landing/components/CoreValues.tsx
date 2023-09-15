// import {
//   Center,
//   Container,
//   Flex,
//   Grid,
//   GridItem,
//   Heading,
// } from "@chakra-ui/react";
// import Image from "next/image";
// import Accountability from "../../../public/Accountability.png";
// import Reliability from "../../../public/Reliabilty.png";
// import Transparency from "../../../public/Transparency.png";
// import customerSatisfaction from "../../../public/customerSatisfaction.png";

// const Data = [
//   {
//     id: 1,
//     name: "Transparency",
//     imageSrc: Transparency,
//   },
//   {
//     id: 2,
//     name: "Reliability",
//     imageSrc: Reliability,
//   },
//   {
//     id: 3,
//     name: "Accountability",
//     imageSrc: Accountability,
//   },
//   {
//     id: 4,
//     name: "Client Satisfaction",
//     imageSrc: customerSatisfaction,
//   },
// ];

// export default function CoreValues() {
//   return (
//     <Container maxW={"5xl"}>
//       <Center mt={8}>
//         <Heading>Why Choose Us</Heading>
//       </Center>
//       <Grid
//         mt={8}
//         templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
//         gap={6}
//         bg={"white"}>
//         {Data.map((values) => (
//           <GridItem key={values.id} colSpan={{ base: 1, md: 1 }}>
//             <Flex direction="column" align="center" justify="center" mb={1}>
//               <Image width={100} alt={values.name} src={values.imageSrc} />
//             </Flex>
//             <Center>{values.name}</Center>
//           </GridItem>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

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
        templateColumns={{ base: "repeat(1fr, 1fr)", md: "repeat(4, 1fr)" }}
        gap={6}
        bg={"white"}
      >
        {Data.map((values) => (
          <GridItem key={values.id} colSpan={{ base: 1, md: 1 }}>
            <Center py={6}>
              <VStack
                // maxW={"320px"}
                w={"full"}
                // bg={useColorModeValue("white", "gray.900")}
                boxShadow={"md"}
                rounded={"lg"}
                p={6}
                textAlign={"center"}
              >
                <Flex justify={"center"}>
                  <Image
                    src={values.imageSrc}
                    alt="Card Image"
                    width={"50"}
                    // height="200" // Set the height of the image Box
                  />
                </Flex>

                <Heading fontSize={"2xl"} fontFamily={"body"}>
                  {values.name}
                </Heading>

                <Text
                  textAlign={"center"}
                  // color={useColorModeValue("gray.700", "gray.400")}
                >
                  {values.text}
                </Text>
              </VStack>
            </Center>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
