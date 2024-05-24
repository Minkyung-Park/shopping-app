import React from "react";
import styled from "@emotion/styled";
import { colorArr, colorSystem } from "../../styles/color";

const ButtonStyle = styled.button`
  position: relative;
  border: 1px solid ${colorSystem.p600};
  background-color: #fff;
  color: ${colorSystem.p600};
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 16px;

  &:hover {
    border: 1px solid #fff;
    background-color: ${colorSystem.p400};
    color: ${colorSystem.p700};
  }

  &:active {
    border: 1px solid ${colorArr.primary[0]};
    background-color: ${colorArr.primary[0]};
    color: #fff;
  }
`;

const Button = ({ label = "버튼", onClick }) => {
  return <ButtonStyle onClick={onClick}>{label}</ButtonStyle>;
};

export default Button;