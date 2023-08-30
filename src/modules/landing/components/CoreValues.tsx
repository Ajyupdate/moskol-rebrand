import {
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import Image from "next/image";
import Accountability from "../../../public/Accountability.png";
import Reliability from "../../../public/Reliabilty.png";
import Transparency from "../../../public/Transparency.png";
import customerSatisfaction from "../../../public/customerSatisfaction.png";

const Data = [
  {
    id: 1,
    name: "Transparency",
    imageSrc: Transparency,
  },
  {
    id: 2,
    name: "Reliability",
    imageSrc: Reliability,
  },
  {
    id: 3,
    name: "Accountability",
    imageSrc: Accountability,
  },
  {
    id: 4,
    name: "Client Satisfaction",
    imageSrc: customerSatisfaction,
  },
];

export default function CoreValues() {
  return (
    <Container maxW={"5xl"}>
      <Center mt={8}>
        <Heading>Why Choose Us</Heading>
      </Center>
      <Grid
        mt={8}
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
        gap={6}
        bg={"white"}>
        {Data.map((values) => (
          <GridItem key={values.id} colSpan={{ base: 1, md: 1 }}>
            <Flex direction="column" align="center" justify="center" mb={1}>
              <Image width={100} alt={values.name} src={values.imageSrc} />
            </Flex>
            <Center>{values.name}</Center>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}
