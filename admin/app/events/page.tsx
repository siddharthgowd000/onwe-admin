"use client";
import React, { useState } from "react";
import Sidebar from "../shared/Sidebar";
import Header from "./components/Header";
import EventTable from "./components/EventTable";
import EventDetails from "./components/EventDetails";
import CreateEvent from "./components/CreateEvent";

interface EventData {
    name: string;
    category: string;
    date: string;
    time: string;
    description: string;
    poster: File | null;
  }

const EventsDashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCreate = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectEvent = (event: EventData) => {
    setSelectedEvent(event);
  };

  const handleEditEvent = () => {
    console.log("Edit event");
    // Implement edit event functionality here
  };

  const handleDeleteEvent = () => {
    console.log("Delete event");
    // Implement delete event functionality here
  };

  return (
      <main className="flex flex-col w-full  pt-[4rem]">
        <Header onSearch={handleSearch} onCreate={handleCreate} />
        <div className="flex">
          <EventTable searchQuery={searchQuery} onSelectEvent={handleSelectEvent} />
          <EventDetails selectedEvent={selectedEvent} onEdit={handleEditEvent} onDelete={handleDeleteEvent} />
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <CreateEvent onClose={handleCloseModal} onSubmit={(data) => {
              // Handle event creation here
              handleCloseModal();
            }} />
          </div>
        )}
      </main>
  );
};

export default EventsDashboard;
