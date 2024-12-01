"use client";
import React from 'react';

const Cards: React.FC = () => {
  return (
    <div>
    <div className="flex justify-center mb-8">
      <div className="flex flex-wrap justify-center space-x-8 space-y-8 md:space-y-0">
        <div className="p-6 bg-gray-50 rounded-lg shadow-md w-full md:w-40 ml-8">
          <h2 className="text-2xl font-semibold text-gray-800">Speed</h2>
          <p className="text-gray-600">Value: 10 m/s</p>
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
    <div className="flex justify-center mt-8">
      <div className="flex flex-wrap justify-center space-x-8 space-y-8 md:space-y-0">
        <div className="p-6 bg-gray-50 rounded-lg shadow-md w-full md:w-40 ml-8">
          <h2 className="text-2xl font-semibold text-gray-800">Speed</h2>
          <p className="text-gray-600">Value: 10 m/s</p>
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
