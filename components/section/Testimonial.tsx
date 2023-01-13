import React from "react";
import { VStack, Heading, Text, Stack } from "@chakra-ui/react";
import { TestimonialSlider } from "../";

const TestimonialSection: React.FC = () => {
  return (
    <Stack py="20" gap="10">
      <VStack maxW="xl" mx="auto" textAlign="center" px="5" gap="5">
        <Heading color="text.900" fontSize={["xl", "2xl", "3xl", "4xl"]}>
          Testimonial
        </Heading>
        <Text color="text.400" fontSize={["sm", "md"]}>
          A Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        </Text>
      </VStack>

      <TestimonialSlider />
    </Stack>
  );
};

export default TestimonialSection;
