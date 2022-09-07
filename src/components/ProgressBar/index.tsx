import { useEffect, useState } from "react";
import { ProgressBarInnerDiv, ProgressBarWrapper } from "./styles";
import "./styles.css";

type ProgressBarProps = {
  barWidth: number;
  barHeight?: number | 2;
  step?: number | 15;
  duration: number;
  isInfinite?: boolean | false;
  barColor?: string;
};

const ProgressBar = ({
  barWidth,
  step,
  duration,
  isInfinite,
  barHeight,
  barColor,
}: ProgressBarProps) => {
  const BAR_WIDTH = Number(barWidth);
  const STEP = Number(step);

  const [sizeOfTheBar, setSizeOfTheBar] = useState(0);

  const increment = () => {
    setSizeOfTheBar((prev) => prev + STEP);
  };

  useEffect(() => {
    increment();
  }, []);

  useEffect(() => {
    if (sizeOfTheBar >= BAR_WIDTH) {
      isInfinite ? setSizeOfTheBar(0) : setSizeOfTheBar(BAR_WIDTH);
    } else {
      setTimeout(() => {
        increment();
      }, duration);
    }
  }, [sizeOfTheBar]);

  return (
    <ProgressBarWrapper
      sizeOfTheProgressBarWrapper={barWidth}
      heightOfProgressBarWrapper={barHeight}
    >
      <ProgressBarInnerDiv
        sizeOfProgressBarInnerDiv={sizeOfTheBar}
        heightOfProgressBarInnerDiv={barHeight}
        colorOfProgressBar={barColor}
      />
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
