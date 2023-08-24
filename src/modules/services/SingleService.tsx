// 'use client'

// import {
//   Box,
//   chakra,
//   Container,
//   Stack,
//   Text,
//   Image,
//   Flex,
//   VStack,
//   Button,
//   Heading,
//   SimpleGrid,
//   StackDivider,
//   useColorModeValue,
//   VisuallyHidden,
//   List,
//   ListItem,
// } from '@chakra-ui/react'
// import { MdLocalShipping } from 'react-icons/md'
// import { useRouter, useSearchParams } from 'next/navigation';
// import React, { useState } from 'react';
// import { CardProps } from '../landing/components/Service';
// const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;


// export default function SingleService() {
//     const [data, setData] = useState<CardProps[]>([])
//     const searchParams = useSearchParams();
//     const serviceQuery = searchParams.get('id')

//     React.useEffect(() => {
//         if (API_ENDPOINT) {
//         fetch(`${API_ENDPOINT}/services/${serviceQuery}`)
//         .then((res) => res.json())
//         .then((data) => setData(data))
//         .catch((error) => console.log('error:', error))
       
//         } 
//       }, [])
    
//   return (
//     <Container maxW={'7xl'}>
//       <SimpleGrid
//         columns={{ base: 1, lg: 2 }}
//         spacing={{ base: 8, md: 10 }}
//         py={{ base: 18, md: 24 }}>
//         <Flex>
//           <Image
//             rounded={'md'}
//             alt={'product image'}
//             src={
//               'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
//             }
//             fit={'cover'}
//             align={'center'}
//             w={'100%'}
//             h={{ base: '100%', sm: '400px', lg: '500px' }}
//           />
//         </Flex>
//         <Stack spacing={{ base: 6, md: 10 }}>
//           <Box as={'header'}>
//             <Heading
//               lineHeight={1.1}
//               fontWeight={600}
//               fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
//               Automatic Watch
//             </Heading>
            
//           </Box>

//           <Stack
//             spacing={{ base: 4, sm: 6 }}
//             direction={'column'}
//             divider={
//               <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
//             }>
//             <VStack spacing={{ base: 4, sm: 6 }}>
//               <Text
//                 color={useColorModeValue('gray.500', 'gray.400')}
//                 fontSize={'2xl'}
//                 fontWeight={'300'}>
//                 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
//                 eirmod tempor invidunt ut labore
//               </Text>
//               <Text fontSize={'lg'}>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet
//                 at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis
//                 porro, quae, quisquam quos reprehenderit velit? Natus, totam.
//               </Text>
//             </VStack>
//             <Box>
//               <Text
//                 fontSize={{ base: '16px', lg: '18px' }}
//                 color={useColorModeValue('yellow.500', 'yellow.300')}
//                 fontWeight={'500'}
//                 textTransform={'uppercase'}
//                 mb={'4'}>
//                 Features
//               </Text>

//               <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
//                 <List spacing={2}>
//                   <ListItem>Chronograph</ListItem>
//                   <ListItem>Master Chronometer Certified</ListItem>{' '}
//                   <ListItem>Tachymeter</ListItem>
//                 </List>
//                 <List spacing={2}>
//                   <ListItem>Anti‑magnetic</ListItem>
//                   <ListItem>Chronometer</ListItem>
//                   <ListItem>Small seconds</ListItem>
//                 </List>
//               </SimpleGrid>
//             </Box>
//             <Box>
//               <Text
//                 fontSize={{ base: '16px', lg: '18px' }}
//                 color={useColorModeValue('yellow.500', 'yellow.300')}
//                 fontWeight={'500'}
//                 textTransform={'uppercase'}
//                 mb={'4'}>
//                 Product Details
//               </Text>

//               <List spacing={2}>
//                 <ListItem>
//                   <Text as={'span'} fontWeight={'bold'}>
//                     Between lugs:
//                   </Text>{' '}
//                   20 mm
//                 </ListItem>
//                 <ListItem>
//                   <Text as={'span'} fontWeight={'bold'}>
//                     Bracelet:
//                   </Text>{' '}
//                   leather strap
//                 </ListItem>
//                 <ListItem>
//                   <Text as={'span'} fontWeight={'bold'}>
//                     Case:
//                   </Text>{' '}
//                   Steel
//                 </ListItem>
//                 <ListItem>
//                   <Text as={'span'} fontWeight={'bold'}>
//                     Case diameter:
//                   </Text>{' '}
//                   42 mm
//                 </ListItem>
//                 <ListItem>
//                   <Text as={'span'} fontWeight={'bold'}>
//                     Dial color:
//                   </Text>{' '}
//                   Black
//                 </ListItem>
//                 <ListItem>
//                   <Text as={'span'} fontWeight={'bold'}>
//                     Crystal:
//                   </Text>{' '}
//                   Domed, scratch‑resistant sapphire crystal with anti‑reflective treatment
//                   inside
//                 </ListItem>
//                 <ListItem>
//                   <Text as={'span'} fontWeight={'bold'}>
//                     Water resistance:
//                   </Text>{' '}
//                   5 bar (50 metres / 167 feet){' '}
//                 </ListItem>
//               </List>
//             </Box>
//           </Stack>

