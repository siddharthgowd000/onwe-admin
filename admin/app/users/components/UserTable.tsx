"use client";
import React, { useState } from "react";

interface User {
  name: string;
  email: string;
  username: string;
  dateJoined: string;
}

const allUsers: User[] = [
  {
    name: "Hazel Garcia",
    email: "haze@mail.com",
    username: "@hazel.gracia20",
    dateJoined: "22/08/2024",
  },
  {
    name: "Sai Nnadu Garcia",
    email: "nandu@mail.com",
    username: "@sai.nandu20",
    dateJoined: "10/08/2024",
  },
  {
    name: "Siddhu Garcia",
    email: "sid@mail.com",
    username: "@sid.gracia20",
    dateJoined: "10/08/2024",
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
  // Add more users as needed
];

const UserTable: React.FC<{ searchQuery: string }> = ({ searchQuery }) => {
  const [filteredUsers, setFilteredUsers] = useState<User[]>(allUsers);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);

  const handleViewClick = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (user: User) => {
    setUserToDelete(user);
    setIsDeleteModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setUserToDelete(null);
  };

  const handleConfirmDelete = () => {
    if (userToDelete) {
      setFilteredUsers(filteredUsers.filter(user => user !== userToDelete));
      handleCloseDeleteModal();
    }
  };

  React.useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    setFilteredUsers(
      allUsers.filter(user =>
        user.name.toLowerCase().includes(lowercasedQuery) ||
        user.email.toLowerCase().includes(lowercasedQuery) ||
        user.username.toLowerCase().includes(lowercasedQuery) ||
        user.dateJoined.toLowerCase().includes(lowercasedQuery)
      )
    );
  }, [searchQuery]);

  const userDetailsData = [
    { label: "Username:", value: selectedUser?.username },
    { label: "Email:", value: selectedUser?.email },
    { label: "Full Name:", value: selectedUser?.name },
    { label: "Date Joined:", value: selectedUser?.dateJoined },
    { label: "Avatar:", value: "Hazel Garcia" },
    { label: "Bio:", value: "@hazel.garcia20" },
    { label: "Department:", value: "B.Tech" },
    { label: "Role:", value: "Member" },
  ];

  return (
    <div className="flex flex-col h-[82vh] mt-14 mx-6 overflow-hidden">
      <div className="flex-1 overflow-auto">
        <table className="w-full text-base font-medium text-center border-separate border-spacing-0">
          <thead className="sticky top-0 bg-slate-50 text-black border-b border-solid border-stone-300">
            <tr>
              <th className="px-2.5 py-2 text-left">Name</th>
              <th className="px-2.5 py-2">Email</th>
              <th className="px-2.5 py-2">Username</th>
              <th className="px-8 py-2">
                Date Joined
              </th>
              <th className="px-10 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="text-zinc-500">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-slate-50" : ""}>
                  <td className="px-2.5 py-2 text-left">{user.name}</td>
                  <td className="px-2.5 py-2">{user.email}</td>
                  <td className="px-2.5 py-2">{user.username}</td>
                  <td className="px-2.5 py-2">{user.dateJoined}</td>
                  <td className="px-2.5 py-2">
                    <div className="flex gap-4 justify-center">
                      <button
                        className="flex justify-center items-center px-3 py-2.5 bg-white rounded-md"
                        onClick={() => handleViewClick(user)}
                      >
                        <img
                          loading="lazy"
                          src="" 
                          alt="View Icon"
                          className="aspect-[1.28] fill-zinc-700 w-[18px]"
                        />
                      </button>
                      <button className="flex justify-center items-center px-3.5 py-2.5 bg-white rounded-md">
                        <img
                          loading="lazy"
                          src="" 
                          alt="Edit Icon"
                          className="w-3.5 aspect-[0.88] fill-indigo-400"
                        />
                      </button>
                      <button
                        className="flex justify-center items-center px-2.5 py-2 bg-white rounded-md"
                        onClick={() => handleDeleteClick(user)}
                      >
                        <img
                          loading="lazy"
                          src="" 
                          alt="Delete Icon"
                          className="w-5 aspect-square"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-4 text-center text-gray-500">
                  No matching users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-left">
          <div className="relative w-1/3 p-5 bg-white rounded-lg">
            <button
              className="absolute top-1 right-3 text-xl font-bold"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <h2 className="mb-4 text-xl font-semibold text-center">User Details</h2>
            <ul className="flex flex-col items-start gap-2 self-stretch p-5">
              {userDetailsData.map((item, index) => (
                <li key={index} className="flex justify-between w-full border p-3">
                  <strong>{item.label} </strong> {item.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {isDeleteModalOpen && userToDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-left">
          <div className="relative w-1/3 p-5 bg-white rounded-lg">
            <button
              className="absolute top-1 right-3 text-xl font-bold"
              onClick={handleCloseDeleteModal}
            >
              &times;
            </button>
            <h2 className="mb-4 text-xl font-semibold text-center">Delete User</h2>
            <p className="mb-4 text-center">
              Are you sure you want to delete the user <strong>{userToDelete.username}</strong>?
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="px-4 py-2 bg-gray-200 rounded-md w-[100px]"
                onClick={handleCloseDeleteModal}
              >
                No
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md w-[100px]"
                onClick={handleConfirmDelete}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTable;
