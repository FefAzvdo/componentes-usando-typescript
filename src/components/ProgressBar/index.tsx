import { useEffect, useState } from "react";
import { ProgressBarInnerDiv, ProgressBarWrapper } from "./styles";
import "./styles.css";

type ProgressBarProps = {
  barWidth: number;
  step?: number | 15;
};

const ProgressBar = ({ barWidth, step }: ProgressBarProps) => {
  const [sizeOfTheBar, setSizeOfTheBar] = useState(0);

  const increment = () => {
    setSizeOfTheBar((prev) => prev + Number(step));
  };

  useEffect(() => {
    increment();
  }, []);

  useEffect(() => {
    if (sizeOfTheBar >= barWidth) {
      setSizeOfTheBar(barWidth);
    } else {
      setTimeout(() => {
        increment();
      }, 50);
    }
  }, [sizeOfTheBar]);

  return (
    <ProgressBarWrapper sizeOfTheProgressBarWrapper={barWidth}>
      <ProgressBarInnerDiv sizeOfTheBar={sizeOfTheBar} barColor="red">
        .
      </ProgressBarInnerDiv>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
