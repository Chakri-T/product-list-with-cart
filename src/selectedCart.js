import React, { useState, useEffect } from "react";
const SelectedCart = (props) => {
  //   const { index, numofitems } = props.cartItems;
  const { cartItems, content } = props;
  const [total, setTotal] = useState(0);
  //   cartItems.map((item, index) => console.log(item, index));
  const len = Object.keys(cartItems).length;
  // const objKeys = Object.keys(cartItems).map((key) => Number(key));
  //   console.log(content[0].price);
  useEffect(() => {
    let newTotal = 0;
    Object.keys(cartItems).forEach((key) => {
      const itemKey = Number(key);
      const itemPrice = content[itemKey]?.price || 0; // Safe access
      newTotal += cartItems[itemKey] * itemPrice;
    });
    setTotal(newTotal);
  }, [cartItems, content]);

  //   console.log(props.cartItems);
  if (len > 0) {
    return (
      <>
        <div>
          <h1>Your Cart({len})</h1>

          {/* <ul>
            {objKeys.map((objKey) => (
              <li key={objKey}>
                {objKey}: {cartItems[objKey]}
              </li>
            ))}
          </ul> */}
          <h3>Order Total</h3>
          <h2>{total}</h2>
        </div>
      </>
    );
  }
};

export default SelectedCart;
