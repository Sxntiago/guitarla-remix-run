import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "~/models/guitars.server";
import GuitarsList from "~/components/guitarslist";

export async function loader() {
  const guitars = await getGuitars();
  return guitars.data;
}

export const meta = () => ({
  title: "GuitarLA - Shop",
});

function Shop() {
  const guitars = useLoaderData();

  return <GuitarsList guitars={guitars} />;
}

export default Shop;
