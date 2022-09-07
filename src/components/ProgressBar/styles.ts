import styled from "styled-components";

type ProgressBarWrapperInnerDivProps = {
  sizeOfTheProgressBarWrapper?: number;
  heightOfProgressBarWrapper?: number;
};

export const ProgressBarWrapper = styled.div<ProgressBarWrapperInnerDivProps>`
  width: ${(props) => `${props?.sizeOfTheProgressBarWrapper}px`};
  height: ${(props) => `${props?.heightOfProgressBarWrapper}px`};
  padding-top: 3px;
  padding-bottom: 3px;
  border-radius: 13px;
  display: flex;
  justify-content: start;
  align-items: center;
  border: 2px solid black;
`;

type ProgressBarInnerDivProps = {
  sizeOfProgressBarInnerDiv: number;
  heightOfProgressBarInnerDiv?: number;
  colorOfProgressBar?: string;
};

export const ProgressBarInnerDiv = styled.div<ProgressBarInnerDivProps>`
  width: ${(props) => `${props.sizeOfProgressBarInnerDiv}px`};
  height: ${(props) => `${props?.heightOfProgressBarInnerDiv}px`};
  background-color: ${(props) => props.colorOfProgressBar};
  border-radius: 60px;
  color: ${(props) => `${props.colorOfProgressBar}`};
  margin-left: 3px;
  margin-right: 3px;
  transition: all 0.5s;
`;
