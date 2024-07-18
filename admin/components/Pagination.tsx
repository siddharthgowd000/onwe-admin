"use client"
import React from "react";

const Pagination: React.FC = () => {
  return (
    <nav
      className="flex gap-3.5 self-center px-5 mt-16 text-xs font-medium tracking-normal leading-3 text-gray-700 whitespace-nowrap max-md:mt-10"
      aria-label="Pagination"
    >
      <button
        className="justify-center px-2 py-1.5 text-xs tracking-normal rounded border border-solid bg-neutral-100 border-zinc-100"
        aria-label="Previous page"
      >
        &lt;
      </button>
      <button
        className="justify-center px-2.5 py-1.5 rounded bg-zinc-900 text-slate-50"
        aria-current="page"
      >
        1
      </button>
      <button className="justify-center px-2.5 py-1.5 rounded border border-solid bg-neutral-100 border-zinc-100">
        2
      </button>
      <button className="justify-center items-center px-2 rounded border border-solid bg-neutral-100 border-zinc-100 h-[23px] w-[23px]">
        3
      </button>
      <button className="justify-center px-2.5 py-1.5 rounded border border-solid bg-neutral-100 border-zinc-100">
        4
      </button>
      <span className="self-start mt-4 text-xs tracking-normal text-black">
        ...
      </span>
      <button className="justify-center items-center px-1.5 rounded border border-solid bg-neutral-100 border-zinc-100 h-[23px] w-[23px]">
        40
      </button>
      <button
        className="justify-center px-2 py-1.5 text-xs tracking-normal rounded border border-solid bg-neutral-100 border-zinc-100"
        aria-label="Next page"
      >
        &gt;
      </button>
    </nav>
  );
};

export default Pagination;
