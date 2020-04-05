import React from "react";
import "./App.scss";
import { Input } from "./components/inputs/Input";
import { Button } from "./components/inputs/Buttons";

function App() {
  return (
    <div className="App">
      <Input title="Ejemplo" />
      <Button>OK</Button>
    </div>
  );
}

export default App;
