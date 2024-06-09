import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Formula from "./Components/Formula";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Formula />
    </>
  );
}

export default App;
