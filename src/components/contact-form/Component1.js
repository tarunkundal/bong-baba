import { Flex, Heading, Stack, Text } from "@chakra-ui/react";

const Component1 = () => {
  return (
    <Stack
      flexDirection={"column"}
      py={"50px"}
      pr={"80px"}
      spacing={14}
      w={"495px"}
    >
      <Heading>FIND SOMETHING YOU LIKE?</Heading>
      <Flex flexDirection={"column"}>
        <a href="mailto: info@bong-baba.com">
          <Heading fontSize={"1.5rem"}>info@bong-baba.com</Heading>
        </a>
        <Text>we usually respond to all queries within 48 business hours.</Text>
      </Flex>

      <Flex flexDirection={"column"}>
        <Heading fontSize={"1.5rem"}>Toronto, Ontario</Heading>
        <Text>
          Bong-Baba is currently available in stores across Toronto, Ontario.
        </Text>
      </Flex>
    </Stack>
  );
};

export default Component1;
