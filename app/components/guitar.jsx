import { Link } from "@remix-run/react";
import React from "react";

function Guitar({ guitar }) {
  const { description, image, price, url, name } = guitar;

  return (
    <div className='guitar'>
      <img
        src={image.data.attributes.formats.medium.url}
        alt={`img taken from the api in medium size guitar ${name}`}
      />
      <div className='content'>
        <h3>{name} </h3>
        <p className='description'>{description}</p>
        <p className='price'>${price}</p>
        <Link className='link' to={`/guitar/${url}`}>
          Show Product
        </Link>
      </div>
    </div>
  );
}

export default Guitar;
