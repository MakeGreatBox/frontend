"use client";
import React, { useState, useEffect } from 'react';
import data from './data/card_data.json';  // Importing your JSON file

// Define the type for the data
interface Item {
  id: string;
  value: number;
}

const Cards: React.FC = () => {
  // State to hold the data
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setItems([data]);  // Set the data (assuming only one object)
  }, []);

  return (
      <div className="space-y-6 w-3/12 flex">
        {items.map((item) => (
          <div key={item.id} className="p-6 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">{item.id}</h2>
            <p className="text-gray-600">Value: {item.value} m/s</p>
          </div>
        ))}
      </div>
  );
};

export default Cards;
