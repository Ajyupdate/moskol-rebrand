// "use client";

// import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";
// import React from "react";
// // Here we have used react-icons package for the icons
// import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// // And react-slick as our Carousel Lib
// import Slider from "react-slick";
// const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
// // Settings for the slider
// const settings = {
//   dots: true,
//   arrows: false,
//   fade: true,
//   infinite: true,
//   autoplay: true,
//   speed: 500,
//   autoplaySpeed: 5000,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };

// export default function Carousel() {
//   // As we have used custom buttons, we need a reference variable to
//   // change the state
//   const [slider, setSlider] = React.useState<Slider | null>(null);

//   // These are the breakpoints which changes the position of the
//   // buttons as the screen size changes
//   const top = useBreakpointValue({ base: "90%", md: "50%" });
//   const side = useBreakpointValue({ base: "30%", md: "10px" });

//   const Carousel1 = `${API_ENDPOINT}/products/uploads/91e0c3e3-d691-4082-bcbc-b4a18739c4ca`;
//   const Carousel2 = `${API_ENDPOINT}/products/uploads/866eb544-c3c2-4e9e-bd9b-f335e7a9bd6c`;
//   const Carousel3 = `${API_ENDPOINT}/products/uploads/7ab3fdcb-65a2-48ef-a6a6-53a3c22a4557`;
//   // These are the images used in the slide
//   const cards = [Carousel1, Carousel2, Carousel3];

//   return (
//     <Box
//       display={{ md: "block", base: "none" }}
//       position={"relative"}
//       height={"600px"}
//       width={"full"}
//       overflow={"hidden"}>
//       {/* CSS files for react-slick */}
//       <link
//         rel="stylesheet"
//         type="text/css"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
//       />
//       <link
//         rel="stylesheet"
//         type="text/css"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//       />
//       {/* Left Icon */}
//       <IconButton
//         aria-label="left-arrow"
//         colorScheme="messenger"
//         borderRadius="full"
//         position="absolute"
//         left={side}
//         top={top}
//         transform={"translate(0%, -50%)"}
//         zIndex={2}
//         onClick={() => slider?.slickPrev()}>
//         <BiLeftArrowAlt />
//       </IconButton>
//       {/* Right Icon */}
//       <IconButton
//         aria-label="right-arrow"
//         colorScheme="messenger"
//         borderRadius="full"
//         position="absolute"
//         right={side}
//         top={top}
//         transform={"translate(0%, -50%)"}
//         zIndex={2}
//         onClick={() => slider?.slickNext()}>
//         <BiRightArrowAlt />
//       </IconButton>
//       {/* Slider */}
//       <Slider {...settings} ref={(slider) => setSlider(slider)}>
//         {cards.map((url, index) => (
//           <Box
//             key={index}
//             height={{ md: "xl", base: "100vh" }}
//             position="relative"
//             backgroundPosition="center"
//             backgroundRepeat="no-repeat"
//             backgroundSize="cover"
//             backgroundImage={`url(${url})`}
//             width={"full"}
//           />
//         ))}
//       </Slider>
//     </Box>
//   );
// }

"use client";

import {
  Flex,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
export default function Carousel() {
  const heroImage = `${API_ENDPOINT}/products/uploads/5992a62a-f92e-4339-a444-731fe6b06477`;
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={`url(${heroImage})`}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        alignItems={"left"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={800}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
          >
            Affordable Energy and <br /> Efficient Security Systems
          </Text>
          <Text color={"white"}>
            Your trusted partner in sustainable energy solutions and advanced
            security technologies
          </Text>
          <Link href={"/buy"}>
            <Stack direction={"row"}>
              <button className="p-2 bg-custom-orange rounded-full text-white hover:bg-blue-500">
                Show me more
              </button>
            </Stack>
          </Link>
        </Stack>
      </VStack>
    </Flex>
  );
}
