import styled from "styled-components";

const StyledInput = styled.input`
  border: transparent;
  border-radius: 1em;
  background-color: #f0f0f0;
  padding: 1em;
  font-weight: bold;

  &:focus {
    border: 1px solid black;
  }
`;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
  return <StyledInput {...props} />;
}
