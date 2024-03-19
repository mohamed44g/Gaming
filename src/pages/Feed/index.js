import React, { useState } from "react";
import FeedCard from "../../componantes/FeedCard/index";
import "./Feed.scss";

export default function Feed() {
  const [data] = useState([
    {
      id: 1,
      icon: (
        <svg
          className="icon"
          width="33"
          stroke="#fff"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1H5L7.68 14.39M7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6L7.68 14.39ZM10 21C10 21.5523 9.55228 22 9 22C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20C9.55228 20 10 20.4477 10 21ZM21 21C21 21.5523 20.5523 22 20 22C19.4477 22 19 21.5523 19 21C19 20.4477 19.4477 20 20 20C20.5523 20 21 20.4477 21 21Z"></path>
        </svg>
      ),
      title: "Payment",
      des: "More than 10 payment system",
    },

    {
      id: 2,
      icon: (
        <svg
          className="icon"
          width="33"
          stroke="#fff"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 17H4C3.46957 17 2.96086 16.7893 2.58579 16.4142C2.21071 16.0391 2 15.5304 2 15V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V15C22 15.5304 21.7893 16.0391 21.4142 16.4142C21.0391 16.7893 20.5304 17 20 17H19M12 15L17 21H7L12 15Z"></path>
        </svg>
      ),
      title: "Games",
      des: "A large number of games",
    },

    {
      id: 3,
      icon: (
        <svg
          className="icon"
          width="33"
          stroke="#fff"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"></path>
        </svg>
      ),
      title: "Community",
      des: "largest gaming community",
    },
  ]);
  return (
    <div className="container feed">
      <h2>Why Users Trust Us</h2>
      <p className="text-center">
        All and. Green day waters appear lights, fish you'll called likeness
        midst have you May. Lesser brought evening man she'd that. Replenish
        form wherein form midst. Good from forth together.
      </p>

      <div className="Feed-cards">
        {data.map((ele) => (
          <FeedCard
            key={ele.id}
            icon={ele.icon}
            title={ele.title}
            des={ele.des}
          />
        ))}
      </div>
    </div>
  );
}
