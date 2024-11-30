
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import TimeGraph from "@/components/TimeGraph/TimeGraph";
import Cards from "@/components/TimeGraph/Cards";

const Page: React.FC = () => {
  return (
    <div>
      {/* Include Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="bg-gray-100 min-h-screen">
      <TimeGraph />
      <Cards/>
      </div>
    </div>
  );
};

export default Page;
