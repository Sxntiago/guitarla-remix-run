import React from "react";
import { Link } from "@remix-run/react";
import Icon from "../../public/img/icon.svg";
import Navigation from "./navigation";

function Header() {
  return (
    <header className='header'>
      <div className='container bar'>
        <Link to='/'>
          <img className='icon' src={Icon} alt='header icon' />
        </Link>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
