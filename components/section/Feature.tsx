import React from "react";
import {
  Box,
  Image,
  VStack,
  Heading,
  Text,
  Flex,
  Grid,
  Card,
  CardBody,
  Stack,
} from "@chakra-ui/react";

const FeatureSection: React.FC = () => {
  return (
    <>
      <Flex py="20" direction="column" gap="32">
        <VStack maxW="xl" mx="auto" textAlign="center" px="5" gap="5">
          <Heading color="text.900" fontSize={["xl", "2xl", "3xl", "4xl"]}>
            Keunggulan kami
          </Heading>
          <Text color="text.400" fontSize={["sm", "md"]}>
            A Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s.
          </Text>
        </VStack>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap="16"
          justifyItems="center"
          px={{ base: 5, md: 20 }}
        >
          <Box>
            <Card maxW="sm" variant="unstyled">
              <CardBody textAlign="center">
                <Image src="/assets/box.png" alt="" mx="auto" />
                <Stack mt="6" spacing="3">
                  <Heading size="md" color="text.900">
                    Kirim ke Berbagai Negara
                  </Heading>
                  <Text color="text.400">
                    A Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </Box>
          <Box>
            <Card maxW="sm" variant="unstyled">
              <CardBody textAlign="center">
                <Image src="/assets/click.png" alt="" mx="auto" />
                <Stack mt="6" spacing="3">
                  <Heading size="md" color="text.900">
                    Mudah Digunakan
                  </Heading>
                  <Text color="text.400">
                    A Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </Box>
          <Box>
            <Card maxW="sm" variant="unstyled">
              <CardBody textAlign="center">
                <Image src="/assets/ceklis.png" alt="" mx="auto" />
                <Stack mt="6" spacing="3">
                  <Heading size="md" color="text.900">
                    Pengiriman Aman
                  </Heading>
                  <Text color="text.400">
                    A Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </Box>
        </Grid>
      </Flex>
    </>
  );
};

export default FeatureSection;
