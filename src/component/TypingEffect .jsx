//Writing Effect Component used in the Header

import { useState, useEffect } from "react";

export default function TypingEffect() {
  const words = ["Front-End", "Back-End", "Full-Stack"];
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150; // Writing speed
  const deletingSpeed = 80; // Erase speed
  const delayBetweenWords = 1000; // Pause before changing words

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true), delayBetweenWords);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }
  }, [text, isDeleting, wordIndex]);

  return (
    <div className="relative flex flex-col items-center gap-4 text-2xl font-bold text-center md:text-4xl lg:text-6xl">
      <h1 className="text-white">Fernando Mejía Desarrollador </h1>
      <div className="p-4 bg-white rounded-tl-3xl rounded-br-3xl">
        <span className="pr-2 text-black border-r-2 border-black md:text-5xl lg:text-7xl">{`${text}`}</span>
      </div>
    </div>
  );
}
