import { colors } from "../../utils/colors";
import Button from "../components/Button";
import ProgressBar from "../components/ProgressBar";

export default function TestingPage() {
  return (
    <div>
      <Button
        onClick={() => console.log("oi")}
        size="big"
        bgColor={colors.CornflowerBlue}
      >
        Click me !!
      </Button>
    </div>
  );
}
