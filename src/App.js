import React, { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [timer, setTimer] = useState(5);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function countWords(text) {
    const wordsArr = text.trim().split(" ");
    console.log(wordsArr.length);
    return wordsArr.filter(word => word !== "").length;
  }

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer(time => time - 1);
      }, 1000);
    }
  }, [timer]);

  return (
    <div>
      <h1>Speed Typing Challenge</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time remaining: {timer} seconds</h4>
      <button onClick={() => countWords(text)}>Start</button>
      <h1>Word Count: ??? words</h1>
    </div>
  );
}

export default App;
