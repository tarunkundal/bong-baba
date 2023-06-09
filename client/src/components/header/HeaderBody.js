import { Flex, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";

import BongBabaLogo2 from "../assets/Bong-Baba-Branding-01.webp";
import BongBabaLogo2White from "../assets/BongBabaLogo2White-03.png";
import Environment from "../assets/Environment.png";
import Environment_White from "../assets/EnvironmentWhite.png";
import Fire from "../assets/Fire.png";
import Fire_White from "../assets/FireWhite.png";

const HeaderBody = () => {
  return (
    <Stack
      flexDirection={"column"}
      spacing={6}
      ml={{ base: "auto", md: "65%" }}
      w="400px"
      pt={{ base: "5rem", md: "0" }}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
      color={useColorModeValue("gray.900", "white")}
    >
      <Image
        src={useColorModeValue(BongBabaLogo2, BongBabaLogo2White)}
        alt="logo2"
        w={{ base: "12rem", md: "auto" }}
      />
      <Flex
        width={"278.33px"}
        h={"161.38px"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image
          src={useColorModeValue(Fire, Fire_White)}
          alt="fire-image"
          w={"85px"}
        />

        <Text fontSize={{ base: "20px", md: "25px" }} fontWeight={"700"}>
          SUN-DRIED SMOOTH <br />
          BURNING LEAF WRAPS
        </Text>
      </Flex>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image
          src={useColorModeValue(Environment, Environment_White)}
          w="80px"
          alt="envicon"
        />
        <Text fontSize={{ base: "20px", md: "25px" }} fontWeight={"700"}>
          100% ORGANIC <br /> TENDU LEAF WRAPS
        </Text>
      </Flex>
    </Stack>
  );
};

export default HeaderBody;
