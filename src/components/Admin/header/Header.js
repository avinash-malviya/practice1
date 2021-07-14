import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdNotifications } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import logo from "../../../Assets/logo.png";

import "./_header.css";

const Navbar = () => {
  return (
    <div className="fixed-header">
      <nav className="navbar navbar-expand nav-fill w-100  ">
        <img className="logo" src={logo} alt="Logo" />

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              {/* <NavLink className="nav-link" exact to="/"> */}
              <MdNotifications size={28} />
              {/* </NavLink> */}
            </li>
          </ul>
        </div>
        {/* <Link className="btn" to="/users/add"> */}
        <BsFillPersonFill size={28} />
        {/* </Link> */}
      </nav>
    </div>
  );
};

export default Navbar;
