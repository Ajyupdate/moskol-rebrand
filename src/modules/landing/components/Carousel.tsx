import {
  Flex,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
// import { S3 } from "aws-sdk";
import Link from "next/link";
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

export default function Carousel() {
  const [url, setUrl] = React.useState("");

  React.useEffect(() => {
    fetch(`${API_ENDPOINT}/image?key=639d10204b29694ee7683203a6d88b01`)
      .then((res) => res.json())
      .then((data) => {
        setUrl(data);
      })
      .catch((error) => console.log("error:", error));
  }, []);

  const heroImage = `${API_ENDPOINT}/image`;
  // const heroImage = `${API_ENDPOINT}/products/uploads/5992a62a-f92e-4339-a444-731fe6b06477`;

  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={`url(${url})`}
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
        <Stack maxW={"2xl"} ml={{ md: "2%" }} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={800}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
          >
            Affordable Energy
            <br /> and Efficient <br />
            Security Systems
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
