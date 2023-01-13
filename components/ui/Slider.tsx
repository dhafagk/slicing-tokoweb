import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { Flex, Heading, Image, Square, Stack, Text } from "@chakra-ui/react";
import { Rating } from "../";

const TestimonialSlider: React.FC = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={100}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      loop={true}
      centeredSlides={true}
      slideToClickedSlide={true}
      grabCursor={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      style={{ padding: "40px 20px 100px" }}
    >
      {TESTIMONIAL_DATA?.map(({ name, image, text }: TestimonialItem) => (
        <SwiperSlide key={name}>
          <Stack gap="3">
            <Flex>
              <Square size="60px">
                <Image src={image} alt="" />
              </Square>
              <Rating />
            </Flex>
            <Heading color="text.700" fontSize={["md", "lg", "xl", "2xl"]}>
              {name}
            </Heading>
            <Text color="text.400" fontSize="sm">
              {text}
            </Text>
          </Stack>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

interface TestimonialItem {
  name: string;
  image: string;
  text: string;
}

const TESTIMONIAL_DATA: Array<TestimonialItem> = [
  {
    name: "Floyd Miles",
    image: "/assets/user1.png",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    name: "Ronald Richards",
    image: "/assets/user2.png",
    text: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    name: "Savanna Nguyen",
    image: "/assets/user3.png",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    name: "Shinji Hikari",
    image: "/assets/user4.png",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

export default TestimonialSlider;
