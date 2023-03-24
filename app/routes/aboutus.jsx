import React from "react";
import Image from "../../public/img/about.jpg";
import styles from "../styles/about.css";

export const meta = () => ({
  title: "GuitarLA - About Us",
});

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preload",
      href: Image,
      as: "image",
    },
  ];
}

function AboutUs() {
  return (
    <main className='container aboutus'>
      <h2 className='heading'>About Us</h2>
      <div className='content'>
        <img src={Image} alt='guitar img about us' />
        <div>
          <p>
            Donec dui metus, placerat sed felis ac, ultricies euismod ligula.
            Duis venenatis vestibulum leo. Fusce eleifend fringilla purus, id
            elementum diam commodo nec. Quisque imperdiet finibus turpis ac
            fermentum. Phasellus nec accumsan nunc. Vestibulum gravida eleifend
            purus sed placerat. Nam tempus auctor diam, nec vestibulum magna
            bibendum a. Quisque quis nibh ultrices, molestie nulla nec, dapibus
            nisl. Nunc sagittis metus at libero viverra accumsan. Sed orci diam,
            elementum non efficitur et, porta et lectus. Donec eleifend.
          </p>
          <p>
            Donec dui metus, placerat sed felis ac, ultricies euismod ligula.
            Duis venenatis vestibulum leo. Fusce eleifend fringilla purus, id
            elementum diam commodo nec. Quisque imperdiet finibus turpis ac
            fermentum. Phasellus nec accumsan nunc. Vestibulum gravida eleifend
            purus sed placerat. Nam tempus auctor diam, nec vestibulum magna
            bibendum a. Quisque quis nibh ultrices, molestie nulla nec, dapibus
            nisl. Nunc sagittis metus at libero viverra accumsan.
          </p>
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
