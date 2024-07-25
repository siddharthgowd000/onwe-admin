"use client";
import React, { useState } from "react";

const Header: React.FC<{ onSearch: (query: string) => void; onCreate: () => void }> = ({ onSearch, onCreate }) => {
  const [search, setSearch] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearch(query);
    onSearch(query); // Trigger search in parent component
  };

  return (
    <header className="fixed top-0 left-30 w-[82%] p-5 shadow-sm bg-slate-50 z-20">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-black">Admin Dashboard</h1>
        <div className="flex items-center gap-5">
          <div className="flex items-center px-5 py-2.5 bg-white rounded-xl text-stone-300">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={handleSearchChange}
              className="w-full px-2 py-1 rounded-xl text-stone-600 border border-stone-300 outline-none"
            />
            <img
              loading="lazy"
              src="" 
              alt="Search Icon"
              className="shrink-0 w-4 aspect-square ml-2"
            />
          </div>
          <div className="flex gap-5 text-sm whitespace-nowrap">
            <button
              className="flex items-center  px-6 py-2.5 font-semibold text-emerald-600 bg-green-200 rounded-xl shadow-sm"
              onClick={onCreate}
            >
              <img
                loading="lazy"
                src="" 
                alt="Add Icon"
                className="shrink-0 w-4 aspect-square mr-2"
              />
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
