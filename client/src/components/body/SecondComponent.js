import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";

import { BsInstagram } from "react-icons/bs";
import ImageComponent from "./Images";

const SecondComponent = () => {
  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        border={"2px"}
        py="4rem"
      >
        <a href="https://www.instagram.com/bongbabacanada" target="blank">
          <Flex direction={"column"} alignItems={"center"}>
            <BsInstagram size={"5rem"} />
            <Text mt="12px">@BONGBABACANADA</Text>
          </Flex>
        </a>
        {/* Instagram basic dispaly api -- To fetch instagram posts */}
        <Box
          w={{ sm: "90%", md: "70%" }}
          px={"2%"}
          border={"2px"}
          justifyContent={"center"}
        >
          <ImageComponent />
        </Box>
      </Stack>
    </>
  );
};

export default SecondComponent;
