import React, { useState } from "react";

export default function Header(props) {
  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={toggleText}>Click Me</button>
      {showText && <p>{props.buttontext}</p>}
    </div>
  );
}
