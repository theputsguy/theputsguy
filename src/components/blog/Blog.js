import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import "./app.css";
import Legal from "../legal/Legal";
import firebase from "../../firebase";
import BlogEntry from "./BlogEntry";

const Blog = ({ setSelectedLink }) => {
  const [items, setItems] = useState([
    { title: "Loading", imgUrl: "", body: "", id: "" },
    { title: "Loading", imgUrl: "", body: "", id: "" },
    { title: "Loading", imgUrl: "", body: "", id: "" },
    { title: "Loading", imgUrl: "", body: "", id: "" },
    { title: "Loading", imgUrl: "", body: "", id: "" },
    { title: "Loading", imgUrl: "", body: "", id: "" },
    { title: "Loading", imgUrl: "", body: "", id: "" },
  ]);

  useEffect(() => {
    const fetchItems = async () => {
      const dates = [
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december",
      ];
      const data = await firebase
        .firestore()
        .collection("theputsguy_blog-entries")
        .get()
        .then((data) =>
          data.docs
            .map((doc) => doc.data())
            .sort(
              (item1, item2) =>
                dates.indexOf(item2.date.split(" ")[0].toLowerCase()) -
                  dates.indexOf(item1.date.split(" ")[0].toLowerCase()) &&
                dates.indexOf(item2.date.split(" ")[1].split(",")[0]) -
                  dates.indexOf(item1.date.split(" ")[1].split(",")[0])
            )
        );
      setItems(data);
    };
    fetchItems();
    window.scroll(0, 0);
    setSelectedLink(1);
  }, [setSelectedLink]);
  return (
    <>
      <div className="blog-page">
        <div className="blog-container">
          {items.map((entry) => {
            return (
              <Fade>
                <BlogEntry
                  imgSrc={entry.imgUrl}
                  key={entry.id}
                  id={entry.id}
                  title={entry.title}
                  date={entry.date}
                  body={entry.body}
                />
              </Fade>
            );
          })}
        </div>
      </div>

      <Legal />
    </>
  );
};

export default Blog;
