"use client";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MoskolLogo from "../public/moskolWebLogo.png";
interface Props {
  children: React.ReactNode;
  href: string;
}

const Links = [
  {
    id: 1,
    name: "About",
    href: "/about",
  },
  {
    id: 2,
    name: "Our Service",
    href: "/services",
  },
  {
    id: 3,
    name: "Contact Us",
    href: "/contact",
  },
];

const NavLink = (props: Props) => {
  const { children, href } = props;
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={href}>
      {children}
    </Box>
  );
};

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link href={"/"}>
                <Image src={MoskolLogo} className="w-20 md:w-40 " alt="" />
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}>
              {Links.map((link) => (
                <NavLink href={link.href} key={link.id}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Link href={"/buy"}>
              <button className="px-2 mr-1 md:mr-4 md:py-1 text-white bg-custom-orange rounded-md shadow-sm hover:bg-orange-800 focus:ring-teal-400 focus:ring-offset-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2">
                Buy Our products
              </button>
            </Link>

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}>
                <Avatar
                  bg="white"
                  name={"Moskol Engineering"}
                  size={"sm"}
                  src={""}
                />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link href={`/auth/sign-in?query=admin`}>
                    Log in as admin
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href={"/auth/sign-in"}>Log in as client</Link>
                </MenuItem>
                <MenuItem>
                  <Link href={"/buy/add"}>Add Product</Link>
                </MenuItem>
                <MenuDivider />
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink href={link.href} key={link.id}>
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
