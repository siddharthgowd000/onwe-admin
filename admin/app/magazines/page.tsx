"use client";
import React, { useState } from "react";
import Sidebar from "../shared/Sidebar";
import Header from "./components/Header";
import MagazineSection from "./components/MagazineSection";
import CreateMagazine from "./components/CreateMagazine";


const MagazineDashboard: React.FC = () => {
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
   
      <main className="flex flex-col w-full  pt-[4rem]">
        <Header onSearch={handleSearch} onCreate={handleCreate} />
        <div className="flex">
          <MagazineSection searchQuery={searchQuery} />
          
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <CreateMagazine onClose={handleCloseModal} />
          </div>
        )}
      </main>
    
  );
};

export default MagazineDashboard;
