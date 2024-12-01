"use client"; // Enables client-side interactivity
import React, { useState } from "react";

interface SlideButtonProps {
  disabled: boolean; // Add a disabled prop
}

const SlideButton: React.FC<SlideButtonProps> = ({ disabled }) => {
  const [isOn, setIsOn] = useState(false);

  const toggleButton = async () => {
    if (!disabled) {
      // Toggle the button state
      const newState = !isOn;
      setIsOn(newState);

      // Send the state (true or false) to the server
      try {
        const response = await fetch('http://100.96.163.57:8000/buttonState', {
          method: 'POST', // Using POST as we are sending data
          headers: {
            'Content-Type': 'application/json', // Content type is JSON
          },
          body: JSON.stringify({ state: newState }), // Send the state as part of the request body
        });

        if (!response.ok) {
          console.error('Error sending data:', response.statusText);
        } else {
          const data = await response.json();
          console.log('Server response:', data); // Handle response if necessary
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      }
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
