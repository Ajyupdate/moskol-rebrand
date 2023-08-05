'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import { ReactElement, useState } from 'react'
import {
  FcAbout,
  FcAssistant,
  FcCallback,
  FcCollaboration,
  FcDonate,
  FcManager,
} from 'react-icons/fc'
import React from 'react'
import Link from 'next/link'
import { URL, Url } from 'url'
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;


export interface CardProps {
 _id?: string
  description: string
  icon?: ReactElement
  href?: string | Url
  heading?: string
  title?: string
  features?:    Benefit[];
  benefits?:    Benefit[];
}
export interface Benefit {
  title:       string;
  description: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Link href={href || FcCallback}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={useColorModeValue('gray.100', 'gray.700')}>
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
          <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
            Learn more
          </Button>
        </Link>
      </Stack>
    </Box>
  )
}

export interface IServiceProps{
  queryNumber: number
}

export default function Service({queryNumber}:IServiceProps) {
  const [data, setData] = useState<CardProps[]>([])

 
React.useEffect(() => {
  if (API_ENDPOINT) {
  fetch(`${API_ENDPOINT}/services?p=${queryNumber}`)
  .then((res) => res.json())
  .then((data) => setData(data))
  .catch((error) => console.log('error:', error))
 
  } 
}, [])
 
  

  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Service
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
        At Moskol, we are dedicated to transforming the way you harness energy through our top-tier solar installation services. As a trusted and experienced solar solutions provider, we strive to empower individuals and businesses with clean, sustainable, and cost-efficient energy solutions.


        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">

          {data.map((service) => (
            <Card
            key={service._id}
            heading={service.title}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={`${service.description.substring(0,70)}...`}
            href={`/services/${service.title}?id=${service._id}`}
          />
          ))}
          
          {/* <Card
            heading={'Heading'}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />
          <Card
            heading={'Heading'}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />
          <Card
            heading={'Heading'}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          />
          <Card
            heading={'Heading'}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          /> */}
        </Flex>
      </Container>
    </Box>
  )
}