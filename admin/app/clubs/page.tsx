"use client";
import React, { useState } from "react";
import Sidebar from "../shared/Sidebar";
import Header from "./components/Header";
import ClubTable from "./components/ClubsTable";
import Modal from "./components/Modal"; // Ensure to import the Modal component
// import ClubView from "./components/ClubView";

const ClubsDashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCreate = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-slate-50 h-screen flex">
      <Sidebar/>
      <main className="flex flex-col w-full ml-[16%] pt-[4rem]">
        <Header onSearch={handleSearch} onCreate={handleCreate} />
        <div className="flex-grow">
          <div className="text-2xl font-bold text-gray-800">All Clubs</div>
          <ClubTable searchQuery={searchQuery} />
        </div>
        {isModalOpen && <Modal onClose={handleCloseModal} />}
      </main>
    </div>
  );
};

export default ClubsDashboard;
