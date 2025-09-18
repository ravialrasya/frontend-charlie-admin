import React from "react";
import Sidebar from "../../components/layout/sidebar";
import Header from "../../components/layout/header";

const BlankPage: React.FC = () => {
  return (
    <div className="flex bg-[#F6F6F8] font-sans">
      <Sidebar />

      <div className="w-full">
        <Header />

        {/* ISI CONTENT DISINI */}
      </div>
    </div>
  );
};

export default BlankPage;
