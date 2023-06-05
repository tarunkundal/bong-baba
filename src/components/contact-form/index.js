import { Flex, useColorModeValue } from "@chakra-ui/react";
import Component1 from "./Component1";
import ContactForm from "./ContactForm";

const ContactFormComponent = () => {
  return (
    <Flex
      px={"200px"}
      justifyContent={"center"}
      alignItems={"center"}
      bg={useColorModeValue("gray.50", "gray.900")}
    >
      <Component1 />
      <ContactForm />
    </Flex>
  );
};

export default ContactFormComponent;
