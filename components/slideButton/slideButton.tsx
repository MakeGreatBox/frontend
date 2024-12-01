"use client"; // Enables client-side interactivity
import React, { useState } from "react";

interface SlideButtonProps {
  disabled: boolean; // Add a disabled prop
}

const SlideButton: React.FC<SlideButtonProps> = ({ disabled }) => {
  const [isOn, setIsOn] = useState(false);

  const toggleButton = () => {
    if (!disabled) {
      setIsOn((prev) => !prev);
    }
  };

  return (
    <div
      className={`w-20 h-10 flex items-center px-1 rounded-full cursor-pointer transition-colors ${
        isOn ? "bg-green-500" : "bg-gray-300"
      } ${disabled ? "cursor-not-allowed opacity-50" : ""}`} // Add styling for the disabled state
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
