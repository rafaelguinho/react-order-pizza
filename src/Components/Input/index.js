import styled from "styled-components";

const inputStyle = `
padding: 12px;
border: 1px solid #ccc;
border-radius: 4px;
resize: vertical;
`;

const Input = styled.input`
  ${inputStyle}
`;

const Select = styled.select`
  ${inputStyle}
`;

export { Input, Select };
