"use client"
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex gap-5 justify-between p-5 w-full shadow-sm bg-slate-50 max-md:flex-wrap max-md:max-w-full">
      <h1 className="justify-center px-2.5 py-2 text-xl font-semibold text-black rounded-xl bg-slate-50">
        Admin Dashboard
      </h1>
      <div className="flex gap-5 text-sm whitespace-nowrap max-md:flex-wrap">
        <div className="flex gap-2.5 justify-between px-5 py-2.5 bg-white rounded-xl border border-solid border-stone-300 text-stone-300 max-md:flex-wrap max-md:max-w-full">
          <span>Username</span>
          <img
            loading="lazy"
            src=""
            alt=""
            className="shrink-0 self-start w-4 aspect-square"
          />
        </div>
        <button className="flex gap-2.5 px-5 py-2.5 font-semibold text-emerald-600 bg-green-200 rounded-xl shadow-sm">
          <img
            loading="lazy"
            src=""
            alt=""
            className="shrink-0 self-start w-4 aspect-square fill-green-200"
          />
          <span>Add</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
