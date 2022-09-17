import styled from "styled-components";

type StyledButtonProps = {
  bgColor?: string;
  size?: "small" | "medium" | "big";
};

export const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 8px;
  font-size: 1em;
  font-weight: 500;
  padding: ${(props) => {
    if (props.size === "small") {
      return "15px 20px";
    } else if (props.size === "medium") {
      return "15px 40px";
    } else if (props.size === "big") {
      return "15px 80px";
    }
  }};
  background-color: ${(props) => props.bgColor};
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  transition: all 0.3s;

  &:hover {
    background-color: ${(props) => props.bgColor + "bf"};
  }
  &:focus {
    border: 2px solid black;
    background-color: ${(props) => props.bgColor + "bf"};
  }
`;
