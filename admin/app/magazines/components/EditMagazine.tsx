import React, { useState } from "react";

interface EditMagazineProps {
  initialMagazineName: string;
  initialDateOfIssue: string;
  initialDescription: string;
}

const EditMagazine: React.FC<EditMagazineProps> = ({
  initialMagazineName,
  initialDateOfIssue,
  initialDescription,
}) => {
  const [magazineName, setMagazineName] = useState(initialMagazineName);
  const [dateOfIssue, setDateOfIssue] = useState(initialDateOfIssue);
  const [description, setDescription] = useState(initialDescription);
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [content, setContent] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
  };

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "cover" | "content"
  ) => {
    if (e.target.files && e.target.files[0]) {
      if (type === "cover") {
        setCoverImage(e.target.files[0]);
      } else {
        setContent(e.target.files[0]);
      }
    }
  };

  return (
    <div className="relative  p-5 bg-white rounded-xl shadow-lg">
      <h1 className="text-xl text-center mb-5">Edit Magazine</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <section className="flex gap-5 justify-center mb-5">
          <div className="flex flex-col items-center">
            <label className="mb-1.5">Upload Cover Image</label>
            <label className="w-[107px] h-[107px] border border-dashed border-zinc-900 rounded-xl cursor-pointer flex items-center justify-center">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileUpload(e, "cover")}
              />
              {coverImage ? (
                <img
                  src={URL.createObjectURL(coverImage)}
                  alt="Cover preview"
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <span className="text-xl">+</span>
              )}
            </label>
          </div>
          <div className="flex flex-col items-center">
            <label className="mb-1.5">Upload Content</label>
            <label className="w-[107px] h-[107px] border border-dashed border-zinc-900 rounded-xl cursor-pointer flex items-center justify-center">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => handleFileUpload(e, "content")}
              />
              {content ? (
                <span>{content.name}</span>
              ) : (
                <span className="text-xl">+</span>
              )}
            </label>
          </div>
        </section>
        <div className="flex flex-col">
          <label htmlFor="magazine-name">Name</label>
          <input
            type="text"
            id="magazine-name"
            value={magazineName}
            onChange={(e) => setMagazineName(e.target.value)}
            className="mt-1.5 p-2 border border-solid border-zinc-100 rounded-md text-xs"
          />
        </div>
        <div className="flex flex-col mt-2.5">
          <label htmlFor="date-of-issue">Date of Issue</label>
          <input
            type="text"
            id="date-of-issue"
            value={dateOfIssue}
            onChange={(e) => setDateOfIssue(e.target.value)}
            placeholder="DD/MM/YYYY"
            className="mt-1.5 p-2 border border-solid border-zinc-100 rounded-md text-xs"
          />
        </div>
        <div className="flex flex-col mt-2.5">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1.5 p-2 border border-solid border-zinc-100 rounded-md text-xs"
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-5 py-2.5 text-sm text-white bg-emerald-600 rounded-xl shadow-sm"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditMagazine;
