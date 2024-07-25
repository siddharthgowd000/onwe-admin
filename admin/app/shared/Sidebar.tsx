"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState("Users");
  const router = useRouter();

  const handleItemClick = (item: string, route: string) => {
    setActiveItem(item);
    router.push(route);
  };

  return (
    <aside className="fixed top-0 left-0 h-screen w-[16%] bg-zinc-900 text-slate-50 shadow-sm overflow-auto">
      <nav className="flex flex-col h-full px-2.5 pt-10 pb-20 text-sm font-medium whitespace-nowrap">
        <div className="self-center text-2xl font-bold tracking-normal leading-7 mb-[40px]">
          OnwE
        </div>
        <SidebarItem
          icon=""
          text="Users"
          active={activeItem === "Users"}
          onClick={() => handleItemClick("Users", "/users")}
        />
        <SidebarItem
          icon=""
          text="Posts"
          hasSubmenu
          active={activeItem === "Posts"}
          onClick={() => handleItemClick("Posts", "/posts")}
        />
        <SidebarItem
          icon=""
          text="Clubs"
          hasSubmenu
          active={activeItem === "Clubs"}
          onClick={() => handleItemClick("Clubs", "/clubs")}
        />
        <SidebarItem
          icon=""
          text="Events"
          active={activeItem === "Events"}
          onClick={() => handleItemClick("Events", "/events")}
        />
        <SidebarItem
          icon=""
          text="Magazine"
          hasSubmenu
          active={activeItem === "Magazine"}
          onClick={() => handleItemClick("Magazine", "/magazine")}
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
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  text,
  active,
  hasSubmenu,
  onClick,
}) => {
  const baseClasses = "flex gap-2.5 py-2.5 pr-2.5 pl-8 mt-2.5 rounded-xl";
  const activeClasses = active ? "bg-slate-50 text-zinc-900" : "bg-zinc-900";

  return (
    <div onClick={onClick} className={`${baseClasses} ${activeClasses} cursor-pointer`}>
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
