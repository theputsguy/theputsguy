import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import "./app.css";
import "../blog/app.css";

const BlogCreator = () => {
  const editor = useRef(null);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");

  const config = {
    height: "50vh",
    width: "75vw",
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };
  const titleHandler = (e) => {
    e.preventDefault();
    setTitle(e.target.parentElement[0].value);
  };
  const dateHandler = (e) => {
    e.preventDefault();
    setDate(e.target.parentElement[0].value);
  };
  const imgHandler = (e) => {
    e.preventDefault();
    setImageUrl(e.target.parentElement[0].value);
  };

  const submitFinal = async () => {
    let baseObj = {
      image: imageUrl,
      title: title,
      date: date,
      body: content.split("<p>").join("").split("</p>").join(""),
    };

    //get the current object
    const data = await fetch("https://api.jsonbin.io/v3/b/60c04b119fc30168f1ca2abb", {
      method: "GET",
      headers: {
        "X-Master-Key": "$2b$10$TBFDFW8pqBYx5Hjx2VOiBuSJ/mt99xnn.L6OR3X7TJ2S7WcxvXCZO",
      },
    });
    const items = await data.json();
    //add newObj to original data
    const concatData = [baseObj, ...items.record];

    fetch("https://api.jsonbin.io/v3/b/60c04b119fc30168f1ca2abb", {
      method: "PUT",
      body: JSON.stringify(concatData),
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": "$2b$10$TBFDFW8pqBYx5Hjx2VOiBuSJ/mt99xnn.L6OR3X7TJ2S7WcxvXCZO",
      },
    });
  };
  return (
    <>
      <div className="final-submit-bttn">
        <button onClick={submitFinal}>submit final</button>
        <br />
        **Only press Submit when the preview below looks exactly as you'd like**
      </div>
      <div className="blog-creator-container">
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          tabIndex={1} // tabIndex of textarea
          onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          onChange={(newContent) => {}}
        />
        <div className="title-date-image-container">
          <form>
            <input type="text" placeholder="enter title here"></input>
            <button type="submit" onClick={titleHandler}>
              Submit Title
            </button>
          </form>
          <form>
            <input type="text" placeholder="enter date here"></input>
            <button type="submit" onClick={dateHandler}>
              Submit Date
            </button>
          </form>
          <form>
            <input type="text" placeholder="enter img URL"></input>
            <button type="submit" onClick={imgHandler}>
              Submit Image URL
            </button>
          </form>
        </div>
      </div>
      <div className="jodit-preview">
        <div className="full-blog-page">
          <div className="full-page-blog-container">
            <h1>{title}</h1>
            <h2>{date}</h2>
            <div className="full-page-blog-container-image">
              <img alt="" src={imageUrl} />
            </div>
            <h3>
              {content
                .split("<p>")
                .join("")
                .split("</p>")
                .join("")
                .split("<br>")
                .map((section) => {
                  return (
                    <div key={Math.random() * 100}>
                      {section}
                      <br />
                    </div>
                  );
                })}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCreator;
