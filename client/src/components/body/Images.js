import { Box, Flex, Image, useColorModeValue } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const data = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMD",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMD",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMD",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMD",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMD",
  },
];

const SampleArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: useColorModeValue("gray", ""),
        paddingTop: "1.5px",
        borderRadius: "full",
      }}
      onClick={onClick}
    />
  );
};

const ImageComponent = () => {
  const settings = {
    infinite: true,
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 2,
          arrows: true,
          infinite: true,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 992,
        settings: "unslick",
      },
    ],
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        {data.map((image) => {
          return (
            <Flex
              my={12}
              width={{ base: "full", md: "33%" }}
              justifyContent={"center"}
              alignItems={"center"}
              display={{ base: "flex", md: "inline-grid" }}
            >
              <Box
                role={"group"}
                p={{ base: 2, md: 4 }}
                maxW={"350px"}
                boxShadow={"xl"}
                rounded={"lg"}
                border={"2px"}
                pos={"relative"}
                zIndex={1}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-around"}
                h="20rem"
                mx={"1%"}
              >
                <Image src={image.src} h={"90%"} />
              </Box>
            </Flex>
          );
        })}
      </Slider>
    </>
  );
};

export default ImageComponent;
