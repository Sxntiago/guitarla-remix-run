import { useLoaderData } from "@remix-run/react";
import PostsList from "~/components/postslist";
import { getPosts } from "~/models/post.server";

export async function loader() {
  const posts = await getPosts();

  return posts.data;
}

export const meta = () => ({
  title: "GuitarLA - Blog",
});

function Blog() {
  const posts = useLoaderData();
  return <PostsList posts={posts} />;
}

export default Blog;
