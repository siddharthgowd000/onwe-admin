"use client";
import React, { useState } from "react";
import Header from "../shared/Header";


const PostsDashboard: React.FC = () => {
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
         
          
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
           
          </div>
        )}
      </main>
    
  );
};

export default PostsDashboard;
