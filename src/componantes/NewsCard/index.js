import React from "react";
import "./NewsCard.scss";
export default function NewsCard(props) {
  return (
    <div className="NewsCard">
      <div className="cardImg">
        <img src={props.Img} alt="Assassins creed" />
      </div>

      <div className="cardDetail mt-3">
        <h3 className="News-card-name">{props.name}</h3>
        <div className="News-card-information d-flex gap-4">
          <div className="game-date-container">
            <span className="icon-date">
              <svg
                width="28"
                className="icon"
                viewBox="0 0 24 24"
                stroke="#9590a8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 2V6M8 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z"></path>
              </svg>
            </span>

            <span className="date">{props.date}</span>
          </div>

          <div className="game-genre-container">
            <span className="icon-genre">
              <svg
                width="25"
                className="icon"
                viewBox="0 0 24 24"
                stroke="#9590a8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21.3933 13.9061L13.9135 21.3879C13.7197 21.582 13.4896 21.7359 13.2363 21.8409C12.983 21.9459 12.7115 22 12.4373 22C12.1631 22 11.8916 21.9459 11.6383 21.8409C11.3851 21.7359 11.155 21.582 10.9612 21.3879L2 12.4348V2H12.4321L21.3933 10.9635C21.7819 11.3545 22 11.8835 22 12.4348C22 12.9862 21.7819 13.5151 21.3933 13.9061V13.9061Z"></path>
                <path d="M7.00002 7H6.90002"></path>
              </svg>
            </span>
            <span className="genre">{props.genre}</span>
          </div>
        </div>
        <p className="News-card-des">{props.descrption}</p>
        <a className="News-card-link" href="_">
          Read more
        </a>
      </div>
    </div>
  );
}
