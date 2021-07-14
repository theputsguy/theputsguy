import React from "react";
import "./app.css";
import { ChakraProvider, Flex, Input, Textarea, Button } from "@chakra-ui/react";

const Contact = () => {
  const contactReveal = (e) => {
    e.currentTarget.parentNode.classList.toggle("contact-holder-hidden");
  };
  return (
    <div>
      <div className="contact-holder contact-holder-hidden">
        <div
          style={{
            color: "white",
            marginBottom: "10px",
            userSelect: "none",
            cursor: "pointer",
            fontWeight: "700",
            display: "flex",
            justifyContent: "flex-start",
            alignSelf: "flex-start",
            alignItems: "center",
            gap: "10px",
          }}
          onClick={contactReveal}
        >
          Contact <i className="far fa-comment"></i>
        </div>
        <form action="https://formspree.io/f/xayadobn" method="POST">
          <ChakraProvider resetCSS>
            <Input type="text" name="name" placeholder="Name" mb={5} autoComplete={"off"} />
            <Input type="email" placeholder="Email" mb={5} name="_replyto" autoComplete={"off"} />
            <Textarea
              name="message"
              placeholder="How can we help?"
              backgroundColor="blackAlpha.500"
              mb={5}
            />
            <Button variant="solid" size="md" display="flex" width={40} type="submit">
              Submit
            </Button>
          </ChakraProvider>
        </form>
      </div>
    </div>
  );
};

export default Contact;
