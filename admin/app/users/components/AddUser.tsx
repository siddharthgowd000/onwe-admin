




// "use client";
// import React, { useState } from 'react';

// interface InputFieldProps {
//   label: string;
//   value: string;
//   error: boolean;
//   onChange: (value: string) => void;
// }

// const InputField: React.FC<InputFieldProps> = ({ label, value, error, onChange }) => {
//   return (
//     <div>
//       <label htmlFor={label.toLowerCase()} className="block mt-2.5">
//         {label}
//       </label>
//       <input
//         type="text"
//         id={label.toLowerCase()}
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         className={`px-2.5 py-2.5 mt-1.5 text-xs whitespace-nowrap bg-white rounded-md border border-solid ${
//           error ? 'border-red-400' : 'border-zinc-100'
//         } w-full`}
//       />
//     </div>
//   );
// };

// interface ButtonProps {
//   text: string;
//   onClick: () => void;
// }

// const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       className="self-center px-5 py-2.5 mt-2.5 text-sm text-white whitespace-nowrap bg-emerald-600 rounded shadow-sm"
//     >
//       {text}
//     </button>
//   );
// };

// interface AddUserProps {
//   onClose: () => void; // Add onClose prop
// }

// const AddUser: React.FC<AddUserProps> = ({ onClose }) => {
//   const [inputFields, setInputFields] = useState([
//     { label: 'Name', value: 'Hazel Garcia', error: false },
//     { label: 'Email', value: 'haze@mail.com', error: false },
//     { label: 'Username', value: '@hazel.garcia20', error: true },
//   ]);

//   const handleInputChange = (index: number, value: string) => {
//     const updatedFields = [...inputFields];
//     updatedFields[index].value = value;
//     setInputFields(updatedFields);
//   };

//   const handleSave = () => {
//     console.log('Saving user data:', inputFields);
//   };

//   return (
//     <div className="relative flex flex-col p-5 text-xs font-semibold bg-white rounded-xl shadow-lg max-w-[340px] text-zinc-900">
//       <button
//         className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-gray-800"
//         onClick={onClose}
//       >
//         &times;
//       </button>
//       <h2 className="mt-2.5 text-xl text-center">Add User</h2>
//       <form>
//         {inputFields.map((field, index) => (
//           <InputField
//             key={index}
//             label={field.label}
//             value={field.value}
//             error={field.error}
//             onChange={(value) => handleInputChange(index, value)}
//           />
//         ))}
//         {inputFields[2].error && (
//           <p className="mt-1.5 text-xs font-medium text-red-400">
//             *Username has been taken, below are few suggestions.
//           </p>
//         )}
//         <Button text="Save" onClick={handleSave} />
//       </form>
//     </div>
//   );
// };

// export default AddUser;
