import { Link } from "react-router-dom";

import React from "react";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Nav;
