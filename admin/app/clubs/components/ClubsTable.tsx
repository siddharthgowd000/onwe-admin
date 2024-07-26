import React, { useState, useEffect } from "react";
import ClubView from "./ClubView"; 
import EditClubForm from "./EditClubForm"; 
import edit from "../../../assets/edit.png";
import delete1 from "../../../assets/delete.png"
import view from "../../../assets/view.png"
import Image from "next/image";

interface ClubData {
  name: string;
  admin: string;
  createdAt: string;
  members: string;
}

const clubData: ClubData[] = [
  // Your club data here
    { name: "Sports Club", admin: "Sports Club", createdAt: "Sports Club", members: "12/200"},
    { name: "Sports Club", admin: "Sports Club", createdAt: "Sports Club", members: "12/200"},
    { name: "Sports Club", admin: "Sports Club", createdAt: "Sports Club", members: "12/200"},
    { name: "Sports Club", admin: "Sports Club", createdAt: "Sports Club", members: "12/200"},
    { name: "Sports Club", admin: "Sports Club", createdAt: "Sports Club", members: "12/200"},
    { name: "Sports Club", admin: "Sports Club", createdAt: "Sports Club", members: "12/200"},
    { name: "Sports Club", admin: "Sports Club", createdAt: "Sports Club", members: "12/200"},
    { name: "Sports Club", admin: "Sports Club", createdAt: "Sports Club", members: "12/200"},
    { name: "Sports Club", admin: "Sports Club", createdAt: "Sports Club", members: "12/200"},
    { name: "Sports Club", admin: "Sports Club", createdAt: "Sports Club", members: "12/200"},
    { name: "Sports Club", admin: "Sports Club", createdAt: "Sports Club", members: "12/200"},
    { name: "Sports Club", admin: "Sports Club", createdAt: "Sports Club", members: "12/200"},
    { name: "Sports Club", admin: "Sports Club", createdAt: "Sports Club", members: "12/200"},
    { name: "Sports Club", admin: "Sports Club", createdAt: "Sports Club", members: "12/200"},
    { name: "Sports Club", admin: "Sports Club", createdAt: "Sports Club", members: "12/200"},
    { name: "Sports Club", admin: "Sports Club", createdAt: "Sports Club", members: "12/200"},
    { name: "Sports Club", admin: "Sports Club", createdAt: "Sports Club", members: "12/200"},

    { name: "Sports Club", admin: "Sports Club", createdAt: "Sports Club", members: "12/200"},
];

interface ClubTableProps {
  searchQuery: string;
}

