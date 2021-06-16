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
          <a href="" onClick={(e) => push(e, "")}>
            Home
          </a>
        </li>
        <li>
          <a href="" onClick={(e) => push(e, "new-order")}>
            New order
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
