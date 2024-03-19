import React from "react";
import "./Card.scss";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../../store/reducers/Cart-Slice";
export default function Card(props) {
  const dispatch = useDispatch();
  const handelClick = () => {
    const data = {
      productTitle: props.productTitle,
      CardImg: props.CardImg,
      price: props.price,
    };
    dispatch(add(data));
  };
  return (
    <div className="product-card">
      <div className="card-content mx-auto">
        <div className="product-img">
          <img src={props.CardImg} alt={`${props.productTitle}`} />
          <button className="btn" onClick={handelClick}>
            Buy
          </button>
        </div>

        <div className="card-text ml-1">
          <h4 className="product-title">{props.productTitle}</h4>
          <span className="game-rating d-flex">
            <svg
              className="icon"
              width="13"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
            </svg>
            <svg
              className="icon"
              width="13"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
            </svg>
            <svg
              className="icon"
              width="13"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
            </svg>
            <svg
              className="icon"
              width="13"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
            </svg>
            <svg
              className="icon"
              width="13"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
            </svg>
          </span>
          <div className="mt-2 prices">
            <span className="price">{`${props.price}$`}</span>{" "}
            <span className="discount">{`${props.discount}$`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
