import {
  Box,
  Button,
  Flex,
  Image,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Logo from "../assets/BongBabaLogo.png";
import Logo_White from "../assets/BongBabaLogoWhite-09.png";
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
        px={{ base: "1rem", md: "5rem" }}
        py={{ base: ".5rem", md: "1rem" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        bg={useColorModeValue("gray.50", "gray.900")}
        opacity={0.6}
        borderBottom={"2px"}
        borderBottomColor={"white"}
        position={"fixed"}
        top={0}
        w={"100%"}
      >
        <Image
          src={useColorModeValue(Logo, Logo_White)}
          alt="logo"
          w={{ base: "8rem", md: "12rem" }}
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
