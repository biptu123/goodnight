import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Goodnight from "./Goodnight";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Goodnight />
    </>
  );
}

export default App;
