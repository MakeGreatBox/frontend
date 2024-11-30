// components/SlideButton.tsx
"use client"; // Enables client-side interactivity
import React, { useState } from "react";

const SlideButton: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleButton = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div
      className={`w-20 h-10 flex items-center px-1 rounded-full cursor-pointer transition-colors ${
        isOn ? "bg-green-500" : "bg-gray-300"
      }`}
      onClick={toggleButton}
    >
      <div
        className={`w-8 h-8 bg-white rounded-full shadow-md transform transition-transform ${
          isOn ? "translate-x-10" : ""
        }`}
      />
    </div>
  );
};

export default SlideButton;
