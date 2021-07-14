import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import { ChakraProvider, Box, Input } from "@chakra-ui/react";

import "./app.css";
import "../blog/app.css";

const BlogCreator = () => {
  const editor = useRef(null);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");

  const config = {
    buttons: "bold",
    height: "50vh",
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };
  const titleHandler = (e) => {
    e.preventDefault();
    setTitle(e.currentTarget.value);
  };
  const dateHandler = (e) => {
    e.preventDefault();
    setDate(e.currentTarget.value);
  };
  const imgHandler = (e) => {
    e.preventDefault();
    setImageUrl(e.currentTarget.value);
  };

  const submitFinal = async () => {
    let baseObj = {
      image: imageUrl,
      title: title,
      date: date,
      body: content.split("<p>").join("").split("</p>").join("<br>").split("<br>"),
    };
    console.log(baseObj);
    //get the current object
    const data = await fetch("https://api.jsonbin.io/v3/b/60e7d9bfa63d2870c1906368", {
      method: "GET",
      headers: {
        "X-Master-Key": "$2b$10$o3piOdvsNGKDQ7TzQ2svnOyhzzNNSseryZ3SdC1.cyGnqlGyfhzkO",
      },
    });
    const items = await data.json();
    //add newObj to original data
    const concatData = [baseObj, ...items?.record?.record];

    fetch("https://api.jsonbin.io/v3/b/60e7d9bfa63d2870c1906368", {
      method: "PUT",
      body: JSON.stringify(concatData),
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": "$2b$10$o3piOdvsNGKDQ7TzQ2svnOyhzzNNSseryZ3SdC1.cyGnqlGyfhzkO",
      },
    }).then((response) => {
      console.log(response.json());
    });
  };

  return (
    <div className="blog-creator-container">
      <div className="final-submit-bttn">
        <button onClick={submitFinal}>submit final</button>
        <br />
        **Only press Submit when the preview below looks exactly as you'd like**
      </div>
      <div className="joddit-creator-container">
        <ChakraProvider resetCSS>
          <Box
            display="flex"
            flexDirection="column"
            p={10}
            width="100%"
            borderRadius="5px"
            backgroundColor="gray.600"
          >
            <Input tabIndex={1} placeholder="Title" onChange={titleHandler} />
            <Input tabIndex={2} placeholder="Date" mt={5} onChange={dateHandler} />
            <Input tabIndex={3} placeholder="Image URL" mt={5} mb={5} onChange={imgHandler} />
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              tabIndex={4} // tabIndex of textarea
              onBlur={(newContent) => {
                setContent(newContent);
              }} // preferred to use only this option to update the content for performance reasons
            />
          </Box>
        </ChakraProvider>
      </div>
      <div className="jodit-preview">
        <div className="full-blog-page">
          <div className="full-page-blog-container">
            <h1>{title}</h1>
            <h2>{date}</h2>
            <div className="full-page-blog-container-image">
              <img alt="" src={imageUrl} />
            </div>
            <h3 dangerouslySetInnerHTML={{ __html: content }}></h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCreator;
