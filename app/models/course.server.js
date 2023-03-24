export async function getCourse() {
  const res = await fetch(`${process.env.API_URL}/course/?populate=image`);
  const result = await res.json();

  return result;
}
