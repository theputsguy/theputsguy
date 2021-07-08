import React from "react";
import { Link } from "react-router-dom";

const BlogEntry = ({ imgSrc, id, title, date }) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="blog-entry">
        <span>
          <h1>{title}</h1>
          <div className="horizontal-line"></div>
          <h2>{date}</h2>
        </span>
        <i className="fas fa-chevron-down"></i>
        <img alt="" src={imgSrc} />
      </div>
    </Link>
  );
};

export default BlogEntry;
