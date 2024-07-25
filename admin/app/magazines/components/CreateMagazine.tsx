import React, { useState } from "react";

interface CreateMagazineProps {
  onClose: () => void;
}

const CreateMagazine: React.FC<CreateMagazineProps> = ({ onClose }) => {
  const [name, setName] = useState<string>("");
  const [dateOfIssue, setDateOfIssue] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [contentPdf, setContentPdf] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: "image" | "pdf") => {
    const file = e.target.files?.[0] || null;
    if (type === "image") {
      setCoverImage(file);
    } else if (type === "pdf") {
      setContentPdf(file);
    }
  };

  const handleImageClick = (type: "image" | "pdf") => {
    document.getElementById(`upload-${type}`)?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission including files
    console.log({ name, dateOfIssue, description, coverImage, contentPdf });
  };

  return (
    <main className="relative flex flex-col p-5 text-xs font-semibold bg-white rounded-xl shadow-sm max-w-[340px] text-zinc-900">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md"
      >
        <span className="text-xl">&times;</span>
      </button>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c2e1eb2c35890b16217c1980235e1320e2719d3d7af2ee21b9601adee036835?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0"
        alt=""
        className="self-end w-5 aspect-square"
      />
      <h1 className="mt-2.5 text-xl text-center">Create Magazine</h1>
      <section className="flex gap-5 justify-center px-5 mt-8 text-center">
        <div className="flex flex-col items-center">
          <div className="font-semibold mb-2">Upload Cover Image</div>
          <img
            loading="lazy"
            src={coverImage ? URL.createObjectURL(coverImage) : "https://cdn.builder.io/api/v1/image/assets/TEMP/2db031a7941a4d1b542c8eb69936bd3c3b65ec62d36ba47b038c76d564db96de?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0"}
            alt="Cover Image"
            className="cursor-pointer self-center rounded-xl border border-dashed aspect-square border-zinc-900 w-[107px]"
            onClick={() => handleImageClick("image")}
          />
          <input
            type="file"
            id="upload-image"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "image")}
            className="hidden"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="font-semibold mb-2">Upload Content</div>
          <img
            loading="lazy"
            src={contentPdf ? "https://cdn.builder.io/api/v1/image/assets/TEMP/5eec473cb847038251cf384641b7026b14be8183930f288d61c2e1cc02adec24?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0" : "https://cdn.builder.io/api/v1/image/assets/TEMP/5eec473cb847038251cf384641b7026b14be8183930f288d61c2e1cc02adec24?apiKey=fa090b16b04649b4a5024c30e95337f0&&apiKey=fa090b16b04649b4a5024c30e95337f0"}
            alt="Upload Content"
            className="cursor-pointer self-center rounded-xl border border-dashed aspect-square border-zinc-900 w-[107px]"
            onClick={() => handleImageClick("pdf")}
          />
          <input
            type="file"
            id="upload-pdf"
            accept=".pdf"
            onChange={(e) => handleFileChange(e, "pdf")}
            className="hidden"
          />
        </div>
      </section>
      <form onSubmit={handleSubmit} className="mt-5">
        <div className="mt-2.5">
          <label htmlFor="name" className="block font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="WHATS AROUND?"
            className="px-2.5 py-2.5 mt-1.5 text-xs bg-white rounded-md border border-solid border-zinc-100 text-stone-300 w-full"
          />
        </div>
        <div className="mt-2.5">
          <label htmlFor="date-of-issue" className="block font-semibold">
            Date of Issue
          </label>
          <input
            type="text"
            id="date-of-issue"
            value={dateOfIssue}
            onChange={(e) => setDateOfIssue(e.target.value)}
            placeholder="DD/MM/YYYY"
            className="px-2.5 py-2.5 mt-1.5 text-xs bg-white rounded-md border border-solid border-zinc-100 text-stone-300 w-full"
          />
        </div>
        <div className="mt-2.5">
          <label htmlFor="description" className="block font-semibold">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Lorem ipsum dolor sit amet consectetur. Vitae pharetra gravida aliquam euismod blandit proin id cursus. At elementum aliquam nullam velit arcu vitae orci."
            className="px-2.5 py-2.5 mt-1.5 text-xs bg-white rounded-md border border-solid border-zinc-100 text-stone-300 w-full"
          />
        </div>
        <button
          type="submit"
          className="self-center px-5 py-2.5 mt-4 text-sm text-white whitespace-nowrap bg-emerald-600 rounded-xl shadow-sm"
        >
          Create
        </button>
      </form>
    </main>
  );
};

export default CreateMagazine;
