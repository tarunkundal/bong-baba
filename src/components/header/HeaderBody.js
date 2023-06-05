import { Flex, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { ImFire } from "react-icons/im";
import Image1 from "../assets/Bong-Baba-Branding-01.webp";
import envicon from "../assets/environmenticon.png";

const HeaderBody = () => {
  return (
    <Stack
      flexDirection={"column"}
      ml={"65%"}
      w="400px"
      pt={"7rem"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
      color={useColorModeValue("gray.900", "gray.500")}
    >
      <Image src={Image1} alt="comp 1" mb={"2rem"} />
      <Flex
        width={"278.33px"}
        h={"161.38px"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <ImFire size={"85px"} />

        <Text fontSize={"25px"} mt={"15px"} mb="20px" fontWeight={"700"}>
          SUN-DRIED SMOOTH <br />
          BURNING LEAF WRAPS
        </Text>
      </Flex>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image src={envicon} w="80px" alt="envicon" />
        <Text fontSize={"25px"} mt="15px" fontWeight={"700"}>
          100% ORGANIC <br /> TENDU LEAF WRAPS
        </Text>
      </Flex>
    </Stack>
  );
};

export default HeaderBody;
