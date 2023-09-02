import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <h1>{count / 2}</h1>
    </>
  );
}
