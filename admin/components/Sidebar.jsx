"use client"
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
      <nav className="flex flex-col grow px-2.5 pt-10 pb-20 mx-auto w-full text-sm font-medium whitespace-nowrap shadow-sm bg-zinc-900 text-slate-50">
        <div className="self-center text-2xl font-bold tracking-normal leading-7">
          onwe
        </div>
        <SidebarItem
          icon=""
          text="Users"
          active
        />
        <SidebarItem
          icon=""
          text="Posts"
          hasSubmenu
        />
        <SidebarItem
          icon=""
          text="Clubs"
          hasSubmenu
        />
        <SidebarItem
          icon=""
          text="Events"
        />
        <SidebarItem
          icon=""
          text="Magazine"
          hasSubmenu
        />
      </nav>
    </aside>
  );
};

interface SidebarItemProps {
  icon: string;
  text: string;
  active?: boolean;
  hasSubmenu?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  text,
  active,
  hasSubmenu,
}) => {
  const baseClasses =
    "flex gap-2.5 py-2.5 pr-2.5 pl-8 mt-2.5 rounded-xl max-md:px-5";
  const activeClasses = active ? "bg-slate-50 text-zinc-900" : "bg-zinc-900";

  return (
    <div className={`${baseClasses} ${activeClasses}`}>
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="shrink-0 self-start w-4 aspect-square"
      />
      <div>{text}</div>
      {hasSubmenu && (
        <img
          loading="lazy"
          src=""
          alt=""
          className="shrink-0 my-auto aspect-square w-[9px] ml-auto"
        />
      )}
    </div>
  );
};

export default Sidebar;
