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
import Smoke from "../assets/thin-black-smoke_23-2147734828-fotor-bg-remover-20230608213758.png";
// import Cigar from "../assets/cigar2-removebg-preview.png";
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
          bottom={"5.5rem"}
          variant={"solid"}
          border={"2px"}
          right={{ base: "1rem", md: "2rem" }}
          zIndex={999}
        >
          <BsArrowUp />
        </Button>
      ) : (
        <Box
          position={"fixed"}
          top={{ base: "50px", md: "90px" }}
          right={"20px"}
          zIndex={99}
          transform={`translateY(${rangeValue * 6}px)`}
          transitionDuration={".2s"}
          transitionTimingFunction={"ease-out"}
        >
          {/* smoke */}
          <Image
            src={Smoke}
            w={"5rem"}
            ml={`${rangeValue - 20}%`}
            alt="smoke"
            mt={"-70px"}
          ></Image>
          <Box border={"2px"} ml={`${rangeValue}%`} className="smoke-2" />
          <Box border={"3px"} ml={`${rangeValue}%`} className="smoke-3" />
          <Box border={"3px"} ml={`${rangeValue}%`} className="smoke-4" />
          <Box border={"4px"} ml={`${rangeValue}%`} className="smoke-5" />

          {/* cigreete */}
          <Box
            w="200px"
            height="45px"
            position="relative"
            overflow="hidden"
            display={"flex"}
            justifyContent={"space-between"}
            borderRadius={"5px"}
          >
            <Box />
            {/* cigreete tip */}

            <Box
              height="full"
              borderRight={"8px"}
              borderRightColor={"red"}
              position="absolute"
              top={0}
              left={0}
              w={`${rangeValue}%`}
            ></Box>

            {/* cigrette body logo */}
            <Center>
              <Image
                src={logo}
                alt="logo"
                opacity={rangeValue >= 50 ? "0" : ".7"}
                width={"5rem"}
                zIndex={55}
              />
            </Center>
            {/* cigrette filter */}

            <Box className="filter" w={"10px"} />
          </Box>
        </Box>
      )}
    </>
  );
};

export default CigaretteComponent;
