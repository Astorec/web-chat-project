import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [text, setText] = useState("");
  const [msg, setMsg] = useState({ message: ''});

  const handleSubmit = (event) => {
    event.preventDefault();
    setText('');
  };

  return (
    <div onSubmit={handleSubmit}>
      <div className="msgBox">
        <input
          id="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit" onSubmit={() => setMsg(text)}>
          Send
        </button>
      </div>
      <div className="chatBox">
        <p>{msg}</p>
      </div>
    </div>
  );

}
