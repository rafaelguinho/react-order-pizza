import styled from "styled-components";

const Nav = styled.nav`
  padding-left: 0.5em;

  > ul {
    padding-left: 0;
    list-style-type: none;
    display: flex;
  }

  li {
    margin-right: 1px;
  }

  li a {
    display: block;
    min-width: 140px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    background: #2d3436;
    text-decoration: none;
  }

  li:hover a {
    background: #636e72;
  }
`;

export default Nav;
