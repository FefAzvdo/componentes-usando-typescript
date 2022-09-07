import ProgressBar from "./components/ProgressBar";

//aqui
export default function App() {
  return (
    <ProgressBar
      barWidth={250}
      step={15}
      duration={50}
      isInfinite
      barHeight={12}
      // barColor={"purple"}
    />
  );
}
