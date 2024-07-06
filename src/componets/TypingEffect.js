import React, { useEffect, useState } from "react";

const TypingEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      //cần delay 1s mới chạy
      setDisplayedText((prev) => prev + text.charAt(index));
      setIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeoutId);
  }, [index, text, speed]);

  return (
    <h1 className="mainTitle animate__animated animate__fadeInLeft">
      {displayedText}
    </h1>
  );
};

export default TypingEffect;
