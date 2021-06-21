import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
  font-weight: bold;
  font-size: 18px;
  width: 400px;
  height: 80px;
  background-color: white;
  border: 2px solid #2d3436;
  color: #2d3436;
  height: inherit;
  width: inherit;
  cursor: pointer;
  &:hover {
    background-color: #2d3436;
    color: white;
  }
  &:active {
    border: 3px solid #2d3436;
  }
`;

export default Button;