import { Box, Center, Container, Flex, Grid, GridItem, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Accountability from '../../../public/Accountability.png'
import Transparency from '../../../public/Transparency.png'
import customerSatisfaction from '../../../public/customerSatisfaction.png'
import Reliability from '../../../public/Reliabilty.png'

const Data = [
    {
        id: 1,
        name: "Transparency",
        imageSrc: Transparency
    },
    {
        id: 2,
        name: "Reliability",
        imageSrc: Reliability
    },
    {
        id: 3,
        name: "Accountability",
        imageSrc: Accountability
    },
    {
        id: 4,
        name: "Customer Satisfaction",
        imageSrc: customerSatisfaction
    },
];

export default function CoreValues() {
  return (
    <Container maxW={'5xl'}>
      <Center mt={8}>
        <Heading>Why Choose Us</Heading>
      </Center>
      <Grid mt={8} templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={6} bg={'white'}>
        {Data.map((values) => (
          <GridItem key={values.id}>
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
