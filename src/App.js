import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  console.log(text);

  return (
    <div>
      <h1>Speed Typing Challenge</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time remaining: ??? seconds</h4>
      <button>Start</button>
      <h1>Word Count: ??? words</h1>
    </div>
  );
}

export default App;
