import { extendTheme } from "@chakra-ui/react";
import { Button, Input } from "./components";
import { fonts, colors, breakpoints } from "./foundations";

const theme = extendTheme({
  fonts,
  colors,
  breakpoints,
  components: { Input: Input, Button: Button },
});

export default theme;
