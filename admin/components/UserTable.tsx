"use client"
import React from "react";

interface User {
  name: string;
  email: string;
  username: string;
  dateJoined: string;
}

const users: User[] = [
  {
    name: "Hazel Garcia",
    email: "haze@mail.com",
    username: "@hazel.gracia20",
    dateJoined: "22/08/2024",
  },
  {
    name: "Hazel Garcia",
    email: "haze@mail.com",
    username: "@hazel.gracia20",
    dateJoined: "22/08/2024",
  },
  {
    name: "Hazel Garcia",
    email: "haze@mail.com",
    username: "@hazel.gracia20",
    dateJoined: "22/08/2024",
  },
  {
    name: "Hazel Garcia",
    email: "haze@mail.com",
    username: "@hazel.gracia20",
    dateJoined: "22/08/2024",
  },
  {
    name: "Hazel Garcia",
    email: "haze@mail.com",
    username: "@hazel.gracia20",
    dateJoined: "22/08/2024",
  },
  {
    name: "Hazel Garcia",
    email: "haze@mail.com",
    username: "@hazel.gracia20",
    dateJoined: "22/08/2024",
  },
  {
    name: "Hazel Garcia",
    email: "haze@mail.com",
    username: "@hazel.gracia20",
    dateJoined: "22/08/2024",
  },
  {
    name: "Hazel Garcia",
    email: "haze@mail.com",
    username: "@hazel.gracia20",
    dateJoined: "22/08/2024",
  },
  {
    name: "Hazel Garcia",
    email: "haze@mail.com",
    username: "@hazel.gracia20",
    dateJoined: "22/08/2024",
  },
  {
    name: "Hazel Garcia",
    email: "haze@mail.com",
    username: "@hazel.gracia20",
    dateJoined: "22/08/2024",
  },
];

const UserTable: React.FC = () => {
  return (
    <div className="flex gap-5 justify-between mx-6 mt-8 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
      <table className="w-full text-base font-medium text-center">
        <thead>
          <tr className="text-black border-b border-solid border-stone-300">
            <th className="px-2.5 py-2 text-left">Name</th>
            <th className="px-2.5 py-2">Email</th>
            <th className="px-2.5 py-2">Username</th>
            <th className="px-8 py-2 max-md:px-5">
              Date Joined
              <img
                loading="lazy"
                src=""
                alt=""
                className="inline-block ml-2 shrink-0 aspect-square w-[18px]"
              />
            </th>
            <th className="px-10 py-2 max-md:px-5">Actions</th>
          </tr>
        </thead>
        <tbody className="text-zinc-500">
          {users.map((user, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-slate-50" : ""}>
              <td className="px-2.5 py-2 text-left">{user.name}</td>
              <td className="px-2.5 py-2">{user.email}</td>
              <td className="px-2.5 py-2">{user.username}</td>
              <td className="px-2.5 py-2">{user.dateJoined}</td>
              <td className="px-2.5 py-2">
                <div className="flex gap-4 justify-center">
                  <button className="flex justify-center items-center px-3 py-2.5 bg-white rounded-md">
                    <img
                      loading="lazy"
                      src=""
                      alt="View"
                      className="aspect-[1.28] fill-zinc-700 w-[18px]"
                    />
                  </button>
                  <button className="flex justify-center items-center px-3.5 py-2.5 bg-white rounded-md">
                    <img
                      loading="lazy"
                      src=""
                      alt="Edit"
                      className="w-3.5 aspect-[0.88] fill-indigo-400"
                    />
                  </button>
                  <button className="flex justify-center items-center px-2.5 py-2 bg-white rounded-md">
                    <img
                      loading="lazy"
                      src=""
                      alt="Delete"
                      className="w-5 aspect-square"
                    />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
