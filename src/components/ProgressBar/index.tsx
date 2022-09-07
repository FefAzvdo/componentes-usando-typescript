import { useEffect, useState } from "react";
import { ProgressBarInnerDiv, ProgressBarWrapper } from "./styles";
import "./styles.css";

type ProgressBarProps = {
  barWidth?: number;
  barHeight?: number;
  step?: number;
  duration?: number;
  isInfinite?: boolean;
  barColor?: string;
};

const ProgressBar = ({
  barWidth = 80,
  step = 15,
  duration = 100,
  isInfinite = true,
  barHeight = 12,
  barColor = "blue",
}: ProgressBarProps) => {
  const BAR_WIDTH = Number(barWidth);
  const STEP = Number(step);

  const [sizeOfTheBar, setSizeOfTheBar] = useState(0);

  const increment = () => {
    setSizeOfTheBar((prev) => prev + STEP);
  };

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
    <div
      onClick={() => {
        increment();
      }}
    >
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
    </div>
  );
};

export default ProgressBar;
