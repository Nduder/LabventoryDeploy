import { useState } from "react";
import { Button } from "@mantine/core";

export function LogEntry({ log, setLog }) {
  const [count, setCount] = useState(0);
  const [sampleCode, setSampleCode] = useState("");

  const logList = log.map((ele, index) => (
    <li key={index}>{index + " " + ele}</li>
  ));

  const onBeep = () => {
    const seconds = new Date().toString();
    setLog([sampleCode + seconds, ...log]);
    setSampleCode("");
  };

  return (
    <>
      <h1>Vite + React</h1>

      <div className="card">
        <input
          value={sampleCode}
          onChange={(e) => setSampleCode(e.target.value)}
          onKeyDown={(e) => {
            if ((e.key === "Enter") & (sampleCode !== "")) {
              onBeep();
            }
          }}
        />
        <div>{logList}</div>
      </div>
    </>
  );
}
