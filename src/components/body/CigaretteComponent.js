import React, { useState, useEffect } from "react";
import "./CigaretteComponent.css";
import {
  Box,
  Button,
  Center,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import Logo from "../assets/BongBabaLogo.png";
import Logo_White from "../assets/BongBabaLogoWhite-09.png";
import { BsArrowUp } from "react-icons/bs";

const CigaretteComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [rangeValue, setRangeValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setScrollPosition(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const maxScrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const newRangeValue = (scrollPosition / maxScrollHeight) * 100;
    setRangeValue(newRangeValue);
  }, [scrollPosition]);

  const handleBackToTop = () => {
    setRangeValue(0);
    setScrollPosition(0);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const logo = useColorModeValue(Logo, Logo_White);

  return (
    <>
      {rangeValue >= 95 ? (
        <Button
          onClick={handleBackToTop}
          position={"fixed"}
          bottom={"5rem"}
          variant={"solid"}
          border={"2px"}
          right={"3rem"}
        >
          Back To Top
          <BsArrowUp color="red" />
        </Button>
      ) : (
        <Box
          position={"fixed"}
          top={{ base: "50px", md: "90px" }}
          right={"20px"}
          zIndex={999}
          transform={`translateY(${rangeValue * 6}px)`}
          transitionDuration={".2s"}
          transitionTimingFunction={"ease-out"}
        >
          <div className="smoke-container">
            <div className="smoke"></div>
          </div>

          {/* cigreete */}
          <Box
            width="200px"
            height="45px"
            position="relative"
            overflow="hidden"
            display={"flex"}
            justifyContent={"space-between"}
            border={`${rangeValue}`}
            borderLeftColor={"transparent"}
            borderRadius={"5px"}
          >
            <Box />
            {/* cigreete tip */}
            <Box
              height="full"
              border={"4px"}
              borderColor={"transparent"}
              bg={"gray.200"}
              borderRight={"8px"}
              borderRightColor={"red"}
              position="absolute"
              top={0}
              left={0}
              w={`${rangeValue}%`}
            />

            {/* cigrette body logo */}
            <Center>
              <Image
                src={logo}
                alt="logo"
                opacity={rangeValue >= 50 ? ".5" : ".9"}
                width={"5rem"}
                zIndex={55}
              />
            </Center>

            {/* cigrette filter */}
            <Box
              w={"30px"}
              borderLeft={"2px"}
              borderLeftColor={"white"}
              bg={"#d28923"}
            />
          </Box>
        </Box>
      )}
    </>
  );
};

export default CigaretteComponent;
