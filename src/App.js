import React, { useState, useEffect, useRef } from "react";

function App() {
  const START_TIME = 5;

  const [text, setText] = useState("");
  const [timer, setTimer] = useState(START_TIME);
  const [isStarted, setIsStarted] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textBoxRef = useRef(null);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function countWords(text) {
    const wordsArr = text.trim().split(" ");
    // console.log(wordsArr.length);
    return wordsArr.filter(word => word !== "").length;
  }

  function startGame() {
    setIsStarted(true);
    setTimer(START_TIME);
    setText("");
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
  }

  function endGame() {
    setIsStarted(false);
    setWordCount(countWords(text));
  }

  useEffect(() => {
    if (isStarted && timer > 0) {
      setTimeout(() => {
        setTimer(time => time - 1);
      }, 1000);
    } else if (timer === 0) {
      endGame();
    }
  }, [timer, isStarted]);

  return (
    <div>
      <h1>Speed Typing Challenge</h1>
      <textarea
        ref={textBoxRef}
        onChange={handleChange}
        disabled={!isStarted}
        value={text}
      />
      <h4>Time remaining: {timer} seconds</h4>
      <button onClick={startGame} disabled={isStarted}>
        Start
      </button>
      <h1>Word Count: {wordCount} words</h1>
    </div>
  );
}

export default App;
