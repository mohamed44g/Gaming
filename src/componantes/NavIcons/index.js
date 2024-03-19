import React from "react";
import DropDown from "../DropDown/index";
import { useSelector } from "react-redux";
import "./NavIcons.scss";
export default function Index() {
  const prodcuts = useSelector((state) => state.Cart);
  return (
    <ul className="NavIcons">
      <li>
        <svg
          className="icon"
          width="30"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"></path>
        </svg>
      </li>

      <li>
        <div className="prodcuts-number">{prodcuts.length}</div>
        <DropDown />
      </li>

      <li>
        <svg
          className="icon"
          width="30"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"></path>
        </svg>
      </li>
    </ul>
  );
}
