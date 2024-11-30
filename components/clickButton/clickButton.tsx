// components/ClickButton.tsx
"use client"; // Required for client-side interactivity
import React from "react";

type ClickButtonProps = {
  label: string;
  onClick: () => void;
};

const ClickButton: React.FC<ClickButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-colors"
    >
      {label}
    </button>
  );
};

export default ClickButton;
