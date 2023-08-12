'use client'

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react'
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MdLocalShipping } from 'react-icons/md'
import { IproductsProps } from './Views';
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

export default function SingleBuyPage() {

    const [product, setProduct] = useState<IproductsProps>()

    const searchParams = useSearchParams();
    const serviceQuery = searchParams.get('id')

   useEffect(() => {
    console.log(serviceQuery)
        if (API_ENDPOINT) {
        fetch(`${API_ENDPOINT}/products/${serviceQuery}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setProduct(data)}
        )
        .catch((error) => console.log('error:', error))
       
        } 
      }, [])
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
              'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>

          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {product?.name}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              ₦{product?.price?.toLocaleString()}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              
              <Text fontSize={'lg'}>
               {product?.description}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue(' #f09e06', ' #f09e06')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
              {product?.unitAvailable} Units Available
              </Text>

             
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue(' #f09e06', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Product Features
              </Text>

              <List spacing={2}>
                {product?.features?.map((feature) => (
                  <ListItem key={feature}>
                  <Text as={'span'} fontWeight={'bold'}>
                   {feature}
                  </Text>{' '}
                  
                </ListItem>
                ))}
                
                
               
              </List>
            </Box>
          </Stack>

          <button
            className="rounded-none w-full mt-8 py-7 text-lg uppercase transition-transform shadow-lg bg-blue-900 text-white dark:bg-gray-50 dark:text-gray-900 hover:translate-y-2"
          >
          Add to cart
        </button>


          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  )
}