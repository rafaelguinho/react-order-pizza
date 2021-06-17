import React from "react";
const { history } = window;

function push(e, subapp) {
  e.preventDefault();
  history.pushState(null, subapp, `/${subapp}`);
}

function NavBar() {
  return (
    <nav>
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
    </nav>
  );
}

export default NavBar;
