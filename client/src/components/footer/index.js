import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.800")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>Copyright © 2023 Bong Baba | Powered by Design Destino Inc.</Text>
        <Stack direction={"row"} spacing={6}>
          <a
            label={"Instagram"}
            href={"https://www.instagram.com/bongbabacanada"}
          >
            <FaInstagram />
          </a>
          <a
            label={"Instagram"}
            href={"https://www.instagram.com/bongbabacanada"}
          >
            <FaTwitter />
          </a>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
