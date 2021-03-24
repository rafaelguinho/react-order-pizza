import styled from "styled-components";

const Item = styled.li`
  height: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  margin: 0.5em;
  background-color: #f39c12;
  padding-left: 0.5em;
  font-weight: bolder;
`;

const Size = styled.span`
  background-color: #d35400;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: white;
  margin-right: 0.8em;
`;

const Timestamp = styled.span`
  background-color: #c0392b;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: white;
  margin-left: 0.8em;
  padding: 0.4em;
`;

export { Item, Size, Timestamp };
