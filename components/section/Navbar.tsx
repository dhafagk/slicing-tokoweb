import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  useColorModeValue,
  useDisclosure,
  Spacer,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const NavbarSection: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg="white"
        color="gray.600"
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 5, md: 20 }}
        align={"center"}
        position="relative"
        zIndex="999"
      >
        <Flex display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"menuButton"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Spacer display={{ base: "initial", md: "none" }} />

        <Link
          fontFamily="title"
          color="secondary.500"
          fontSize="lg"
          _hover={{ textDecoration: "none", color: "secondary.300" }}
        >
          Toko Ikan
        </Link>
        <Spacer display={{ base: "none", md: "initial" }} />

        <Flex display={{ base: "none", md: "flex" }}>
          <DesktopNav />
        </Flex>

        <Spacer />

        <Button
          fontSize={"sm"}
          fontWeight={600}
          fontFamily="gilroy"
          color={"white"}
          bg="main.500"
          _hover={{
            bg: "main.400",
          }}
        >
          Download
        </Button>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const router = useRouter();

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map(({ href, label }: NavItem) => (
        <Box key={label}>
          <Link
            p={2}
            href={href ?? "#"}
            fontSize={"sm"}
            fontWeight={500}
            color={router.pathname === href ? "secondary.500" : "text.900"}
            _hover={{
              textDecoration: "none",
              color: router.pathname === href ? "secondary.300" : "text.500",
            }}
          >
            {label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }: NavItem) => {
  const router = useRouter();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={router.pathname === href ? "secondary.500" : "text.900"}
        >
          {label}
        </Text>
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        ></Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Beranda",
    href: "/",
  },
  {
    label: "Keunggulan",
    href: "#",
  },
  {
    label: "Fitur Aplikasi",
    href: "#",
  },
  {
    label: "Testimonial",
    href: "#",
  },
];

export default NavbarSection;
