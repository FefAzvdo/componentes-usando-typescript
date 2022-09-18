import { useState } from "react";
import { colors } from "../../utils/colors";
import Button from "../components/Button";
import Input from "../components/Input";
import ProgressBar from "../components/ProgressBar";

export default function TestingPage() {
  const [nome, setNome] = useState("");

  return (
    <div>
      <Input
        placeholder="Nome"
        type={"text"}
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <div style={{ margin: "0px 10px" }}>
        <p>Nome: {nome}</p>
      </div>

      <Button
        onClick={() => {
          setNome("");
          alert("Enviou");
        }}
        size="small"
        bgColor={colors.CornflowerBlue}
      >
        Enviar
      </Button>
    </div>
  );
}
