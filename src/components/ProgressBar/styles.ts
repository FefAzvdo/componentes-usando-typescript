import styled from "styled-components";

type ProgressBarWrapperInnerDivProps = {
  sizeOfTheProgressBarWrapper?: number;
};

export const ProgressBarWrapper = styled.div<ProgressBarWrapperInnerDivProps>`
  width: ${(props) => `${props?.sizeOfTheProgressBarWrapper}px` || 0};
  height: 20px;
  margin: 10px;
  padding-top: 3px;
  padding-bottom: 3px;
  border-radius: 13px;
  display: flex;
  justify-content: start;
  align-items: center;
  border: 2px solid black;
`;

type ProgressBarInnerDivProps = {
  sizeOfTheBar: number;
  barColor: string;
};

export const ProgressBarInnerDiv = styled.div<ProgressBarInnerDivProps>`
  width: ${(props) => `${props.sizeOfTheBar}px` || 0};
  background-color: ${(props) => `${props.barColor}` || "blue"};
  border-radius: 60px;
  color: ${(props) => `${props.barColor}` || "blue"};
`;
