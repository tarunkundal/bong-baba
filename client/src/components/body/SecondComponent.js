import { Flex, Stack, Text } from "@chakra-ui/react";
// import axios from "axios";
// import { useEffect } from "react";
import { BsInstagram } from "react-icons/bs";

const SecondComponent = () => {
  // const config = {
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  //     "Content-Type": "application/json",
  //   },
  // };

  // useEffect(() => {
  //   const getPosts = async () => {
  //     try {
  //       const res = await axios.get(
  //         `https://www.instagram.com/bongbabacanada/`,
  //         config
  //       );
  //       const data = await res.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getPosts();
  // });

  return (
    <>
      <Stack justifyContent={"center"} alignItems={"center"} py="4rem">
        <a href="https://www.instagram.com/bongbabacanada" target="blank">
          <Flex direction={"column"} alignItems={"center"}>
            <BsInstagram size={"5rem"} />
            <Text mt="12px">@BONGBABACANADA</Text>
          </Flex>
        </a>
        {/* Instagram basic dispaly api -- To fetch instagram posts */}
      </Stack>
    </>
  );
};

export default SecondComponent;

// profilePage_51850132961"
// profile_id":"51850132961"

//  51850132961
