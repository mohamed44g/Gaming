import React from "react";
import "./FeedCard.scss";
export default function FeedCard(props) {
  return (
    <div className="Feed-card">
      <div className="Feed-card-img">{props.icon}</div>

      <div className="Feed-card-title mt-4">
        <h4>{props.title}</h4>
      </div>

      <div className="Feed-card-des">
        <h6>{props.des}</h6>
      </div>
    </div>
  );
}
