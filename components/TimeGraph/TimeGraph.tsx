"use client";
import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, LineController } from 'chart.js';  // Import required components

// Register the components with Chart.js
Chart.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineController  // Register the LineController for line charts
);

import data from './data/timegraph_data.json';  // Correct way to import JSON data

const TimeGraph: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels: data.labels,  // Access the labels from the imported JSON
          datasets: [
            {
              label: 'Time Series Data',
              data: data.values,  // Access the values from the imported JSON
              borderColor: 'rgb(75, 192, 192)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              tension: 0.1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Time Series Graph',
            },
          },
          scales: {
            x: {
              type: 'category',  // Use category scale for x-axis
              title: {
                display: true,
                text: 'Date',
              },
            },
            y: {
              type: 'linear',  // Use linear scale for y-axis
              title: {
                display: true,
                text: 'Value',
              },
            },
          },
        },
      });
    }
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Time Series Graph</h1>
      <div className="max-w-3xl mx-auto">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default TimeGraph;
