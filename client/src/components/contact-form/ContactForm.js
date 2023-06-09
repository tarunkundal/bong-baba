import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Box,
  Heading,
  Flex,
  FormControl,
  Input,
  FormHelperText,
  Stack,
  Select,
  Textarea,
  Button,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";

const ContactForm = () => {
  const [isCaptchaSuccessful, setIsCaptchaSuccess] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const initialData = {
    fName: "",
    lName: "",
    email: "",
    cEmail: "",
    message: "",
  };
  const [data, setData] = useState(initialData);
  const toast = useToast();

  const onChange = (value) => {
    if (value !== null) {
      setIsCaptchaSuccess(true);
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (!data.fName || !data.email || !data.cEmail || !data.message) {
      toast({
        title: "Please Enter all fields",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    if (!selectedOption) {
      toast({
        title: "Please Select Options",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });

      return;
    }

    if (data.email !== data.cEmail) {
      toast({
        title: "Entered mails don't match",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });

      return;
    }
    if (!isCaptchaSuccessful) {
      toast({
        title: "Please verify CaPatcha",
        status: "error",
        duration: 3000,
        isClosable: true,
      });

      return;
    }

    console.log(data, selectedOption);

    toast({
      title: "Sent message sucessfully",
      description: "We'll revert back to your response as soon as possible.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    setData(initialData);
    setIsCaptchaSuccess(false);
    setSelectedOption("");
  };

  return (
    <Stack bg={useColorModeValue("gray.50", "gray.600")}>
      <form onSubmit={submitFormHandler}>
        <Stack spacing={{ base: 6, md: 12 }} p={{ base: "10px", md: "50px" }}>
          <Heading w="100%" textAlign={"center"} fontWeight="normal">
            Contact Us
          </Heading>
          <Flex>
            <FormControl mr="5%">
              <Input
                id="fName"
                name="fName"
                placeholder="First name"
                value={data.fName}
                onChange={handleChange}
                borderColor={useColorModeValue("gray.300", "white")}
              />
            </FormControl>

            <FormControl>
              <Input
                id="lName"
                name="lName"
                placeholder="Last name"
                value={data.lName}
                onChange={handleChange}
                borderColor={useColorModeValue("gray.300", "white")}
              />
            </FormControl>
          </Flex>

          <Flex>
            <FormControl mt="2%" mr="5%">
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Enter Email"
                value={data.email}
                onChange={handleChange}
                borderColor={useColorModeValue("gray.300", "white")}
              />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl mt="2%">
              <Input
                id="confirm-email"
                type="cEmail"
                name="cEmail"
                placeholder="Confirm Email"
                value={data.cEmail}
                onChange={handleChange}
                borderColor={useColorModeValue("gray.300", "white")}
              />
            </FormControl>
          </Flex>

          <Box>
            <FormControl>
              <Select
                placeholder="Select option"
                name="selectedOption"
                variant={"filled"}
                borderColor={useColorModeValue("gray.300", "white")}
                onChange={(e) =>
                  setSelectedOption(
                    e.target.options[e.target.selectedIndex].text
                  )
                }
              >
                <option value="option1">
                  General Queries / Collaboration Request
                </option>
                <option value="option2">I want to place a Bulk Order </option>
                <option value="option3">
                  I want to follow up an Existing Order
                </option>
                <option value="option4">Request for free Samples </option>
              </Select>
              <FormHelperText>
                *Free Sample Request is applicable for Retail Stores in Canada
                only. Please mention your Store Name, Location along with
                Contact Number while placing a request for Free Samples. General
                T&C apply.
              </FormHelperText>
            </FormControl>
          </Box>

          <Textarea
            size="md"
            h="10rem"
            id="message"
            name="message"
            placeholder="Message"
            value={data.message}
            onChange={handleChange}
            borderColor={useColorModeValue("gray.300", "white")}
          />

          <ReCAPTCHA
            sitekey={"6Lfpp2cmAAAAAAVUC4NtOWjf3FR5O3m7lLus1VUx"}
            onChange={onChange}
          />

          <Button
            variant={"solid"}
            type="submit"
            disabled={!isCaptchaSuccessful}
          >
            Send Message
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default ContactForm;

// sitekey  6Lfpp2cmAAAAAAVUC4NtOWjf3FR5O3m7lLus1VUx
// secratekey 6Lfpp2cmAAAAAO-O8swGNyWnL-JGHK9PpkQdInsM
