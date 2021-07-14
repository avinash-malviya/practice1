import React from "react";
import "./_sidebar.css";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      {/* <Link to="/"> */}
      <li>
        <span>FastFx</span>
      </li>
      {/* </Link> */}

      {/* <Link to="/feed/subscriptions"> */}

      {/* </Link> */}

      {/* <Link to="/feed/likedVideos"> */}
      <li>
        <span>Liked Videos</span>
      </li>
      {/* </Link> */}
      {/* <Link to="/feed/likedVideos"> */}
      <li>
        <span>Liked Videos</span>
      </li>
      {/* </Link> */}

      <li>
        <span>History</span>
      </li>
    </nav>
  );
};

export default Sidebar;
