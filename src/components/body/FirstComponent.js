import { Button, Stack, Text, useColorModeValue } from "@chakra-ui/react";

const FirstComponent = () => {
  return (
    <>
      <Stack
        bg={useColorModeValue("gray.900", "gray.100")}
        border={"2px"}
        height={"365px"}
        w={"auto"}
        px={"25px"}
        py={"100px"}
        flexDirection={"row"}
      >
        <Stack flexDirection={"column"} w={"50%"}>
          <Text
            fontSize={"35px"}
            color={useColorModeValue("gray.100", "gray.900")}
          >
            NOW AVAILABLE IN STORES NEAR YOU!
          </Text>
          <Text color={useColorModeValue("gray.400", "gray.700")}>
            CURRENTLY AVAILABLE IN STORES ACROSS TORONTO, ONTARIO. DROP US A
            MAIL FOR BULK QUERIES.{" "}
          </Text>
        </Stack>
        <Stack w={"50%"} alignItems={"center"}>
          <Button
            border={"2px"}
            size={"md"}
            width={"50%"}
            color={useColorModeValue("gray.900", "gray.200")}
            bg={useColorModeValue("gray.100", "gray.900")}
            _hover={{ fontSize: "lg" }}
          >
            <a href=" https://wa.me/917027370501?text=I'm%20interested%20in%20your%20car%20for%20sale">
              REQUEST FOR FREE SAMPLES
            </a>
          </Button>
          <Text color={useColorModeValue("gray.400", "gray.700")} w={"40%"}>
            *Free Sample Request applicable for Retail Stores in Canada only.
            General T&C apply.
          </Text>
        </Stack>
      </Stack>
    </>
  );
};

export default FirstComponent;
