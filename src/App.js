import React, { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [timer, setTimer] = useState(5);
  const [isStarted, setIsStarted] = useState(false);
  const [wordCount, setWordCount] = useState(0);

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
    if (isStarted && timer > 0) {
      setTimeout(() => {
        setTimer(time => time - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsStarted(false);
      setWordCount(countWords(text));
    }
  }, [timer, isStarted]);

  return (
    <div>
      <h1>Speed Typing Challenge</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time remaining: {timer} seconds</h4>
      <button onClick={() => setIsStarted(true)}>Start</button>
      <h1>Word Count: {wordCount} words</h1>
    </div>
  );
}

export default App;
