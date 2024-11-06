import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Backend Developer",
          "Machine Learning Trainer",
          "Virginia Tech Student",
          "Seeking for AI/ML Internship",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
