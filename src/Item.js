import React, { useEffect, useState } from "react";
import SelectedCart from "./selectedCart";
const Item = () => {
  const [data, setData] = useState([]);
  const [btn, setBtn] = useState({});

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  const handleClick = (index) => {
    setBtn((prevBtn) => ({ ...prevBtn, [index]: (prevBtn[index] || 0) + 1 }));
  };
  const handleDec = (index) => {
    setBtn((prevBtn) => ({
      ...prevBtn,
      [index]: Math.max((prevBtn[index] || 0) - 1, 0),
    }));
  };
  const handleBtn = (index) => {
    return btn[index] > 0 ? (
      <button className="incbtn">
        <span onClick={() => handleDec(index)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="2"
            fill="none"
            viewBox="0 0 10 2"
          >
            <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
          </svg>
        </span>
        {btn[index]}
        <svg
          onClick={() => handleClick(index)}
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            fill="#fff"
            d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
          />
        </svg>
      </button>
    ) : (
      <button onClick={() => handleClick(index)}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            fill="none"
            viewBox="0 0 21 20"
          >
            <g fill="#C73B0F" clip-path="url(#a)">
              <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
              <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M.333 0h20v20h-20z" />
              </clipPath>
            </defs>
          </svg>
        </span>
        Add to cart
      </button>
    );
  };

  return (
    <>
      <div>
        <ul>
          {data.map((item, index) => (
            <li className="card" key={index}>
              <img src={item.image.thumbnail} alt="an img" />

              <div>{handleBtn(index)}</div>

              <p>{item.category}</p>
              <h5>{item.name}</h5>
              <p>${item.price}</p>
            </li>
          ))}
        </ul>
        {/* <div className="card">
          <div className="card-body">
            <div className="card-title">Your Cart() </div>
            <div className="card-text"></div>
          </div>
        </div> */}
      </div>
      <div>
        <SelectedCart cartItems={btn} content={data} />
      </div>
    </>
  );
};

export default Item;
