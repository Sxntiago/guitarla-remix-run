import { useLoaderData, useOutletContext } from "@remix-run/react";
import { useState } from "react";
import { getGuitar } from "~/models/guitars.server";

export async function loader({ request, params }) {
  const { guitarUrl } = params;

  const guitar = await getGuitar(guitarUrl);

  if (guitar.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Guitar does not exists",
    });
  }
  return guitar;
}

export function meta({ data }) {
  if (!data) {
    return {
      title: "Guitar doesn't exists",
    };
  }
  return {
    title: `GuitarLa - ${data.data[0].attributes.name}`,
  };
}
function GuitarUrl() {
  const { addCart } = useOutletContext();
  const [qty, setQty] = useState(0);
  const guitar = useLoaderData();
  const { name, description, image, price } = guitar.data[0].attributes;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (qty < 1) {
      alert("please choose an option");
      return;
    }
    const selectedGuitar = {
      id: guitar.data[0].id,
      image: image.data.attributes.url,
      name,
      price,
      qty,
    };

    addCart(selectedGuitar);
  };

  return (
    <div className='guitar'>
      <img
        className='image'
        src={image.data.attributes.url}
        alt={`img get by api, guitar ${name}`}
      />
      <div className='content'>
        <h3>{name}</h3>
        <p className='text'>{description}</p>
        <p className='price'>{price}</p>

        <form onSubmit={handleSubmit} className='form'>
          <label htmlFor='qty'>Quantity</label>
          <select onChange={(e) => setQty(+e.target.value)} id='qty'>
            <option value=''>-Choose-</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
          <input type='submit' value='Add to Bag' />
        </form>
      </div>
    </div>
  );
}

export default GuitarUrl;
