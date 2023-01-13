import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    bg: "secondary.400",
    fontFamily: "gilroy",
    borderRadius: "10px",
    _hover: {
      bg: "secondary.500",
      color: "text.500",
    },
  },
  variants: {
    menuButton: {
      bg: "transparent",
      _hover: {
        bg: "main.100",
      },
      _active: {
        bg: "main.200",
        border: "3px solid",
        borderColor: "main.200",
        color: "text.500",
      },
      _focus: {
        border: "3px solid",
        borderColor: "main.200",
        color: "text.500",
      },
    },
  },
  defaultProps: {
    variant: null,
  },
};
