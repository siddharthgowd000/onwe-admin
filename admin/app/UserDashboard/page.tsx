"use client"
import React from "react";
import Sidebar from "../../components/Sidebar"
import Header from "../../components/Header";
import UserTable from "../../components/UserTable";
import Pagination from "../../components/Pagination";

const UserDashboard: React.FC = () => {
  return (
    <div className="bg-slate-50">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <Sidebar />
        <main className="flex flex-col ml-5 w-[84%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col max-md:max-w-full">
            <Header />
            <UserTable />
            <Pagination />
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
