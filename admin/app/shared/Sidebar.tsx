"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image, { StaticImageData } from 'next/image';
import mdi_user from "../../assets/sidebar/mdi_user (3).png";
import solar_posts from "../../assets/sidebar/solar_posts-carousel-vertical-bold.png";
import vector1 from "../../assets/sidebar/Vector (1).png";
import vector2 from "../../assets/sidebar/Vector (2).png";
import vector from "../../assets/sidebar/Vector.png";

import mdi_user_black from "../../assets/sidebar/black/mdi_user (1).png";
import solar_posts_black from "../../assets/sidebar/black/solar_posts-carousel-vertical-bold (2).png";
import vector1_black from "../../assets/sidebar/black/Vector.png";
import vector2_black from "../../assets/sidebar/black/Vector (6).png";
import vector_black from "../../assets/sidebar/black/Vector (5).png";

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState("Users");
  const router = useRouter();

  const handleItemClick = (item: string, route: string) => {
    setActiveItem(item);
    router.push(route);
  };

  const items = [
    { text: "Users", icon: mdi_user, iconActive: mdi_user_black, route: "/users" },
    { text: "Posts", icon: solar_posts, iconActive: solar_posts_black, route: "/posts" },
    { text: "Clubs", icon: vector1, iconActive: vector1_black, route: "/clubs" },
    { text: "Events", icon: vector2, iconActive: vector2_black, route: "/events" },
    { text: "Magazines", icon: vector, iconActive: vector_black, route: "/magazines" },
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-[16%] bg-zinc-900 text-slate-50 shadow-sm ">
      <nav className="flex flex-col h-full px-2.5 pt-10 pb-20 text-sm font-medium whitespace-nowrap">
        <div className="self-center text-2xl font-bold tracking-normal leading-7 mb-[40px]">
          OnwE
        </div>
        {items.map((item) => (
          <SidebarItem
            key={item.text}
            icon={activeItem === item.text ? item.iconActive : item.icon}
            text={item.text}
            active={activeItem === item.text}
            onClick={() => handleItemClick(item.text, item.route)}
          />
        ))}
      </nav>
    </aside>
  );
};

interface SidebarItemProps {
  icon: StaticImageData;
  text: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  text,
  active,
  onClick,
}) => {
  const baseClasses = "flex gap-2.5 py-2.5 pr-2.5 pl-8 mt-2.5 rounded-xl";
  const activeClasses = active ? "bg-slate-50 text-zinc-900" : "bg-zinc-900";

  return (
    <div onClick={onClick} className={`${baseClasses} ${activeClasses} cursor-pointer`}>
      <Image
        loading="lazy"
        src={icon}
        alt={text}
        className="shrink-0 self-start w-4 aspect-square"
      />
      <div>{text}</div>
    </div>
  );
};

export default Sidebar;
