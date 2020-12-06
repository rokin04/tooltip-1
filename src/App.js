import React from "react";
import "./styles.css";
import Tooltip from "./tooltip-ref";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
      className="App"
    >
      <Tooltip content="hello">
        <div>hover</div>
      </Tooltip>
    </div>
  );
}
