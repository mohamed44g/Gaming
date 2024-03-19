import React from "react";
import "./ShopingCard.scss";
import Icon from "../../assets/Images/delete-button-svgrepo-com.svg";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../store/reducers/Cart-Slice";

export default function Index(props) {
  const state = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  const handelClick = () => {
    const data = {
      productTitle: props.name,
    };
    dispatch(remove(data));
  };
  return (
    <div className="shoping-card">
      <div className="img-container">
        <img className="shoping-card-img" src={props.img} alt="Game-img" />
      </div>
      <div className="title-container">{props.name}</div>
      <div className="price-container">{props.price}</div>
      <div className="remove-container">
        <img
          className="delete-icon"
          src={Icon}
          alt="deleteicon"
          onClick={handelClick}
        />
      </div>
    </div>
  );
}
