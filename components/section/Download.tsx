import React from "react";
import { Image, VStack, Heading, Text, HStack, Flex } from "@chakra-ui/react";

const DownloadSection: React.FC = () => {
  return (
    <>
      <Flex
        align="center"
        direction="row"
        gap={{ base: 10, md: 0 }}
        backgroundImage="url('/assets/kotak-panjang.png')"
      >
        <VStack
          align="left"
          px={{ base: 5, md: 20 }}
          spacing="10"
          flex="1"
          maxW="2xl"
          py="20px"
        >
          <Heading
            color="white"
            letterSpacing="0.016em"
            lineHeight="130%"
            fontSize={["xl", "2xl", "3xl", "4xl"]}
          >
            Available and Download Anytime!
          </Heading>
          <Text color="white" fontSize={["sm", "md"]} fontFamily="gilroy">
            A Lorem Ipsum is simply dummy text of the printing and
          </Text>
          <HStack spacing="5">
            <Image src="/assets/google-play.png" alt="" maxW="10rem" />
            <Image src="/assets/app-store.png" alt="" maxW="10rem" />
          </HStack>
        </VStack>

        <Flex
          ml="auto"
          position="relative"
          flex="1"
          w="100%"
          maxW="4xl"
          mt="-80px"
          display={{ base: "none", md: "inherit" }}
        >
          <Image
            src="/assets/abang-kurir.png"
            maxW="100%"
            w="md"
            position="relative"
            alt=""
            mx="auto"
          />
        </Flex>
      </Flex>
    </>
  );
};

export default DownloadSection;
