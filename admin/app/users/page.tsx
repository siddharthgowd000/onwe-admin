"use client";
import React, { useState } from "react";
import Sidebar from "../shared/Sidebar";
import Header from "./components/Header";
import UserTable from "./components/UserTable";
import AddUser from "./components/AddUser"; // Import AddUser component
import EventDetails from "../events/components/EventDetails";

const UserDashboard: React.FC = () => {
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
      <Sidebar />
      <main className="flex flex-col w-full ml-[16%] pt-[4rem]">
        <Header onSearch={handleSearch} onCreate={handleCreate} />
        <div className="flex">
          <UserTable searchQuery={searchQuery} />
          
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <AddUser onClose={handleCloseModal} />
          </div>
        )}
      </main>
    </div>
  );
};

export default UserDashboard;
