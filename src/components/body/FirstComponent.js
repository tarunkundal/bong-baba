import { Button, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react";

const FirstComponent = () => {
  return (
    <>
      <Stack
        bg={useColorModeValue("gray.900", "gray.100")}
        w={"auto"}
        py={{ base: "3rem", md: "6rem" }}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"space-around"}
        alignItems={"center"}
        spacing={12}
      >
        <Flex
          flexDirection={"column"}
          alignItems={"center"}
          w={{ base: "full", md: "50%" }}
        >
          <Text
            fontSize={{ base: "20px", md: "35px" }}
            color={useColorModeValue("gray.100", "gray.900")}
            fontWeight={"bold"}
          >
            NOW AVAILABLE IN STORES NEAR YOU!
          </Text>
          <Text
            color={useColorModeValue("gray.300", "gray.600")}
            w={{ base: "70%", md: "90%" }}
            fontSize={{ base: "12px" }}
          >
            CURRENTLY AVAILABLE IN STORES ACROSS TORONTO, ONTARIO. DROP US A
            MAIL FOR BULK QUERIES.{" "}
          </Text>
        </Flex>
        <Flex
          w={{ base: "full", md: "50%" }}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Button
            border={"2px"}
            size={"md"}
            width={{ base: "80%", md: "80%" }}
            color={useColorModeValue("gray.900", "gray.200")}
            bg={useColorModeValue("gray.100", "gray.900")}
            _hover={{
              fontSize: "lg",
              width: "85%",
              color: "#F1A238",
            }}
          >
            <a href=" https://wa.me/917027370501?text=I%20am%20interested%20for%20free%20samples">
              REQUEST FOR FREE SAMPLES
            </a>
          </Button>
          <Text color={useColorModeValue("gray.400", "gray.700")} w={"70%"}>
            *Free Sample Request applicable for Retail Stores in Canada only.
            General T&C apply.
          </Text>
        </Flex>
      </Stack>
    </>
  );
};

export default FirstComponent;
