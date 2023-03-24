import { useOutletContext } from "@remix-run/react";
import React, { useEffect, useState } from "react";
import styles from "~/styles/cart.css";
import { ClientOnly } from "remix-utils";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export function meta() {
  return {
    title: "GuitarLA - Shopping Cart",
  };
}

function Cart() {
  const [total, setTotal] = useState(0);
  const { cart, updateQty, deleteGuitar } = useOutletContext();

  useEffect(() => {
    const accTotal = cart.reduce((acc, item) => acc + item.qty * item.price, 0);
    setTotal(accTotal);
  }, [cart]);

  return (
    <ClientOnly fallback={"loading"}>
      {() => (
        <main className='container'>
          <h1 className='heading'>Shopping Cart</h1>
          <div className='content'>
            <div className='cart'>
              <h2>Items</h2>
              {cart?.length === 0
                ? "Empty cart"
                : cart?.map((item) => (
                    <div key={item.id} className='item'>
                      <div>
                        <img
                          src={item.image}
                          alt={`guitar img in the cart taken by api ${item.name}`}
                        />
                      </div>
                      <div>
                        <p className='name'>{item.name}</p>
                        <p>Quantity:</p>
                        <select
                          onChange={(e) =>
                            updateQty({
                              qty: +e.target.value,
                              id: item.id,
                            })
                          }
                          value={item.qty}
                          className='select'
                        >
                          <option value='1'>1</option>
                          <option value='2'>2</option>
                          <option value='3'>3</option>
                          <option value='4'>4</option>
                          <option value='5'>5</option>
                        </select>
                        <p className='price'>
                          $<span>{item.price}</span>
                        </p>
                        <p className='subtotal'>
                          Subtotal: $ <span>{item.qty * item.price}</span>
                        </p>
                      </div>
                      <button
                        onClick={() => deleteGuitar(item.id)}
                        type='button'
                        className='btn-delete'
                      >
                        X
                      </button>
                    </div>
                  ))}
            </div>
            <aside className='summary'>
              <h3>Order Summary</h3>
              <p>Total: ${total}</p>
            </aside>
          </div>
        </main>
      )}
    </ClientOnly>
  );
}

export default Cart;
