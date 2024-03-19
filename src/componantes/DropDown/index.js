import React from "react";
import "./DropDown.scss";
import Product from "../ShopingCard/index";
import { useSelector } from "react-redux";

export default function Index() {
  const products = useSelector((state) => state.Cart);
  console.log("from cart", products);
  return (
    <div class="dropdown">
      <svg width="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1H5L7.68 14.39M7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6L7.68 14.39ZM10 21C10 21.5523 9.55228 22 9 22C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20C9.55228 20 10 20.4477 10 21ZM21 21C21 21.5523 20.5523 22 20 22C19.4477 22 19 21.5523 19 21C19 20.4477 19.4477 20 20 20C20.5523 20 21 20.4477 21 21Z"></path>
      </svg>
      <div class="dropdown-content">
        {products.length !== 0 ? (
          products.map((product) => (
            <Product
              name={product.productTitle}
              img={product.CardImg}
              price={`${product.price}$`}
            />
          ))
        ) : (
          <div className="d-flex justify-content-center align-items-center cart-message">
            empty cart
          </div>
        )}
      </div>
    </div>
  );
}
