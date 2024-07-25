import React, { useState, useMemo } from 'react';

import EditMagazine from './EditMagazine';

interface MagazineItem {
  id: number;
  image: string;
  title: string;
  date: string;
  description: string;
}

const magazineItems: MagazineItem[] = [
  {
    id: 1,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/64578ae9ef82679855e8860ed12c161de04e59bb4e19b30082d2a8d361c712cd?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0",
    title: "WHATS AROUND?",
    date: "MAGAZINE 03. SEP 02",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus tincidunt tortor et pharetra. Pellentesque congue dictum lacus."
  },
  {
    id: 2,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0785e3537a38d9a3f0861ccc3566d99fa995a24f7f210a475e37f47cf09a224d?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0",
    title: "CITY LIGHTS",
    date: "MAGAZINE 04. SEP 05",
    description: "Vivamus in libero vel nunc aliquam tincidunt. Sed euismod, nunc id aliquam tincidunt, nunc nunc tincidunt nunc, nec tincidunt nunc nunc id nunc."
  },
  {
    id: 3,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/64578ae9ef82679855e8860ed12c161de04e59bb4e19b30082d2a8d361c712cd?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0",
    title: "URBAN JUNGLE",
    date: "MAGAZINE 05. SEP 10",
    description: "Fusce quis justo vel nunc aliquam tincidunt. Sed euismod, nunc id aliquam tincidunt, nunc nunc tincidunt nunc, nec tincidunt nunc nunc id nunc."
  },
  {
    id: 4,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/64578ae9ef82679855e8860ed12c161de04e59bb4e19b30082d2a8d361c712cd?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0",
    title: "STREET ART",
    date: "MAGAZINE 06. SEP 15",
    description: "Donec quis justo vel nunc aliquam tincidunt. Sed euismod, nunc id aliquam tincidunt, nunc nunc tincidunt nunc, nec tincidunt nunc nunc id nunc."
  },
  {
    id: 5,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/64578ae9ef82679855e8860ed12c161de04e59bb4e19b30082d2a8d361c712cd?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0",
    title: "NIGHT LIFE",
    date: "MAGAZINE 07. SEP 20",
    description: "Curabitur quis justo vel nunc aliquam tincidunt. Sed euismod, nunc id aliquam tincidunt, nunc nunc tincidunt nunc, nec tincidunt nunc nunc id nunc."
  },
  {
    id: 6,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/64578ae9ef82679855e8860ed12c161de04e59bb4e19b30082d2a8d361c712cd?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0",
    title: "FOOD SCENE",
    date: "MAGAZINE 08. SEP 25",
    description: "Praesent quis justo vel nunc aliquam tincidunt. Sed euismod, nunc id aliquam tincidunt, nunc nunc tincidunt nunc, nec tincidunt nunc nunc id nunc."
  },
  {
    id: 7,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/64578ae9ef82679855e8860ed12c161de04e59bb4e19b30082d2a8d361c712cd?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0",
    title: "NIGHT LIFE",
    date: "MAGAZINE 07. SEP 20",
    description: "Curabitur quis justo vel nunc aliquam tincidunt. Sed euismod, nunc id aliquam tincidunt, nunc nunc tincidunt nunc, nec tincidunt nunc nunc id nunc."
  },
  {
    id: 8,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/64578ae9ef82679855e8860ed12c161de04e59bb4e19b30082d2a8d361c712cd?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0",
    title: "FOOD SCENE",
    date: "MAGAZINE 08. SEP 25",
    description: "Praesent quis justo vel nunc aliquam tincidunt. Sed euismod, nunc id aliquam tincidunt, nunc nunc tincidunt nunc, nec tincidunt nunc nunc id nunc."
  },{
    id: 9,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/64578ae9ef82679855e8860ed12c161de04e59bb4e19b30082d2a8d361c712cd?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0",
    title: "NIGHT LIFE",
    date: "MAGAZINE 07. SEP 20",
    description: "Curabitur quis justo vel nunc aliquam tincidunt. Sed euismod, nunc id aliquam tincidunt, nunc nunc tincidunt nunc, nec tincidunt nunc nunc id nunc."
  },
  {
    id: 10,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/64578ae9ef82679855e8860ed12c161de04e59bb4e19b30082d2a8d361c712cd?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0",
    title: "FOOD SCENE",
    date: "MAGAZINE 08. SEP 25",
    description: "Praesent quis justo vel nunc aliquam tincidunt. Sed euismod, nunc id aliquam tincidunt, nunc nunc tincidunt nunc, nec tincidunt nunc nunc id nunc."
  },
  {
    id: 11,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/64578ae9ef82679855e8860ed12c161de04e59bb4e19b30082d2a8d361c712cd?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0",
    title: "STREET ART",
    date: "MAGAZINE 06. SEP 15",
    description: "Donec quis justo vel nunc aliquam tincidunt. Sed euismod, nunc id aliquam tincidunt, nunc nunc tincidunt nunc, nec tincidunt nunc nunc id nunc."
  },
  {
    id: 12,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/64578ae9ef82679855e8860ed12c161de04e59bb4e19b30082d2a8d361c712cd?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0",
    title: "NIGHT LIFE",
    date: "MAGAZINE 07. SEP 20",
    description: "Curabitur quis justo vel nunc aliquam tincidunt. Sed euismod, nunc id aliquam tincidunt, nunc nunc tincidunt nunc, nec tincidunt nunc nunc id nunc."
  },
  {
    id: 13,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/64578ae9ef82679855e8860ed12c161de04e59bb4e19b30082d2a8d361c712cd?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0",
    title: "SIDDHARTH",
    date: "MAGAZINE 06. SEP 15",
    description: "Donec quis justo vel nunc aliquam tincidunt. Sed euismod, nunc id aliquam tincidunt, nunc nunc tincidunt nunc, nec tincidunt nunc nunc id nunc."
  },
  {
    id: 14,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/64578ae9ef82679855e8860ed12c161de04e59bb4e19b30082d2a8d361c712cd?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0",
    title: "NIGHT LIFE",
    date: "MAGAZINE 07. SEP 20",
    description: "Curabitur quis justo vel nunc aliquam tincidunt. Sed euismod, nunc id aliquam tincidunt, nunc nunc tincidunt nunc, nec tincidunt nunc nunc id nunc."
  },
  {
    id: 15,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/64578ae9ef82679855e8860ed12c161de04e59bb4e19b30082d2a8d361c712cd?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0",
    title: "Manjunath",
    date: "MAGAZINE 07. SEP 20",
    description: "Curabitur quis justo vel nunc aliquam tincidunt. Sed euismod, nunc id aliquam tincidunt, nunc nunc tincidunt nunc, nec tincidunt nunc nunc id nunc."
  },
  {
    id: 16,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/64578ae9ef82679855e8860ed12c161de04e59bb4e19b30082d2a8d361c712cd?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0",
    title: "NIGHT LIFE",
    date: "MAGAZINE 07. SEP 20",
    description: "Curabitur quis justo vel nunc aliquam tincidunt. Sed euismod, nunc id aliquam tincidunt, nunc nunc tincidunt nunc, nec tincidunt nunc nunc id nunc."
  },
  {
    id: 17,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/64578ae9ef82679855e8860ed12c161de04e59bb4e19b30082d2a8d361c712cd?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0",
    title: "FOOD SCENE",
    date: "MAGAZINE 08. SEP 25",
    description: "Praesent quis justo vel nunc aliquam tincidunt. Sed euismod, nunc id aliquam tincidunt, nunc nunc tincidunt nunc, nec tincidunt nunc nunc id nunc."
  },
];

