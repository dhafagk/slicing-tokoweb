import React from "react";
import {
  Box,
  Image,
  Heading,
  HStack,
  Flex,
  Stack,
  List,
  ListItem,
  Link,
  Center,
  Text,
} from "@chakra-ui/react";

const FooterSection: React.FC = () => {
  return (
    <>
      <Flex
        direction={{ base: "column", md: "row" }}
        px={{ base: 5, md: 20 }}
        gap={{ base: 10, lg: 40 }}
        py="14"
      >
        <Stack width={{ base: "100%", md: "66%" }} gap="5">
          <Image src="/assets/logo.png" alt="" w="150px" />
          <Box fontFamily="gilroy" color="text.600">
            A Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard.
          </Box>
          <HStack gap="2">
            <Image src="/assets/fb.png" alt="" w="8" />
            <Image src="/assets/tw.png" alt="" w="8" />
            <Image src="/assets/ig.png" alt="" w="8" />
          </HStack>
        </Stack>
        <Stack width={{ base: "100%", md: "33%" }} fontFamily="gilroy" gap="6">
          <Heading fontSize={["md", "lg"]}>Menu Bantuan</Heading>
          <List spacing={3} fontSize="md" color="text.500">
            <ListItem>
              <Link href="#"> Keunggulan</Link>
            </ListItem>
            <ListItem>
              <Link href="#"> Fitur Aplikasi</Link>
            </ListItem>
            <ListItem>
              <Link href="#"> Testimoni</Link>
            </ListItem>
          </List>
        </Stack>

        <Stack width={{ base: "100%", md: "33%" }} fontFamily="gilroy" gap="6">
          <Heading fontSize={["md", "lg"]}>Informasi Kontak</Heading>
          <List spacing={3} fontSize="md" color="text.500">
            <ListItem>
              <Link href="#"> 0812-9797-1227</Link>
            </ListItem>
            <ListItem>
              <Link href="#"> 0812-9797-1227</Link>
            </ListItem>
            <ListItem>
              <Link href="#"> Jbgtranshipping@gmail.com</Link>
            </ListItem>
          </List>
        </Stack>
      </Flex>
      <Center py="5">
        <Text fontFamily="gilroy" color="text.500">
          All rights reserved@2022
        </Text>
      </Center>
    </>
  );
};

export default FooterSection;
