import React, { useState, useEffect } from "react";
import { createContext } from "react";
import ConfirmedCard from "./confirmedCard";
export const UserContext = createContext();

const SelectedCart = (props) => {
  const { cartItems, content } = props;
  const [total, setTotal] = useState(0);
  const [numOfItems, setNumOfItems] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false);
  console.log(cartItems);
  const len = Object.keys(cartItems).length;

  useEffect(() => {
    let newTotal = 0;
    let numOfItems = 0;
    Object.keys(cartItems).forEach((key) => {
      const itemKey = Number(key);
      const itemPrice = content[itemKey]?.price || 0; // Safe access
      newTotal += cartItems[itemKey] * itemPrice;
      numOfItems += cartItems[itemKey];
    });
    setTotal(newTotal);
    setNumOfItems(numOfItems);
  }, [cartItems, content]);

  const handleOrderConfirmation = () => {
    setIsConfirmed(true);
  };

  if (len > 0) {
    return (
      <>
        <UserContext.Provider value={{ cartItems, content, total }}>
          <div>
            <h3>Your Cart({numOfItems})</h3>

            <ul>
              {Object.keys(cartItems).map(
                (objKey) =>
                  cartItems[objKey] !== 0 && (
                    <li key={objKey}>
                      <div>
                        {content[objKey].name}
                        <p>
                          {cartItems[objKey]}x @ ${content[objKey].price} $
                          {content[objKey].price * cartItems[objKey]}
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          fill="none"
                          viewBox="0 0 10 10"
                        >
                          <path
                            fill="#CAAFA7"
                            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                          />
                        </svg>
                        <hr></hr>
                      </div>
                    </li>
                  )
              )}
            </ul>
            <div>
              <p>Order Total</p>
              <h3>{total}</h3>
            </div>

            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                fill="none"
                viewBox="0 0 21 20"
              >
                <path
                  fill="#1EA575"
                  d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"
                />
                <path
                  fill="#1EA575"
                  d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"
                />
              </svg>
              This is a carbon-neutral delivery
            </p>
            <button onClick={handleOrderConfirmation}>Confirm Order</button>
          </div>
          <div>{isConfirmed && <ConfirmedCard />}</div>
        </UserContext.Provider>
      </>
    );
  }
};

export default SelectedCart;
