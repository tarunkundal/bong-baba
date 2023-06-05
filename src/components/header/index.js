import {
  Box,
  Button,
  Flex,
  Image,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Logo from "../assets/bongbaba.png";
import BackgroundImage from "../assets/background-image.webp";

import {
  BsInstagram,
  BsFillBrightnessHighFill,
  BsFillMoonFill,
} from "react-icons/bs";
import HeaderBody from "./HeaderBody";
import CigaretteComponent from "../body/CigaretteComponent";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      backgroundImage={BackgroundImage}
      backgroundPosition={"center"}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      h={"120vh"}
      w={"100vw"}
      zIndex={-4}
    >
      <Flex
        zIndex={5}
        px={"5rem"}
        py={"1rem"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bg={useColorModeValue("gray.50", "gray.900")}
        opacity={0.6}
        borderBottom={"2px"}
        borderBottomColor={"white"}
        position={"fixed"}
        top={0}
        w={"100%"}
        h={"7rem"}
      >
        <Image
          src={Logo}
          alt="logo"
          w={"12rem"}
          bg={useColorModeValue("gray.100", "gray.900")}
        />

        <CigaretteComponent />

        <Flex alignItems={"center"}>
          <a href="https://www.instagram.com/bongbabacanada">
            <BsInstagram size={"2rem"} cursor={"pointer"} />
          </a>
          <Button onClick={toggleColorMode} ml={"4"}>
            {colorMode === "light" ? (
              <BsFillMoonFill />
            ) : (
              <BsFillBrightnessHighFill />
            )}
          </Button>
        </Flex>
      </Flex>
      <HeaderBody />
    </Box>
  );
};

export default Header;
