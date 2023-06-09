import { Flex, useColorModeValue } from "@chakra-ui/react";
import Component1 from "./Component1";
import ContactForm from "./ContactForm";

const ContactFormComponent = () => {
  return (
    <Flex
      px={{ md: "200px" }}
      justifyContent={"center"}
      alignItems={"center"}
      bg={useColorModeValue("gray.50", "gray.900")}
      flexDirection={{ base: "column", md: "row" }}
      pb={"2.5rem"}
    >
      <Component1 />
      <ContactForm />
    </Flex>
  );
};

export default ContactFormComponent;
