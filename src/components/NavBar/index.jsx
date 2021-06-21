import React from "react";
import Nav from "../Nav";
const { history } = window;

function push(e, subapp) {
  e.preventDefault();
  history.pushState(null, subapp, `/${subapp}`);
}

function NavBar() {
  return (
    <Nav>
      <ul>
        <li>
          <span rule="button" onClick={(e) => push(e, "orders")}>
            Home
          </span>
        </li>
        <li>
          <span rule="button" onClick={(e) => push(e, "new-order")}>
            New order
          </span>
        </li>
      </ul>
    </Nav>
  );
}

export default NavBar;
