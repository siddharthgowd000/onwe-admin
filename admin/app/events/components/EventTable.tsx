import React, {useState} from 'react';

interface EventData {
  name: string;
  category: string;
  date: string;
}

interface EventTableProps {
  searchQuery: string;
  onSelectEvent: (event: EventData) => void;
}

const eventData: EventData[] = [
  { name: "Summer Night!", category: "EDM", date: "22/08/2024" },
  { name: "Art Club", category: "EDM", date: "22/08/2024" },
  { name: "Academia", category: "EDM", date: "22/08/2024" },
  { name: "Sports Club", category: "EDM", date: "22/08/2024" },
  { name: "Sports Club", category: "EDM", date: "22/08/2024" },
  { name: "Sports Club", category: "EDM", date: "22/08/2024" },
  { name: "Sports Club", category: "EDM", date: "22/08/2024" },
  { name: "Sports Club", category: "EDM", date: "22/08/2024" },
  { name: "Sports Club", category: "EDM", date: "22/08/2024" },
  { name: "Sports Club", category: "EDM", date: "22/08/2024" },
  { name: "Sports Club", category: "EDM", date: "22/08/2024" },
  { name: "Sid Club", category: "EDM", date: "10/08/2024" },
  { name: "Sports Club", category: "EDM", date: "22/08/2024" },
  { name: "Sports Club", category: "EDM", date: "22/08/2024" },
  { name: "Sports Club", category: "EDM", date: "22/08/2024" },
];

const EventTable: React.FC<EventTableProps> = ({ searchQuery, onSelectEvent }) => {

    const [filteredEvents, setFilteredEvents] = useState<EventData[]>(eventData);

  React.useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    setFilteredEvents(
      eventData.filter(event =>
        event.name.toLowerCase().includes(lowercasedQuery) ||
        event.category.toLowerCase().includes(lowercasedQuery) ||
        event.date.toLowerCase().includes(lowercasedQuery)
      )
    );
  }, [searchQuery]);

  return (
    <section className="flex flex-col w-[60%] max-md:ml-0 max-md:w-full mt-14 px-2 ml-[-8px]">
      <div className="max-md:mt-9 max-md:max-w-full ">
        <table className="w-full table-fixed border-collapse">
          <thead className="bg-gray-100 sticky top-0">
            <tr>
              <th className="px-2.5 py-2 font-semibold text-black text-center">Event Name</th>
              <th className="px-2.5 py-2 font-semibold text-black text-center">Category</th>
              <th className="px-2.5 py-2 font-semibold text-black text-center">Date</th>
              <th className="px-2.5 py-2 font-semibold text-black text-center">Action</th>
            </tr>
          </thead>
        </table>
        <div className="h-[78vh] overflow-y-auto">
          <table className="w-full table-fixed border-collapse">
            <tbody>
              {filteredEvents.map((event, index) => (
                <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-slate-100'}`}>
                  <td className="px-2.5 py-2 text-center">{event.name}</td>
                  <td className="px-2.5 py-2 text-center">{event.category}</td>
                  <td className="px-2.5 py-2 text-center">{event.date}</td>
                  <td className="px-2.5 py-2 flex justify-center">
                    <button 
                      className="flex justify-center items-center px-3 py-2.5 bg-zinc-700 rounded-md"
                      onClick={() => onSelectEvent(event)}
                    >
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc10bec00d6af9e9561930dd877483dd469d334416f67d6f0ee9f5ce40cfffe4?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0" alt="" className="aspect-[1.28] fill-white w-[18px]" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default EventTable;
