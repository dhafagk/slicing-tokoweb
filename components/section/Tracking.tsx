import React from "react";
import {
  VStack,
  Heading,
  Text,
  HStack,
  Input,
  Button,
  Divider,
  Grid,
  useMediaQuery,
} from "@chakra-ui/react";

const TrackingSection: React.FC = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1px 1fr" }}
        backgroundImage="url('/assets/kotak-panjang.png')"
        p="0"
        color="white"
        gap="5"
        mt={{ base: 20, md: 0 }}
        py={{ base: 10, md: 0 }}
      >
        <VStack textAlign="center" gap="5" p={{ base: 5, md: 16 }}>
          <Heading fontSize={["xl", "2xl", "3xl", "4xl"]}>
            Lacak Pengiriman anda
          </Heading>
          <Text fontSize={["sm", "md"]}>
            A Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text{" "}
          </Text>
          <HStack gap="5" w="full">
            <Input placeholder="Lacak pengiriman" />
            <Button w="30%">Lacak</Button>
          </HStack>
        </VStack>

        <Divider orientation={isLargerThan768 ? "vertical" : "horizontal"} />

        <VStack textAlign="center" gap="5" p={{ base: 5, md: 16 }}>
          <Heading fontSize={["xl", "2xl", "3xl", "4xl"]}>
            Cek Tarif Pengiriman Anda
          </Heading>
          <HStack gap="5" w="full">
            <Input placeholder="Origin" />
            <Input placeholder="Destination" />
          </HStack>
          <Button w="full">Check</Button>
        </VStack>
      </Grid>
    </>
  );
};

export default TrackingSection;
