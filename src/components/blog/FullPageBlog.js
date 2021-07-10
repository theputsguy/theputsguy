import React, { useState, useEffect } from "react";
import Disqus from "disqus-react";
import { Link } from "react-router-dom";
import Legal from "../legal/Legal";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import Fade from "react-reveal/Fade";

const FullPageBlog = ({ setSelectedLink, match }) => {
  const [items, setItems] = useState({
    image: "",
    id: "",
    title: "",
    date: "",
    body: "",
  });
  const disqusShortname = "the-puts-guy";
  const disqusConfig = {
    url: window.location.origin,
    identifier: items[0]?.id,
    title: items[0]?.title,
  };
  const fetchItems = async () => {
    const data = await fetch("https://api.jsonbin.io/v3/b/60e7d9bfa63d2870c1906368", {
      method: "GET",
      headers: {
        "X-Master-Key": "$2b$10$o3piOdvsNGKDQ7TzQ2svnOyhzzNNSseryZ3SdC1.cyGnqlGyfhzkO",
      },
    });

    const items = await data.json();
    setItems(items?.record?.record?.root.filter((item) => item.id === match.params.id));
  };
  useEffect(() => {
    fetchItems();
    window.scroll(0, 0);
    setSelectedLink(1);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSelectedLink]);
  return (
    <>
      <div className="full-blog-page">
        <div className="full-page-blog-container">
          <Fade cascade left>
            <Link to="/blog" className="full-page-blog-container-return-bttn">
              <i className="fas fa-chevron-left"></i>&nbsp;&nbsp;Return
            </Link>
            <h1>{items[0]?.title}</h1>
            <h2>{items[0]?.date}</h2>
            <div className="full-page-blog-container-image">
              <img alt="" src={items[0]?.image} />
            </div>
            <h3>
              {items[0]?.body.split("<br>").map((section) => {
                return (
                  <div>
                    {section}
                    <br />
                  </div>
                );
              })}
            </h3>
            <div className="full-blog-social-share-container">
              <FacebookShareButton
                key={Math.random() * 100}
                url={window.location.href}
                quote={"Check out this great blog post from the puts guy!"}
                hashtag="#theputsguy"
              >
                <FacebookIcon round={true}></FacebookIcon>
              </FacebookShareButton>
              Share this post
              <TwitterShareButton
                key={Math.random() * 100}
                url={window.location.href}
                quote={"Check out this great blog post from the puts guy!"}
                hashtag="#theputsguy"
              >
                <TwitterIcon round={true}></TwitterIcon>
              </TwitterShareButton>
            </div>
            <br />
            <br />
            <Disqus.DiscussionEmbed
              key={items[0]?.title}
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </Fade>
        </div>
      </div>
      <Legal />
    </>
  );
};

export default FullPageBlog;
