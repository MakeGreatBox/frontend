"use client";
import React, { useEffect, useState } from "react";

const Cards: React.FC = () => {
  const [cards, setCards] = useState<any[]>([]); // State to store the fetched data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState<string | null>(null); // State to handle errors
  useEffect(() => {
    const fetchCards = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/cards");
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const data = await response.json();
            setCards(data); // Update state with the fetched data
        } catch (err: any) {
            setError(err.message); // Update error state if an error occurs
        } finally {
            setLoading(false); // After fetch is complete, set loading to false
        }
    };

    fetchCards();
}, []); // Empty array means this effect runs once on component mount

// Display loading message while data is being fetched
if (loading) {
    return <div className="p-4 text-center text-gray-500">Loading...</div>;
}

// Display error message if fetch fails
if (error) {
    return <div className="p-4 text-center text-red-500">Error: {error}</div>;
}
  const velocity = 0.25; // You can change this to 1, 2, or 3 to see the different outcomes

  const getNumberForAnswer = (answer: number) => {
    switch (answer) {
      case 0.20:
        return 0.15;
      case 0.25:
        return 0.23;
      case 0.27:
        return 0.25;
      default:
        return 0; // Default value if no valid answer
    }
  };

  return (
    <div>
    <div className="flex justify-center mb-8">
      <div className="flex flex-wrap justify-center space-x-8 space-y-8 md:space-y-0">
        <div className="p-6 bg-gray-50 rounded-lg shadow-md w-full md:w-40 ml-8">
        {cards.map((item, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-md w-full md:w-40">
              <h2 className="text-2xl font-semibold text-gray-800">Velocity</h2>
              <p className="text-gray-600">Value: {item.boxespersecond} boxes/second</p>
            </div>
          ))}
        </div>
        <div className="p-6 bg-gray-50 rounded-lg shadow-md w-full md:w-40">
          {cards.map((item, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-md w-full md:w-40">
              <h2 className="text-2xl font-semibold text-gray-800">Boxes</h2>
              <p className="text-gray-600">Value: {item.boxes} units</p>
            </div>
          ))}
        </div>
        <div className="p-6 bg-gray-50 rounded-lg shadow-md w-full md:w-40">
         {cards.map((item, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-md w-full md:w-40">
              <h2 className="text-2xl font-semibold text-gray-800">Failure Boxes</h2>
              <p className="text-gray-600">Value: {item.f_boxes} units</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="flex justify-center mt-8">
      <div className="flex flex-wrap justify-center space-x-8 space-y-8 md:space-y-0">
        <div className="p-6 bg-gray-50 rounded-lg shadow-md w-full md:w-40 ml-8">
          {cards.map((item, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-md w-full md:w-40">
              <h2 className="text-2xl font-semibold text-gray-800">Boxes</h2>
              <p className="text-gray-600">Value: {item.boxes} units</p>
            </div>
          ))}
        </div>
        <div className="p-6 bg-gray-50 rounded-lg shadow-md w-full md:w-40">
          <h2 className="text-2xl font-semibold text-gray-800">Speed</h2>
          <p className="text-gray-600">Value: 10 m/s</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-lg shadow-md w-full md:w-40">
          <h2 className="text-2xl font-semibold text-gray-800">Speed</h2>
          <p className="text-gray-600">Value: 10 m/s</p>
        </div>
      </div>
    </div>
    <br></br>
    </div>
  );
};

export default Cards;
