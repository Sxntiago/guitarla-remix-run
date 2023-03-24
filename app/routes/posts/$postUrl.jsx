import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/post.server";
import { fixDate } from "~/utils/helpers";

export async function loader({ params }) {
  const { postUrl } = params;
  const post = await getPost(postUrl);

  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Post does not exists",
    });
  }

  return post;
}

export function meta({ data }) {
  if (!data) {
    return {
      title: "Post doesn't exists",
    };
  }
  return {
    title: `GuitarLa - ${data.data[0].attributes.title}`,
  };
}

function PostUrl() {
  const post = useLoaderData();
  const { title, content, image, publishedAt } = post.data[0].attributes;
  return (
    <article className='post mt-3'>
      <img
        className='image'
        src={image.data.attributes.url}
        alt={`img taken by api at posts url ${title}`}
      />
      <div className='content'>
        <h3>{title}</h3>
        <p className='date'>{fixDate(publishedAt)}</p>
        <p className='text'>{content}</p>
      </div>
    </article>
  );
}

export default PostUrl;