const ClubTable: React.FC<ClubTableProps> = ({ searchQuery }) => {
  const [filteredData, setFilteredData] = useState<ClubData[]>(clubData);
  const [selectedClub, setSelectedClub] = useState<ClubData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [clubToDelete, setClubToDelete] = useState<ClubData | null>(null);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    setFilteredData(
      clubData.filter(
        (club) =>
          club.name.toLowerCase().includes(lowercasedQuery) ||
          club.admin.toLowerCase().includes(lowercasedQuery) ||
          club.createdAt.toLowerCase().includes(lowercasedQuery) ||
          club.members.toLowerCase().includes(lowercasedQuery)
      )
    );
  }, [searchQuery]);

  const handleViewClick = (club: ClubData) => {
    setSelectedClub(club);
    setIsModalOpen(true);
  };

  const handleEditClick = (club: ClubData) => {
    setSelectedClub(club);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (club: ClubData) => {
    setClubToDelete(club);
    setIsDeleteModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedClub(null);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedClub(null);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setClubToDelete(null);
  };

  const handleConfirmDelete = () => {
    if (clubToDelete) {
      setFilteredData(filteredData.filter((club) => club !== clubToDelete));
      handleCloseDeleteModal();
    }
  };

  const clubDetailsData = [
    { label: "Club Name:", value: selectedClub?.name },
    { label: "Admin:", value: selectedClub?.admin },
    { label: "Created At:", value: selectedClub?.createdAt },
    { label: "Members:", value: selectedClub?.members },
  ];

  return (
    <div className="flex flex-col h-[82vh] mt-6 mx-4">
      <div className="flex-1 overflow-auto">
        <table className="w-full text-base font-medium text-center border-separate border-spacing-0">
          <thead className="sticky top-0 bg-slate-50 text-black border-b border-solid border-stone-300">
            <tr>
              <th className="px-2.5 py-2 text-left border-b border-stone-300">Club Name</th>
              <th className="px-2.5 py-2 border-b border-stone-300">Admin</th>
              <th className="px-2.5 py-2 border-b border-stone-300">Created At</th>
              <th className="px-8 py-2 border-b border-stone-300">Members</th>
              <th className="px-10 py-2 border-b border-stone-300">Actions</th>
            </tr>
          </thead>
          <tbody className="text-zinc-500">
            {filteredData.length > 0 ? (
              filteredData.map((club, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-slate-50" : "bg-slate-100"}>
                  <td className="px-2.5 py-2 text-left">{club.name}</td>
                  <td className="px-2.5 py-2">{club.admin}</td>
                  <td className="px-2.5 py-2">{club.createdAt}</td>
                  <td className={`px-2.5 py-2 mt-5 rounded-2xl bg-clip-content w-3 ${
                    parseInt(club.members.split('/')[0]) < 150
                      ? 'text-red-400 bg-red-400 bg-opacity-30'
                      : 'text-emerald-600 bg-emerald-600 bg-opacity-30'
                    } max-md:px-5`}>
                    {club.members}
                  </td>
                  <td className="px-2.5 py-2">
                    <div className="flex gap-4 justify-center">
                      <button
                        className="flex justify-center items-center px-3 py-2.5 bg-white rounded-md"
                        onClick={() => handleViewClick(club)}
                      >
                        <Image
                          loading="lazy"
                          src={view}
                          alt="View Icon"
                          className="aspect-[1.28] fill-zinc-700 w-[18px]"
                        />
                      </button>
                      <button
                        className="flex justify-center items-center px-3.5 py-2.5 bg-white rounded-md"
                        onClick={() => handleEditClick(club)}
                      >
                        <Image
                          loading="lazy"
                          src={edit}
                          alt="Edit Icon"
                          className="w-3.5 aspect-[0.88] fill-indigo-400"
                        />
                      </button>
                      <button
                        className="flex justify-center items-center px-2.5 py-2 bg-white rounded-md"
                        onClick={() => handleDeleteClick(club)}
                      >
                        <Image
                          loading="lazy"
                          src={delete1}
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
                  No matching clubs found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Club View Modal */}
      {isModalOpen && selectedClub && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative w-auto max-w-auto p-5 bg-white rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-gray-800"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <ClubView
              clubName={selectedClub.name}
              sport="Sport Name" // Replace with actual sport data if available
              minMembers={10} // Replace with actual data if available
              maxMembers={20} // Replace with actual data if available
              admins={["Admin Name"]} // Replace with actual data if available
              description="Club description here" // Replace with actual data if available
              members={[
                {
                  name: "Siddharth",
                  username: "@siddhu",
                  isAdmin: true,
                  avatarSrc: "https://example.com/avatar.png", // Replace with actual data if available
                },
                {
                  name: "Siddharth",
                  username: "@siddhu",
                  isAdmin: false,
                  avatarSrc: "https://example.com/avatar.png", // Replace with actual data if available
                },
                {
                  name: "Siddharth",
                  username: "@siddhu",
                  isAdmin: false,
                  avatarSrc: "https://example.com/avatar.png", // Replace with actual data if available
                },
                {
                  name: "Siddharth",
                  username: "@siddhu",
                  isAdmin: false,
                  avatarSrc: "https://example.com/avatar.png", // Replace with actual data if available
                },
                {
                  name: "Siddharth",
                  username: "@siddhu",
                  isAdmin: false,
                  avatarSrc: "https://example.com/avatar.png", // Replace with actual data if available
                },
                {
                  name: "Siddharth",
                  username: "@siddhu",
                  isAdmin: false,
                  avatarSrc: "https://example.com/avatar.png", // Replace with actual data if available
                },
                {
                  name: "Siddharth",
                  username: "@siddhu",
                  isAdmin: false,
                  avatarSrc: "https://example.com/avatar.png", // Replace with actual data if available
                },
                // More member data
              ]}
            />
          </div>
        </div>
      )}

      {/* Edit Club Modal */}
      {isEditModalOpen && selectedClub && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative w-1/3 max-w-lg p-5 bg-white rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-gray-800"
              onClick={handleCloseEditModal}
            >
              &times;
            </button>
            <EditClubForm
              initialClubName={selectedClub.name}
              initialMembers={{
                total: parseInt(selectedClub.members.split('/')[0]),
                max: parseInt(selectedClub.members.split('/')[1]),
              }}
              initialAdmin={selectedClub.admin}
              onClose={handleCloseEditModal}
              onSave={(updatedClub) => {
                setFilteredData(
                  filteredData.map((club) =>
                    club === selectedClub ? updatedClub : club
                  )
                );
                handleCloseEditModal();
              }}
            />
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && clubToDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative w-1/3 max-w-lg p-5 bg-white rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-gray-800"
              onClick={handleCloseDeleteModal}
            >
              &times;
            </button>
            <h2 className="mb-4 text-xl font-semibold text-center">Delete Club</h2>
            <p className="mb-4 text-center">
              Are you sure you want to delete the club <strong>{clubToDelete.name}</strong>?
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

export default ClubTable;
