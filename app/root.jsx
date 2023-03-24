import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  Link,
} from "@remix-run/react";
import styles from "./styles/index.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { useEffect, useState } from "react";

export const meta = () => ({
  charset: "utf-8",
  title: "GuitarLA - Remix",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap",
    },
  ];
}

export default function App() {
  const cartLS =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("Shopping Cart")) ?? []
      : null;
  const [cart, setCart] = useState(cartLS);

  useEffect(() => {
    localStorage.setItem("Shopping Cart", JSON.stringify(cart));
  }, [cart]);

  const addCart = (guitar) => {
    if (cart.some((guitarState) => guitarState.id === guitar.id)) {
      const newCart = cart.map((guitarState) => {
        if (guitarState.id === guitar.id) {
          guitarState.qty = guitar.qty;
        }
        return guitarState;
      });
      setCart(newCart);
    } else {
      setCart([...cart, guitar]);
    }
  };

  const updateQty = (guitar) => {
    const updateCart = cart.map((guitarState) => {
      if (guitarState.id === guitar.id) {
        guitarState.qty = guitar.qty;
      }
      return guitarState;
    });

    setCart(updateCart);
  };

  const deleteGuitar = (id) => {
    const updateCart = cart.filter((guitarState) => guitarState.id !== id);
    setCart(updateCart);
  };

  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet
          context={{
            addCart,
            cart,
            updateQty,
            deleteGuitar,
          }}
        />
        <ScrollRestoration />
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

/** Errors */
export function CatchBoundary() {
  const error = useCatch();

  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        <p className='error'>
          {error.status} {error.statusText}
        </p>
        <Link className='error-link' to='/'>
          Go back to shop
        </Link>
        <ScrollRestoration />
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        <p className='error'>
          {error.status} {error.statusText}
        </p>
        <Link className='error-link' to='/'>
          Go back to shop
        </Link>
        <ScrollRestoration />
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
