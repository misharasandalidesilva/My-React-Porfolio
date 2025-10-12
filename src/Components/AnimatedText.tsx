import React from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  return (
    <h1 className={`flex flex-wrap justify-center text-center font-black ${className}`}>
      {text.split("").map((char, idx) => (
        <span
          key={idx}
          className="inline-block opacity-0 animate-fade-in-up"
          style={{ animationDelay: `${idx * 0.05}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedText;
