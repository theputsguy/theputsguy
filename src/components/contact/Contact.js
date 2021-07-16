import React from "react";
import "./app.css";
import { ChakraProvider, Flex, Input, Textarea, Button } from "@chakra-ui/react";

const Contact = () => {
  const contactReveal = (e) => {
    e.currentTarget.parentNode.classList.toggle("contact-holder-hidden");
  };
  return (
    <div className="contact-holder contact-holder-hidden">
      <div className="contact-header" onClick={contactReveal}>
        <i className="contact-icon far fa-comment"></i>
      </div>
      <form action="https://formspree.io/f/xayadobn" method="POST">
        <ChakraProvider resetCSS>
          <Flex flexDirection="column" alignItems="center" justifyContent="center">
            <Input type="text" name="name" placeholder="Name" mb={5} autoComplete={"off"} />
            <Input
              type="email"
              placeholder="Email"
              width={350}
              mb={5}
              name="_replyto"
              autoComplete={"off"}
            />
            <Textarea
              name="message"
              placeholder="How can we help?"
              backgroundColor="blackAlpha.500"
              mb={5}
            />
            <Button
              variant="outline"
              colorScheme="teal"
              size="md"
              display="flex"
              width={40}
              type="submit"
            >
              Submit
            </Button>
          </Flex>
        </ChakraProvider>
      </form>
    </div>
  );
};

export default Contact;
