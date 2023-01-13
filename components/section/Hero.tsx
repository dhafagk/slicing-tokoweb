import React from "react";
import {
  Image,
  VStack,
  Heading,
  Text,
  HStack,
  Stat,
  StatNumber,
  StatHelpText,
  StatGroup,
  Flex,
} from "@chakra-ui/react";

const HeroSection: React.FC = () => {
  return (
    <>
      <Flex
        align="center"
        py={{ base: 10, md: 20 }}
        direction={{ base: "column", md: "row" }}
        gap={{ base: 10, md: 0 }}
      >
        <VStack
          align="left"
          px={{ base: 5, md: 20 }}
          spacing="10"
          flex={{ base: 1, "1/2xl": 1.5 }}
          maxW="4xl"
        >
          <Heading
            color="text.900"
            letterSpacing="0.016em"
            lineHeight="130%"
            fontSize={["xl", "2xl", "3xl", "4xl"]}
          >
            Kirim berbagai jenis ikan dengan mudah
          </Heading>
          <Text color="text.500" fontSize={["sm", "md"]}>
            A Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s{" "}
          </Text>
          <HStack spacing="5">
            <Image src="/assets/google-play.png" alt="" maxW="10rem" />
            <Image src="/assets/app-store.png" alt="" maxW="10rem" />
          </HStack>
          <StatGroup
            fontFamily="gilroy"
            justifyContent="left"
            gap="10"
            color="text.700"
          >
            <Stat flex="inherit">
              <StatNumber color="main.500">1.9k+</StatNumber>
              <StatHelpText>Active Users</StatHelpText>
            </Stat>
            <Stat flex="inherit">
              <StatNumber color="main.500">20+</StatNumber>
              <StatHelpText>New Features</StatHelpText>
            </Stat>
          </StatGroup>
        </VStack>

        <Flex ml="auto" position="relative" flex="1" w="100%" maxW="4xl">
          <Image
            src="/assets/kotak.png"
            maxW="100%"
            w="100%"
            position="relative"
            alt=""
          />
          <Image
            src="/assets/ikan.png"
            position="absolute"
            top="-5%"
            left={{ base: "5%", md: "-22%" }}
            w="100%"
            maxW="50%"
            alt=""
          />
          <Image
            src="/assets/phone.png"
            position="absolute"
            top="-40%"
            w="100%"
            maxW="100%"
            left={{ base: "15%", md: "-5%" }}
            alt=""
          />
        </Flex>
      </Flex>
    </>
  );
};

export default HeroSection;
