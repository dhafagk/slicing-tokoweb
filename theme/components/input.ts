import { ComponentStyleConfig } from "@chakra-ui/react";

export const Input: ComponentStyleConfig = {
  baseStyle: {
    field: {
      background: "white",
      color: "text.800",
      borderRadius: "10px",
      fontSize: "md",
      height: 10,
      paddingX: 4,
    },
  },
  defaultProps: {
    variant: null,
    size: null,
  },
};
