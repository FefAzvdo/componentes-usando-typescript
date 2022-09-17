import { useEffect, useState } from "react";
import { ProgressBarInnerDiv, ProgressBarWrapper } from "./styles";
import "./styles.css";

type ProgressBarProps = {
  barWidth?: number;
  barHeight?: number;
  step?: number;
  stepDuration?: number;
  isInfinite?: boolean;
  barColor?: string;

  //
  colorOfWraperBorder?: string;
};

const ProgressBar = ({
  barWidth = 250,
  step = 15,
  stepDuration = 250,
  barHeight = 12,
  barColor = "blue",
  colorOfWraperBorder = "black",
}: ProgressBarProps) => {
  const BAR_WIDTH = Number(barWidth);
  const STEP = Number(step);

  const [sizeOfTheBar, setSizeOfTheBar] = useState(0);

  const increment = () => {
    setSizeOfTheBar((prev) => prev + STEP);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      increment();
    }, stepDuration);

    if (sizeOfTheBar >= BAR_WIDTH) {
      return () => {
        alert("desmonta");
        clearInterval(timer);
      };
    } else {
      timer.ref;
    }
  }, []);

  return (
    <div
      onClick={() => {
        increment();
      }}
    >
      <ProgressBarWrapper
        sizeOfTheProgressBarWrapper={barWidth}
        heightOfProgressBarWrapper={barHeight}
        colorOfWraperBorder={colorOfWraperBorder}
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
