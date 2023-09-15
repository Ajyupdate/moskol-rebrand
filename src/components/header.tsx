// "use client";

// import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
// import {
//   Avatar,
//   Box,
//   Button,
//   Flex,
//   HStack,
//   IconButton,
//   Menu,
//   MenuButton,
//   MenuDivider,
//   MenuItem,
//   MenuList,
//   Stack,
//   useColorModeValue,
//   useDisclosure,
// } from "@chakra-ui/react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import MoskolLogo from "../public/moskolWebLogo.png";
// interface Props {
//   children: React.ReactNode;
//   href: string;
// }

// const Links = [
//   {
//     id: 1,
//     name: "About",
//     href: "/about",
//   },
//   {
//     id: 2,
//     name: "Our Service",
//     href: "/services",
//   },
//   {
//     id: 3,
//     name: "Contact Us",
//     href: "/contact",
//   },
// ];

// const NavLink = (props: Props) => {
//   const { children, href } = props;
//   return (
//     <Box
//       as="a"
//       px={2}
//       py={1}
//       rounded={"md"}
//       _hover={{
//         textDecoration: "none",
//         bg: useColorModeValue("gray.200", "gray.700"),
//       }}
//       href={href}>
//       {children}
//     </Box>
//   );
// };

// export default function Header() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const router = useRouter();
//   return (
//     <>
//       <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
//         <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
//           <IconButton
//             size={"md"}
//             icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//             aria-label={"Open Menu"}
//             display={{ md: "none" }}
//             onClick={isOpen ? onClose : onOpen}
//           />
//           <HStack spacing={8} alignItems={"center"}>
//             <Box>
//               <Link href={"/"}>
//                 <Image src={MoskolLogo} className="w-20 md:w-40 " alt="" />
//               </Link>
//             </Box>
//             <HStack
//               as={"nav"}
//               spacing={4}
//               display={{ base: "none", md: "flex" }}>
//               {Links.map((link) => (
//                 <NavLink href={link.href} key={link.id}>
//                   {link.name}
//                 </NavLink>
//               ))}
//             </HStack>
//           </HStack>
//           <Flex alignItems={"center"}>
//             <Link href={"/buy"}>
//               <button className="px-2 mr-1 md:mr-4 md:py-1 text-white bg-custom-orange rounded-md  hover:bg-orange-500 ">
//                 Buy Our products
//               </button>
//             </Link>

//             <Menu>
//               <MenuButton
//                 as={Button}
//                 rounded={"full"}
//                 variant={"link"}
//                 cursor={"pointer"}
//                 minW={0}>
//                 <Avatar
//                   bg="white"
//                   name={"Moskol Engineering"}
//                   size={"sm"}
//                   src={""}
//                 />
//               </MenuButton>
//               <MenuList>
//                 <MenuItem>
//                   <Link href={`/auth/sign-in?query=admin`}>
//                     Log in as admin
//                   </Link>
//                 </MenuItem>
//                 <MenuItem>
//                   <Link href={"/auth/sign-in"}>Log in as client</Link>
//                 </MenuItem>
//                 <MenuItem>
//                   <Link href={"/buy/add"}>Add Product</Link>
//                 </MenuItem>
//                 <MenuItem>
//                   <Link href={"/service/add-service"}>Add Service</Link>
//                 </MenuItem>
//                 <MenuDivider />
//                 <MenuItem>Logout</MenuItem>
//               </MenuList>
//             </Menu>
//           </Flex>
//         </Flex>

//         {isOpen ? (
//           <Box pb={4} display={{ md: "none" }}>
//             <Stack as={"nav"} spacing={4}>
//               {Links.map((link) => (
//                 <NavLink href={link.href} key={link.id}>
//                   {link.name}
//                 </NavLink>
//               ))}
//             </Stack>
//           </Box>
//         ) : null}
//       </Box>
//     </>
//   );
// }

// "use client";

// import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
// import {
//   Avatar,
//   Box,
//   Button,
//   Flex,
//   HStack,
//   IconButton,
//   Menu,
//   MenuButton,
//   MenuDivider,
//   MenuItem,
//   MenuList,
//   Stack,
//   useColorModeValue,
//   useDisclosure,
// } from "@chakra-ui/react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import MoskolLogo from "../public/moskolWebLogo.png";
// interface Props {
//   children: React.ReactNode;
//   href: string;
// }

// const Links = [
//   {
//     id: 1,
//     name: "About",
//     href: "/about",
//   },
//   {
//     id: 2,
//     name: "Our Service",
//     href: "/services",
//   },
//   {
//     id: 3,
//     name: "Contact Us",
//     href: "/contact",
//   },
// ];

// const NavLink = (props: Props) => {
//   const { children, href } = props;
//   return (
//     <Box
//       as="a"
//       px={2}
//       py={1}
//       rounded={"md"}
//       _hover={{
//         textDecoration: "none",
//         bg: useColorModeValue("gray.200", "gray.700"),
//       }}
//       href={href}
//     >
//       {children}
//     </Box>
//   );
// };

"use client";

import {
  Avatar,
  Button,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          {/* <Image src={MoskolLogo} className="h-8 mr-3" alt="Flowbite Logo" /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Moskol
          </span>
        </a>
        <div className="flex md:order-2">
          {/* <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
          </button> */}

          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar
                color={"white"}
                bg="orange"
                name={"Moskol Engineering"}
                size={"sm"}
                src={""}
              />
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link href={`/auth/sign-in?query=admin`}>Log in as admin</Link>
              </MenuItem>
              <MenuItem>
                <Link href={"/auth/sign-in"}>Log in as client</Link>
              </MenuItem>
              <MenuItem>
                <Link href={"/buy/add"}>Add Product</Link>
              </MenuItem>
              <MenuItem>
                <Link href={"/services/add-service"}>Add Service</Link>
              </MenuItem>
              <MenuDivider />
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
          <button
            onClick={isOpen ? onClose : onOpen}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`items-center justify-between hidden  w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/about"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/buy"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Buy Products
              </a>
            </li>
          </ul>
        </div>

        {isOpen && (
          <div
            className={`items-center justify-between   w-full md:hidden md:w-auto md:order-1"
          id="navbar-sticky`}
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/buy"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Buy Products
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
