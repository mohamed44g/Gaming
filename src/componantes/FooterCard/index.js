import React from "react";
import "./FooterCard.scss";
export default function FooterCard(props) {
  return (
    <div className="footer-card">
      <div className="footer-card-icon">{props.icon}</div>
      <h5>{props.title}</h5>
    </div>
  );
}