const MagazineSection: React.FC<{ searchQuery: string }> = ({ searchQuery }) => {
    const [selectedMagazine, setSelectedMagazine] = useState<MagazineItem | null>(null);
  
    const filteredMagazines = useMemo(() => {
      return magazineItems.filter(magazine =>
        magazine.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }, [searchQuery]);
  
    const handleMagazineSelect = (magazine: MagazineItem) => {
      setSelectedMagazine(magazine);
    };
  
    return (
      <div className="flex gap-5 max-md:flex-col mt-14 h-[80vh]">
        <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
          <MagazineGrid items={filteredMagazines} onSelect={handleMagazineSelect} />
        </div>
        <div className="flex flex-col ml-5 w-[45%] pr-5 max-md:ml-0 max-md:w-full">
          {selectedMagazine ? <MagazineDetail item={selectedMagazine} /> : <p>Select a magazine to view details</p>}
        </div>
      </div>
    );
  };
  
  interface MagazineGridProps {
    items: MagazineItem[];
    onSelect: (item: MagazineItem) => void;
  }
  
  const MagazineGrid: React.FC<MagazineGridProps> = ({ items, onSelect }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 overflow-y-auto h-[calc(100vh-4rem)] p-5 bg-slate-50">
        {items.length === 0 ? (
          <p>No magazines found</p>
        ) : (
          items.map((item) => (
            <MagazineItem key={item.id} item={item} onClick={() => onSelect(item)} />
          ))
        )}
      </div>
    );
  };
  
  interface MagazineItemProps {
    item: MagazineItem;
    onClick: () => void;
  }
  
  const MagazineItem: React.FC<MagazineItemProps> = ({ item, onClick }) => {
    return (
      <div
        className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
        onClick={onClick}
      >
        <img src={item.image} alt={item.title} className="w-full h-auto object-cover rounded-md" />
        <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
        <p className="text-gray-500">{item.date}</p>
      </div>
    );
  };
  

