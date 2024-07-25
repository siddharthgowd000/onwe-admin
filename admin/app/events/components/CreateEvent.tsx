import React, { useState } from 'react';

interface CreateEventProps {
  onClose: () => void;
  onSubmit: (eventData: EventData) => void;
}

interface EventData {
  name: string;
  category: string;
  date: string;
  time: string;
  description: string;
  poster: File | null;
}

const CreateEvent: React.FC<CreateEventProps> = ({ onClose, onSubmit }) => {
  const [eventData, setEventData] = useState<EventData>({
    name: '',
    category: 'EDM',
    date: '',
    time: '08:00 PM',
    description: '',
    poster: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEventData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setEventData(prevData => ({ ...prevData, poster: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(eventData);
  };

  return (
    <form className="flex flex-col p-5 text-xs font-semibold bg-white rounded-xl shadow-sm w-[450px] text-zinc-900" onSubmit={handleSubmit}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/25a2f2826cb1ee2263c8f654e41b3e345f3bea8ea347c1f7a4fe096412edcb77?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0"
        className="self-end w-5 aspect-square cursor-pointer"
        alt="Close"
        onClick={onClose}
      />
      <h1 className="mt-2.5 text-xl text-center">Create Event</h1>
      
      <div className="mt-8">
        <p className="text-center">Upload Poster</p>
        <label htmlFor="poster-upload" className="block cursor-pointer flex justify-center mb-3">
          <img
            loading="lazy"
            src={eventData.poster ? URL.createObjectURL(eventData.poster) : "https://cdn.builder.io/api/v1/image/assets/TEMP/b1a83bdb5f936ad21f8fcd4c97d152a82f3920a9f2badad850a2a8b882a9d7af?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0"}
            className="self-center mt-1.5 max-w-full rounded-xl border border-dashed aspect-square border-zinc-900 w-[107px]"
            alt="Upload poster"
          />
          <input
            type="file"
            id="poster-upload"
            name="poster"
            accept="image/*"
            className="sr-only"
            onChange={handleFileChange}
          />
        </label>
      </div>

      <div className="mt-2.5">
        <label htmlFor="event-name" className="block">Event Name</label>
        <input
          type="text"
          id="event-name"
          name="name"
          placeholder="Name"
          value={eventData.name}
          onChange={handleInputChange}
          className="px-2.5 py-2.5 mt-1.5 w-full text-xs whitespace-nowrap bg-white rounded-md border border-solid border-zinc-100 text-stone-800"
        />
      </div>

      <div className="mt-2.5">
        <label htmlFor="category" className="block">Category</label>
        <div className="relative">
          <select
            id="category"
            name="category"
            value={eventData.category}
            onChange={handleInputChange}
            className="flex gap-5 justify-between px-2.5 py-2.5 mt-1.5 w-full text-xs whitespace-nowrap bg-white rounded-md border border-solid border-zinc-100 text-stone-800 appearance-none"
          >
            <option value="General">General</option>
            {/* Add other categories here */}
          </select>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0ed9fb14f3334e2f3649948296fc1a2c1e5a45d7bab9832a8fd1333544c671e?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0" className="absolute right-2.5 top-1/2 transform -translate-y-1/2 w-[9px] aspect-square pointer-events-none" alt="" />
        </div>
      </div>

      <div className="mt-2.5">
        <label htmlFor="date" className="block">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={eventData.date}
          onChange={handleInputChange}
          className="px-2.5 py-2.5 mt-1.5 w-full text-xs whitespace-nowrap bg-white rounded-md border border-solid border-zinc-100 text-stone-800"
        />
      </div>

      <div className="mt-2.5">
        <label htmlFor="time" className="block">Time</label>
        <div className="relative">
          <input
            id="time"
            name="time"
            value={eventData.time}
            onChange={handleInputChange}
            className="flex gap-5 justify-between px-2.5 py-2.5 mt-1.5 w-full text-xs whitespace-nowrap bg-white rounded-md border border-solid border-zinc-100 text-stone-800"
          />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0ed9fb14f3334e2f3649948296fc1a2c1e5a45d7bab9832a8fd1333544c671e?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0" className="absolute right-2.5 top-1/2 transform -translate-y-1/2 w-[9px] aspect-square pointer-events-none" alt="" />
        </div>
      </div>

      <div className="mt-2.5">
        <label htmlFor="description" className="block">Description (optional)</label>
        <textarea
          id="description"
          name="description"
          placeholder="What is the event about?"
          value={eventData.description}
          onChange={handleInputChange}
          className="px-2.5 py-2.5 mt-1.5 w-full text-xs bg-white rounded-md border border-solid border-zinc-100 text-stone-800"
        />
      </div>

      <button
        type="submit"
        className="self-center px-5 py-2.5 mt-2.5 text-sm text-white whitespace-nowrap bg-emerald-600 rounded-xl shadow-sm"
      >
        Create
      </button>
    </form>
  );
};

export default CreateEvent;
