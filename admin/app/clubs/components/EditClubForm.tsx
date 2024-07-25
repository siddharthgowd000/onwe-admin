import React, { useState } from 'react';

interface EditClubFormProps {
  initialClubName: string;
  initialMembers: {
    total: number;
    max: number;
  };
  initialAdmin: string;
  initialDescription: string;
}

const EditClubForm: React.FC<EditClubFormProps> = ({
  initialClubName,
  initialMembers,
  initialAdmin,
  initialDescription,
}) => {
  const [clubName, setClubName] = useState(initialClubName);
  const [members, setMembers] = useState(initialMembers);
  const [admin, setAdmin] = useState(initialAdmin);
  const [description, setDescription] = useState(initialDescription);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-5 max-w-sm mx-auto bg-white rounded-xl shadow-sm"
    >
      <h1 className="text-xl font-semibold text-center mb-4">Edit Club</h1>
      
      <div className="mb-4">
        <label htmlFor="club-name" className="block text-sm font-medium mb-1">Club Name</label>
        <input
          type="text"
          id="club-name"
          value={clubName}
          onChange={(e) => setClubName(e.target.value)}
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Members</label>
        <div className="flex gap-2">
          <input
            type="number"
            value={members.total}
            onChange={(e) => setMembers({ ...members, total: parseInt(e.target.value) })}
            className="w-1/2 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Total"
          />
          <input
            type="number"
            value={members.max}
            onChange={(e) => setMembers({ ...members, max: parseInt(e.target.value) })}
            className="w-1/2 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Max"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="admin" className="block text-sm font-medium mb-1">Admin</label>
        <input
          type="text"
          id="admin"
          value={admin}
          onChange={(e) => setAdmin(e.target.value)}
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium mb-1">Description (optional)</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          rows={4}
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-md shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      >
        Save
      </button>
    </form>
  );
};

export default EditClubForm;
