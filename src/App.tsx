import Button from "./components/Button";
import ProgressBar from "./components/ProgressBar";
import { colors } from "../utils/colors";
//aqui
export default function App() {
  return (
    <div>
      {/* <ProgressBar /> */}
      <Button
        size="medium"
        onClick={() => alert("clicou !!")}
        icon={<div>OK</div>}
        bgColor={colors.DeepPink}
      >
        Click me
      </Button>
    </div>
  );
}
