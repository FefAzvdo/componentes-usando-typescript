import { StyledButton } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  size?: "small" | "medium" | "big";
  icon?: JSX.Element | string;
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
