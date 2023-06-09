import { Flex, Heading, Stack, Text } from "@chakra-ui/react";

const Component1 = () => {
  return (
    <Stack
      flexDirection={"column"}
      py={"50px"}
      spacing={{ base: 12, md: 20 }}
      w={"100%"}
      textAlign={"center"}
    >
      <Heading fontSize={"3xl"}>FIND SOMETHING YOU LIKE?</Heading>
      <Flex flexDirection={"column"}>
        <a href="mailto: info@bong-baba.com">
          <Heading fontSize={"1.3rem"}>info@bong-baba.com</Heading>
        </a>
        <Text fontSize={{ base: "12px", md: "14px" }}>
          we usually respond to all queries within 48 business hours.
        </Text>
      </Flex>

      <Flex flexDirection={"column"}>
        <Heading fontSize={"1.3rem"}>Toronto, Ontario</Heading>
        <Text fontSize={{ base: "12px", md: "14px" }}>
          Bong-Baba is currently available in stores across Toronto, Ontario.
        </Text>
      </Flex>
    </Stack>
  );
};

export default Component1;
