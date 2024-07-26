import React, { useState } from 'react';
import EventEditor from './EventEditor'; // Import the EventEditor component
import Image from 'next/image';
import edit from "../../../assets/edit.png";
import delete1 from "../../../assets/delete.png"

interface EventData {
  name: string;
  category: string;
  date: string;
  time: string;
  description: string;
  poster: File | null;
}

interface EventDetailsProps {
  selectedEvent: EventData | null;
  onEdit: () => void; // Function to handle edit
  onDelete: () => void; // Function to handle delete
}

const EventDetails: React.FC<EventDetailsProps> = ({ selectedEvent, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false); // State to control edit modal visibility
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State to control delete confirmation modal
  const [eventToDelete, setEventToDelete] = useState<EventData | null>(null); // State to hold event data for deletion

  const handleEdit = () => {
    setIsEditing(true); // Show the edit modal
  };

  const handleCloseEditModal = () => {
    setIsEditing(false); // Close the edit modal
  };

  const handleUpdateEvent = (updatedEvent: EventData) => {
    console.log('Updated event:', updatedEvent);
    // You can implement the logic to update the event details here
    setIsEditing(false); // Close the modal after updating
  };

  const handleOpenDeleteModal = () => {
    setEventToDelete(selectedEvent); // Set the event to delete
    setIsDeleteModalOpen(true); // Show the delete confirmation modal
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false); // Close the delete confirmation modal
    setEventToDelete(null); // Clear the event data
  };

  const handleConfirmDelete = () => {
    if (eventToDelete) {
      console.log('Deleting event:', eventToDelete);
      onDelete(); // Call the parent delete function
      handleCloseDeleteModal(); // Close the delete modal
    }
  };

  if (!selectedEvent) {
    return (
      <div className="flex flex-col items-center ml-5 w-[38%] max-md:ml-0 max-md:w-full mt-14">
        Select an event to see details
      </div>
    );
  }

  return (
    <aside className="relative flex flex-col items-center w-[38%] max-md:ml-0 max-md:w-full mt-14">
      <div className="flex flex-col grow p-5 sticky top-0 w-3/5 font-semibold text-black bg-white rounded-xl shadow-sm max-md:mt-9">
        <img
          loading="lazy"
          src={selectedEvent.poster ? URL.createObjectURL(selectedEvent.poster) : 'default-image.jpg'}
          alt="Event poster"
          className="w-full aspect-[1.02]"
        />
        <h2 className="mt-5 text-2xl text-center capitalize">{selectedEvent.name}</h2>
        <p className="mt-1 text-lg font-medium text-red-500 uppercase">{selectedEvent.date}</p>
        <p className="mt-5 text-sm">
          {selectedEvent.category} <br />
          {selectedEvent.description}
        </p>
        <button
          onClick={handleEdit}
          className="flex justify-center items-center px-16 py-2.5 mt-5 w-full text-xs whitespace-nowrap bg-white rounded-md border border-solid border-zinc-100 text-zinc-900 max-md:px-5"
        >
          <div className="flex gap-3.5">
            <Image
              loading="lazy"
              src = {edit}
              alt=""
              className="flex-1 shrink-0 w-full aspect-[0.88] fill-indigo-400"
            />
            <span>Edit</span>
          </div>
        </button>
        <button
          onClick={handleOpenDeleteModal}
          className="flex justify-center items-center px-16 py-2 mt-5 w-full text-xs whitespace-nowrap bg-white rounded-md border border-solid border-zinc-100 text-zinc-900 max-md:px-5"
        >
          <div className="flex gap-2.5">
            <Image
              loading="lazy"
              src = {delete1}
              alt=""
              className="shrink-0 w-5 aspect-square"
            />
            <span className="my-auto">Delete</span>
          </div>
        </button>
      </div>

      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <EventEditor
            event={selectedEvent}
            onSubmit={handleUpdateEvent}
            onClose={handleCloseEditModal}
          />
        </div>
      )}

      {isDeleteModalOpen && eventToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-1/3 p-5 bg-white rounded-lg">
            <button
              className="absolute top-1 right-3 text-xl font-bold"
              onClick={handleCloseDeleteModal}
            >
              &times;
            </button>
            <h2 className="mb-4 text-xl font-semibold text-center">Delete Event</h2>
            <p className="mb-4 text-center">
              Are you sure you want to delete the event <strong>{eventToDelete.name}</strong>?
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
    </aside>
  );
};

export default EventDetails;
