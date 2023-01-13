import React from "react";
import { SimpleGrid } from "@chakra-ui/react";

const FullStar = () => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1_120)">
      <path
        d="M12.67 17.27L18.85 21L17.21 13.97L22.67 9.24L15.48 8.63L12.67 2L9.86001 8.63L2.67001 9.24L8.13001 13.97L6.49001 21L12.67 17.27Z"
        fill="#F8A401"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_120">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(0.670013)"
        />
      </clipPath>
    </defs>
  </svg>
);

const EmptyStar = () => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1_124)">
      <path
        d="M22.67 9.24L15.48 8.62L12.67 2L9.86001 8.63L2.67001 9.24L8.13001 13.97L6.49001 21L12.67 17.27L18.85 21L17.22 13.97L22.67 9.24ZM12.67 15.4L8.91001 17.67L9.91001 13.39L6.59001 10.51L10.97 10.13L12.67 6.1L14.38 10.14L18.76 10.52L15.44 13.4L16.44 17.68L12.67 15.4Z"
        fill="#F8A401"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_124">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(0.670013)"
        />
      </clipPath>
    </defs>
  </svg>
);

const HalfStar = () => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1_123)">
      <path
        d="M22.67 9.24L15.48 8.62L12.67 2L9.86001 8.63L2.67001 9.24L8.13001 13.97L6.49001 21L12.67 17.27L18.85 21L17.22 13.97L22.67 9.24ZM12.67 15.4V6.1L14.38 10.14L18.76 10.52L15.44 13.4L16.44 17.68L12.67 15.4Z"
        fill="#F8A401"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_123">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(0.670013)"
        />
      </clipPath>
    </defs>
  </svg>
);

const Rating: React.FC = () => {
  return (
    <SimpleGrid columns={5} ml="auto">
      <FullStar />
      <FullStar />
      <FullStar />
      <HalfStar />
      <EmptyStar />
    </SimpleGrid>
  );
};

export default Rating;
