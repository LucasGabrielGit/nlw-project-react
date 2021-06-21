import React from "react";
import { Button } from "./components/Button";

function App() {
  return (
    <h1>
      <Button text="Olá" />
      <Button text="Not found" />
      <Button texts={["Lucas", "Sabrina"]} />
      <Button />
      <Button />
      <Button />
    </h1>
  );
}

export default App;
