



'use client'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Link,
  
} from '@chakra-ui/react'
import Image from 'next/image'
 import MoskolLogo from '../public/moskolWebLogo.png'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/navigation'
interface Props {
  children: React.ReactNode
  href: string
}

const Links = [
  {
    id: 1,
    name: 'About',
    href:'/about'

  }, 
  {
    id:2,
    name: 'Our Service',
    href:'/services'
  }, 
  {
    id: 3,
    name: 'Contact Us',
    href: '/contact'
  }
]

const NavLink = (props: Props) => {

  const { children, href } = props
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
       href={href}
      >
      {children}
    </Box>
  )
}

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
            <Image src={MoskolLogo} className="w-40" alt="" />
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
               
                
                  <NavLink href={link.href} key={link.id}>{link.name}</NavLink>
               
               
               
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
           
           
            <button className="px-2 mr-4 py-1 text-white bg-teal-500 rounded-md shadow-sm hover:bg-teal-600 focus:ring-teal-400 focus:ring-offset-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2">
            
              Buy Our products
            </button>

            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink href={link.href} key={link.id}>{link.name}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      
    </>
  )
}