//           <Button
//             rounded={'none'}
//             w={'full'}
//             mt={8}
//             size={'lg'}
//             py={'7'}
//             bg={useColorModeValue('gray.900', 'gray.50')}
//             color={useColorModeValue('white', 'gray.900')}
//             textTransform={'uppercase'}
//             _hover={{
//               transform: 'translateY(2px)',
//               boxShadow: 'lg',
//             }}>
//             Add to cart
//           </Button>

//           <Stack direction="row" alignItems="center" justifyContent={'center'}>
//             <MdLocalShipping />
//             <Text>2-3 business days delivery</Text>
//           </Stack>
//         </Stack>
//       </SimpleGrid>
//     </Container>
//   )
// }





'use client'
import React from 'react'

import { Box, Heading, Text, Stack, Image, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { CardProps } from '../landing/components/Service';
import { useSearchParams } from 'next/navigation';
import { useParams } from 'next/navigation'



const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
const SolarInstallationPage = () => {

    const [data, setData] = React.useState<CardProps>()

    const params = useParams()
   

    React.useEffect(() => {
        if (API_ENDPOINT) {
        fetch(`${API_ENDPOINT}/service/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setData(data)}
        )
        .catch((error) => console.log('error:', error))
       
        } 
      }, [])
   

  return (
    <Box p={4} mx={'10%'}>
      <Heading mb={4}>{data?.title}</Heading>
      <Text>
       {data?.description}
      </Text>

      <Image src="https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080" alt="Solar Panel Installation" mt={6} borderRadius="lg" boxShadow="lg" />

      <Heading mt={8} size="lg">
        Key Features
      </Heading>
      <Stack spacing={4} mt={4} direction={{ base: 'column', md: 'row' }}>
        
       {data?.features?.map(feature =>(
            <Feature
            key={feature.title}
            title={feature.title}
            description={feature.description }
        />
       ))}
            

        
        {/* <Feature title="High-Quality Solar Panels" description="We use top-of-the-line solar panels that are durable and built to last." />
        <Feature
          title="Customized Solutions"
          description="Each installation is tailored to your specific energy needs and the layout of your property."
        />
        <Feature
          title="Energy Storage Options"
          description="We can integrate energy storage solutions for uninterrupted power supply."
        /> */}
      </Stack>

      <Heading mt={8} size="lg">
        Benefits
      </Heading>
      <Stack spacing={4} mt={4} direction={{ base: 'column', md: 'row' }}>
        
      {data?.benefits?.map(benefit =>(
            <Benefit
            key={benefit.title}
            title={benefit.title}
            description={benefit.description }
        />
       ))}
        
        {/* <Benefit
          title="Reduce Energy Bills"
          description="Generate your own electricity and reduce your reliance on the grid, leading to lower energy bills."
        /> */}
        {/* <Benefit
          title="Environmentally Friendly"
          description="By using solar energy, you contribute to a cleaner environment and reduce greenhouse gas emissions."
        />
        <Benefit
          title="Energy Independence"
          description="With solar panels, you become less dependent on utility companies and power outages."
        />
        <Benefit title="Increased Property Value" description="Solar installations can increase the value of your property." /> */}
      </Stack>

      <Box mt={8}>
        <Heading size="lg" mb={4}>
          Contact Us
        </Heading>
        <ContactForm />
      </Box>
    </Box>
  );
};

const Feature = ({ title, description }: CardProps) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4} 
      boxShadow="sm"
      bg="white"
      flex="1"
      minW={{ base: '100%', md: '25%' }}
      mb={{ base: 4, md: 0 }}
    >
      <Heading size="md" mb={2}>
        {title}
      </Heading>
      <Text>{description}</Text>
    </Box>
  );
};

const Benefit = ({ title, description }: CardProps) => {
  return (
    <Box p={4} bg="gray.50" borderRadius="md" boxShadow="sm" flex="1" minW={{ base: '100%', md: '25%' }} mb={{ base: 4, md: 0 }}>
      <Heading size="md" mb={2}>
        {title}
      </Heading>
      <Text>{description}</Text>
    </Box>
  );
};

const ContactForm = () => {
  return (
    <form>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input type="text" id="name" required />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input type="email" id="email" required />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea id="message" required />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default SolarInstallationPage;
