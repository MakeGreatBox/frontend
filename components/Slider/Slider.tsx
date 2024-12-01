// components/slider/Slider.tsx
"use client"; // This makes it a Client Component
import React, { useState } from "react";

const Slider: React.FC = () => {
  const [value, setValue] = useState(1); // Initial value of the slider

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <div className="flex items-center space-x-4 w-full">
      <span className="text-black">{value}</span>
      <input
        type="range"
        min="1"
        max="5"
        value={value}
        onChange={handleChange}
        className="w-80 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer h-max" // Adjust width here
      />
      <span className="text-black">{value}</span>
    </div>
  );
};

export default Slider;
