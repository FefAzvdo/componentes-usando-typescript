import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

type StyledButtonProps = {
  bgColor?: string;
  size?: "small" | "medium" | "big";
};

const StyledButton = styled.button<StyledButtonProps>`
  border: none;
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
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  size?: "small" | "medium" | "big";
  icon: JSX.Element;
  onClick: () => any;
}

export default function Button({
  bgColor,
  size,
  icon,
  children,
  onClick,
}: ButtonProps) {
  return (
    <StyledButton bgColor={bgColor} size={size} onClick={onClick}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <span style={{ marginRight: "10px" }}>{children}</span>
        {icon}
      </div>
    </StyledButton>
  );
}
