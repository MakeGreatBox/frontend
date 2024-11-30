
import React from "react";
import Navbar from "@/components/Navbar/Navbar";

const Page: React.FC = () => {
  return (
    <div>
      {/* Include Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="content">
        <h1>Welcome to My Web App</h1>
        <p>This is the homepage!</p>
      </div>
    </div>
  );
};

export default Page;
