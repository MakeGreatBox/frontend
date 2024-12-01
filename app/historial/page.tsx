// page.tsx
"use client";

import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect, useState } from "react";

const HistoryTable = () => {
    const [history, setHistory] = useState<any[]>([]); // State to store the fetched data
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState<string | null>(null); // State to handle errors

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/history");
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                setHistory(data); // Update state with the fetched data
            } catch (err: any) {
                setError(err.message); // Update error state if an error occurs
            } finally {
                setLoading(false); // After fetch is complete, set loading to false
            }
        };

        fetchHistory();
    }, []); // Empty array means this effect runs once on component mount

    // Display loading message while data is being fetched
    if (loading) {
        return <div className="p-4 text-center text-gray-500">Loading...</div>;
    }

    // Display error message if fetch fails
    if (error) {
        return <div className="p-4 text-center text-red-500">Error: {error}</div>;
    }

    return (
        <div>
            <Navbar/>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Historical Events</h1>
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b">Event</th>
                            <th className="px-4 py-2 border-b">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((item) => (
                            <tr key={item.id} className="odd:bg-gray-100 even:bg-gray-200">
                                <td className="px-4 py-2 border">{item.topic}</td>
                                <td className="px-4 py-2 border">{item.timestamp}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HistoryTable;
