import { Link } from "@remix-run/react";
import React from "react";
import { fixDate } from "~/utils/helpers";
import styles from "~/styles/blog.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

function Post({ post }) {
  const { content, title, url, image, publishedAt } = post;

  return (
    <article className='post'>
      <img
        className='image'
        src={image.data.attributes.formats.small.url}
        alt={`img taken by api at posts url ${title}`}
      />
      <div className='content'>
        <h3>{title}</h3>
        <p className='date'>{fixDate(publishedAt)}</p>
        <p className='sumary'>{content}</p>
        <Link className='link' to={`/posts/${url}`}>
          Read more
        </Link>
      </div>
    </article>
  );
}

export default Post;
