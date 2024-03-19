import React from "react";
import Menu from "../../assets/Images/icons8-menu-96 (6).png";
import "./Navpar.scss";
import DropDown from "../DropDown/index";
import { useSelector } from "react-redux";
import NavIcons from "../NavIcons/index";

export default function NavPar() {
  const prodcuts = useSelector((state) => state.Cart);
  function openMenu() {
    let ele = document.querySelector(".sidenav");
    ele.classList.add("open-side");
    document.body.style.overflowY = "hidden";
  }

  return (
    <div className="navbar">
      <div className="Nav-container">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div className="Logo">
              <a className="navbar-brand" href="_">
                <img
                  className="Nav-icon"
                  src="https://html.nkdev.info/monsterplay/assets/images/logo-gamer.svg"
                  alt="Nav-icon"
                />
              </a>
            </div>

            <div className="Links">
              <div className="Nav-links">
                <ul className="navbar-links-ul">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="_">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="_">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="_">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="_">
                      Disabled
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="d-flex">
            <div className="NavIcons-container">
              <NavIcons />
            </div>
            <img
              className="MenuIcon"
              src={Menu}
              alt="MenuIcon"
              onClick={openMenu}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
