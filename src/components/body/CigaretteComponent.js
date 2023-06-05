import React, { useState, useEffect } from "react";
import "./CigaretteComponent.css";
import { Button, Center, Image } from "@chakra-ui/react";
import Logo from "../assets/bongbaba.png";
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

  return (
    <>
      {rangeValue >= 90 ? (
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
        <div
          className="cigarette-container"
          style={{ transform: `translateY(${rangeValue * 6}px)` }}
        >
          <div className="smoke-container">
            <div className="smoke"></div>
          </div>

          <div className="cigarette">
            <div
              className="cigarette-tip"
              style={{
                width: `${rangeValue}%`,
              }}
            />
            <Center>
              <Image src={Logo} alt="logo" width={"5rem"} zIndex={55} />
            </Center>
          </div>
        </div>
      )}
    </>
  );
};

export default CigaretteComponent;
