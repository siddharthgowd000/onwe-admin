"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
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

// Example avatar image
import user_avatar from "../../assets/210303124548.jpg";
import loggout from "../../assets/ic_round-logout.png";

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Map the pathname to the corresponding item text
    const itemMap: Record<string, string> = {
      "/users": "Users",
      "/posts": "Posts",
      "/clubs": "Clubs",
      "/events": "Events",
      "/magazines": "Magazines",
      "/profile": "Profile",
      "/logout": "Logout",
    };
    setActiveItem(itemMap[pathname] || "");
  }, [pathname]);

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
    <aside className="fixed top-0 left-0 h-screen w-[16%] bg-zinc-900 text-slate-50 shadow-sm flex flex-col justify-between">
      <nav className="flex flex-col h-full px-2.5 pt-10 pb-20 text-sm font-medium whitespace-nowrap">
        <div className="self-center text-2xl font-bold tracking-normal leading-7 mb-[40px]">
          OnwE
        </div>
        <div className="flex-1">
          {items.map((item) => (
            <SidebarItem
              key={item.text}
              icon={activeItem === item.text ? item.iconActive : item.icon}
              text={item.text}
              active={activeItem === item.text}
              onClick={() => handleItemClick(item.text, item.route)}
            />
          ))}
        </div>
      </nav>
      <div className="flex flex-col pb-10">
        <SidebarItem
          key="Profile"
          icon={user_avatar}
          text="Siddharth"
          subtext="@siddhu"
          active={activeItem === "Profile"}
          onClick={() => handleItemClick("Profile", "/profile")}
        />
        <SidebarItem
          key="Logout"
          icon={loggout} // Use an appropriate logout icon here
          text="Logout"
          active={activeItem === "Logout"}
          onClick={() => handleItemClick("Logout", "/logout")}
        />
      </div>
    </aside>
  );
};

interface SidebarItemProps {
  icon: StaticImageData;
  text: string;
  subtext?: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  text,
  subtext,
  active,
  onClick,
}) => {
  const baseClasses = "flex items-center gap-2.5 py-2.5 pr-2.5 pl-8 mt-2.5 rounded-xl";
  const activeClasses = active ? "bg-white text-zinc-900" : "bg-zinc-900 text-slate-50";

  return (
    <div onClick={onClick} className={`${baseClasses} ${activeClasses} cursor-pointer`}>
      <Image
        loading="lazy"
        src={icon}
        alt={text}
        className="shrink-0 self-start w-4 aspect-square"
      />
      <div>
        <div>{text}</div>
        {subtext && <div className="text-xs text-slate-400">{subtext}</div>}
      </div>
    </div>
  );
};

export default Sidebar;