// interface MagazineDetailProps {
//   item: MagazineItem;
// }


// // interface MagazineDetailProps {
// //   item: {
// //     image: string;
// //     title: string;
// //     date: string;
// //     description: string;
// //   };
// // }

// const MagazineDetail: React.FC<MagazineDetailProps> = ({ item }) => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
//     const [magazineToDelete, setMagazineToDelete] = useState<MagazineDetailProps | null>(null);
//     const [filteredMagazine, setFilteredMagazine] = useState<MagazineDetailProps[]>(item);
  
//     const handleEditClick = () => {
//       setIsModalOpen(true);
//     };
  
//     const handleCloseModal = () => {
//       setIsModalOpen(false);
//     };
  
//     const handleDeleteClick = (magazine: MagazineDetailProps) => {
//       setMagazineToDelete(magazine);
//       setIsDeleteModalOpen(true);
//     };
  
//     const handleCloseDeleteModal = () => {
//       setIsDeleteModalOpen(false);
//       setMagazineToDelete(null);
//     };
  
//     const handleConfirmDelete = () => {
//       if (magazineToDelete) {
//         setFilteredMagazine(filteredMagazine.filter(magazine => magazine !== magazineToDelete));
//         handleCloseDeleteModal();
//       }
//     };
  
//     return (
//       <div className="relative flex flex-col grow px-5 pt-5 w-full text-xs font-semibold text-black bg-white rounded-xl shadow-sm max-md:mt-10 max-md:max-w-full">
//         <img loading="lazy" src={item.image} alt={item.title} className="w-1/2 aspect-[0.81] ml-[130px]" />
//         <h2 className="mt-5 text-2xl text-center capitalize">{item.title}</h2>
//         <div className="mt-1 text-base uppercase">{item.date}</div>
//         <p className="mt-5">{item.description}</p>
//         <button
//           className="flex justify-center items-center px-16 py-2.5 mt-2.5 w-full whitespace-nowrap bg-white rounded-md border border-solid border-zinc-100 text-zinc-900 max-md:px-5"
//           onClick={handleEditClick}
//         >
//           <div className="flex gap-3.5">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c1368f9f1ce59851b8f72513e540d5627b76234301a01182a0ada3978372072?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0"
//               alt=""
//               className="flex-1 shrink-0 w-full aspect-[0.88] fill-indigo-400"
//             />
//             <span>Edit</span>
//           </div>
//         </button>
//         <button  onClick={() => handleDeleteClick(item)} className="flex justify-center items-center px-16 py-1.5 mt-2.5 w-full whitespace-nowrap bg-white rounded-md border border-solid border-zinc-100 text-zinc-900 max-md:px-5">
//           <div className="flex gap-2.5">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6d0e6d8335a0e899e974c7870046f0c34095bc84a4b0c260ae145f0aa254e79?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0"
//               alt=""
//               className="shrink-0 w-5 aspect-square"
              
//             />
//             <span className="my-auto">Delete</span>
//           </div>
//         </button>
  
//         {/* Conditional rendering for the edit modal */}
//         {isModalOpen && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="relative bg-white rounded-xl shadow-lg p-5 max-w-[340px] mx-5">
//               <EditMagazine
//                 initialMagazineName={item.title}
//                 initialDateOfIssue={item.date}
//                 initialDescription={item.description}
//               />
//               <button
//                 onClick={handleCloseModal}
//                 className="absolute top-2 right-2 p-2 bg-white rounded-full"
//               >
//                 <span className="text-xl">&times;</span>
//               </button>
//             </div>
//           </div>
//         )}
  
