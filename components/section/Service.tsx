import React from "react";
import { Image, VStack, Heading, Text, Flex } from "@chakra-ui/react";

const ServiceSection: React.FC = () => {
  return (
    <>
      <Flex
        align="center"
        py={{ base: 10, md: 20 }}
        pt={{ base: "inherit", md: 32 }}
        direction={{ base: "column-reverse", md: "row" }}
        gap={{ base: 10, md: 0 }}
      >
        <VStack
          align="left"
          px={{ base: 5, md: 20 }}
          spacing="10"
          flex="1"
          maxW="2xl"
          pb={{ base: 10, md: 0 }}
        >
          <Heading
            color="text.900"
            letterSpacing="0.016em"
            lineHeight="130%"
            fontSize={["xl", "2xl", "3xl", "4xl"]}
          >
            Berbagai Metode Pengiriman
          </Heading>
          <Text color="text.500" fontSize={["sm", "md"]}>
            A Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard.
          </Text>
        </VStack>

        <Flex
          ml="auto"
          position="relative"
          flex={{ md: 1, xl: 0.5 }}
          w="100%"
          maxW="4xl"
        >
          <Image
            src="/assets/kotak.png"
            maxW="100%"
            w="100%"
            position="relative"
            alt=""
          />
          <Image
            src="/assets/ikan2.png"
            position="absolute"
            top="-5%"
            left={{ base: "5%", md: "-22%" }}
            w="100%"
            maxW="50%"
            alt=""
          />
          <Image
            src="/assets/phone2.png"
            position="absolute"
            top={{ base: "-15%", md: "-40%" }}
            w={{ base: "80%", md: "100%" }}
            maxW="100%"
            left={{ base: "30%", md: "-5%" }}
            alt=""
          />
        </Flex>
      </Flex>
      <Flex
        align="center"
        py={{ base: 10, md: 20 }}
        pt={{ base: "inherit", md: 32 }}
        direction={{ base: "column", md: "row" }}
        gap={{ base: 10, md: 0 }}
      >
        <Flex
          mr="auto"
          position="relative"
          flex={{ md: 1, xl: 0.5 }}
          w="100%"
          maxW="4xl"
        >
          <Image
            src="/assets/kotak-inverse.png"
            maxW="100%"
            w="100%"
            position="relative"
            alt=""
          />
          <Image
            src="/assets/phone3.png"
            position="absolute"
            top={{ base: "-20%", md: "-40%" }}
            w={{ base: "80%", md: "100%" }}
            maxW="100%"
            left={{ base: "-10%", md: "-5%" }}
            alt=""
          />
          <Image
            src="/assets/ikan3.png"
            position="absolute"
            top="-5%"
            right={{ base: "5%", md: "-22%" }}
            w="100%"
            maxW="50%"
            alt=""
          />
        </Flex>
        <VStack
          align="left"
          px={{ base: 5, md: 20 }}
          spacing="10"
          flex="1"
          maxW="2xl"
          pb={{ base: 10, md: 0 }}
        >
          <Heading
            color="text.900"
            letterSpacing="0.016em"
            lineHeight="130%"
            fontSize={["xl", "2xl", "3xl", "4xl"]}
          >
            Lacak Status Pengiriman Anda
          </Heading>
          <Text color="text.500" fontSize={["sm", "md"]}>
            A Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown. A Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.
          </Text>
        </VStack>
      </Flex>
      <Flex
        align="center"
        py={{ base: 10, md: 20 }}
        pt={{ base: "inherit", md: 32 }}
        direction={{ base: "column-reverse", md: "row" }}
        gap={{ base: 10, md: 0 }}
      >
        <VStack
          align="left"
          px={{ base: 5, md: 20 }}
          spacing="10"
          flex="1"
          maxW="2xl"
          pb={{ base: 10, md: 0 }}
        >
          <Heading
            color="text.900"
            letterSpacing="0.016em"
            lineHeight="130%"
            fontSize={["xl", "2xl", "3xl", "4xl"]}
          >
            Cek Schedule Pengiriman Anda
          </Heading>
          <Text color="text.500" fontSize={["sm", "md"]}>
            A Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard.
          </Text>
        </VStack>

        <Flex
          ml="auto"
          position="relative"
          flex={{ md: 1, xl: 0.5 }}
          w="100%"
          maxW="4xl"
        >
          <Image
            src="/assets/kotak.png"
            maxW="100%"
            w="100%"
            position="relative"
            alt=""
          />
          <Image
            src="/assets/ikan4.png"
            position="absolute"
            top="10%"
            left={{ base: "5%", md: "-22%" }}
            w="100%"
            maxW="50%"
            alt=""
          />
          <Image
            src="/assets/phone4.png"
            position="absolute"
            top={{ base: "-15%", md: "-40%" }}
            w={{ base: "80%", md: "100%" }}
            maxW="100%"
            left={{ base: "30%", md: "-5%" }}
            alt=""
          />
        </Flex>
      </Flex>
    </>
  );
};

export default ServiceSection;
