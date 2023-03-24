import { Link, useLocation } from "@remix-run/react";
import React from "react";
import cart from "../../public/img/carrito.png";

function Navigation() {
  const location = useLocation();
  return (
    <nav className='navigation'>
      <Link to='/' className={location.pathname === "/" ? "active" : ""}>
        Home
      </Link>
      <Link
        to='/aboutus'
        className={location.pathname === "/aboutus" ? "active" : ""}
      >
        About Us
      </Link>
      <Link
        to='/posts'
        className={location.pathname === "/posts" ? "active" : ""}
      >
        Blog
      </Link>
      <Link
        to='/guitar'
        className={location.pathname === "/guitar" ? "active" : ""}
      >
        Shop
      </Link>
      <Link to='/cart'>
        <img src={cart} alt='shopping icon' />
      </Link>
    </nav>
  );
}

export default Navigation;
