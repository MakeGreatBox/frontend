// components/slider/Slider.tsx
"use client"; // This makes it a Client Component
import React, { useState, useEffect } from "react";

const Slider: React.FC = () => {
  const [value, setValue] = useState(1); // Initial value of the slider

  // sendData function that sends the value to the endpoint
  const sendData = async (value: number) => {
    try {
      // Send the value to the endpoint (make sure the URL is correct)
      const response = await fetch(`http://100.96.163.57:8000/speed/${value}`, {
        method: 'POST', // Change to 'GET' if you need a GET request
        headers: {
          'Content-Type': 'application/json', // Indicate that the body is JSON
        },
        body: JSON.stringify({ value }), // Send the value in the body of the request
      });

      // Handle the response if needed
      if (!response.ok) {
        console.error('Error sending data:', response.statusText);
      } else {
        const data = await response.json();
        console.log('Response data:', data);
      }
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  // UseEffect to send data when value changes
  useEffect(() => {
    sendData(value);
  }, [value]); // Trigger sendData whenever value changes

  // Handle change of the slider
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value)); // Update value when slider changes
  };

  return (
    <div className="flex items-center space-x-4 w-full h-10">
      <span className="text-black">{value}</span>
      <input
        type="range"
        min="1"
        max="3"
        value={value}
        onChange={handleChange} // Call handleChange to update value
        className="w-80 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer h-max" // Adjust width here
      />
      <span className="text-black">{value}</span>
    </div>
  );
};

export default Slider;