//         {/* Conditional rendering for the delete confirmation modal */}
//         {isDeleteModalOpen && magazineToDelete && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="relative w-1/3 p-5 bg-white rounded-lg">
//               <button
//                 className="absolute top-1 right-3 text-xl font-bold"
//                 onClick={handleCloseDeleteModal}
//               >
//                 &times;
//               </button>
//               <h2 className="mb-4 text-xl font-semibold text-center">Delete Magazine</h2>
//               <p className="mb-4 text-center">
//                 Are you sure you want to delete the magazine <strong>{item.title}</strong>?
//               </p>
//               <div className="flex justify-center gap-4">
//                 <button
//                   className="px-4 py-2 bg-gray-200 rounded-md w-[100px]"
//                   onClick={handleCloseDeleteModal}
//                 >
//                   No
//                 </button>
//                 <button
//                   className="px-4 py-2 bg-red-500 text-white rounded-md w-[100px]"
//                   onClick={handleConfirmDelete}
//                 >
//                   Yes
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   };
  
interface MagazineItem {
    image: string;
    title: string;
    date: string;
    description: string;
  }
  
  interface MagazineDetailProps {
    item: MagazineItem;
  }
  
  const MagazineDetail: React.FC<MagazineDetailProps> = ({ item }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
    const [magazineToDelete, setMagazineToDelete] = useState<MagazineItem | null>(null);
    const [filteredMagazine, setFilteredMagazine] = useState<MagazineItem[]>([item]);
  
    const handleEditClick = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    const handleDeleteClick = () => {
      setMagazineToDelete(item);
      setIsDeleteModalOpen(true);
    };
  
    const handleCloseDeleteModal = () => {
      setIsDeleteModalOpen(false);
      setMagazineToDelete(null);
    };
  
    const handleConfirmDelete = () => {
      if (magazineToDelete) {
        setFilteredMagazine(filteredMagazine.filter(magazine => magazine !== magazineToDelete));
        handleCloseDeleteModal();
      }
    };
  
    return (
      <div className="relative flex flex-col grow px-5 pt-5 w-full text-xs font-semibold text-black bg-white rounded-xl shadow-sm max-md:mt-10 max-md:max-w-full">
        <img loading="lazy" src={item.image} alt={item.title} className="w-1/2 aspect-[0.81] ml-[130px]" />
        <h2 className="mt-5 text-2xl text-center capitalize">{item.title}</h2>
        <div className="mt-1 text-base uppercase">{item.date}</div>
        <p className="mt-5">{item.description}</p>
        <button
          className="flex justify-center items-center px-16 py-2.5 mt-2.5 w-full whitespace-nowrap bg-white rounded-md border border-solid border-zinc-100 text-zinc-900 max-md:px-5"
          onClick={handleEditClick}
        >
          <div className="flex gap-3.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c1368f9f1ce59851b8f72513e540d5627b76234301a01182a0ada3978372072?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0"
              alt=""
              className="flex-1 shrink-0 w-full aspect-[0.88] fill-indigo-400"
            />
            <span>Edit</span>
          </div>
        </button>
        <button
          onClick={handleDeleteClick}
          className="flex justify-center items-center px-16 py-1.5 mt-2.5 w-full whitespace-nowrap bg-white rounded-md border border-solid border-zinc-100 text-zinc-900 max-md:px-5"
        >
          <div className="flex gap-2.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6d0e6d8335a0e899e974c7870046f0c34095bc84a4b0c260ae145f0aa254e79?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0"
              alt=""
              className="shrink-0 w-5 aspect-square"
            />
            <span className="my-auto">Delete</span>
          </div>
        </button>
  
        {/* Conditional rendering for the edit modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative bg-white rounded-xl shadow-lg p-5 max-w-[340px] mx-5">
              <EditMagazine
                initialMagazineName={item.title}
                initialDateOfIssue={item.date}
                initialDescription={item.description}
              />
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 p-2 bg-white rounded-full"
              >
                <span className="text-xl">&times;</span>
              </button>
            </div>
          </div>
        )}
  
        {/* Conditional rendering for the delete confirmation modal */}
        {isDeleteModalOpen && magazineToDelete && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative w-1/3 p-5 bg-white rounded-lg">
              <button
                className="absolute top-1 right-3 text-xl font-bold"
                onClick={handleCloseDeleteModal}
              >
                &times;
              </button>
              <h2 className="mb-4 text-xl font-semibold text-center">Delete Magazine</h2>
              <p className="mb-4 text-center">
                Are you sure you want to delete the magazine <strong>{item.title}</strong>?
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
  


export default MagazineSection;