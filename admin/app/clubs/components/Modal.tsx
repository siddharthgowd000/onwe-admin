
const Modal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const handleUploadClick = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        const file = event.target.files[0];
        console.log(file); // You can handle the file upload here
      }
    };
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-5 rounded-lg shadow-lg w-96 relative">
          <button className="absolute top-2 right-2" onClick={onClose}>
            &times;
          </button>
          <h2 className="text-lg font-semibold mb-4 text-center">Create Club</h2>
          <form>
            <div className="flex justify-center space-x-4 mb-4 p-3">
              <div className="text-center">
                <label htmlFor="upload-logo" className="block text-sm font-medium text-gray-700 mb-1">Upload Logo</label>
                <input type="file" onChange={handleUploadClick} className="hidden" id="upload-logo" />
                <label htmlFor="upload-logo" className="cursor-pointer">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae4b7b063e67a285c09f9c01beaf0faad66ec879e6b48e4724fa1d0666a8ac7d?apiKey=fa090b16b04649b4a5024c30e95337f0&" alt="Upload Logo" className="mx-auto" />
                </label>
              </div>
              <div className="text-center">
                <label htmlFor="upload-theme" className="block text-sm font-medium text-gray-700 mb-1">Upload Theme</label>
                <input type="file" onChange={handleUploadClick} className="hidden" id="upload-theme" />
                <label htmlFor="upload-theme" className="cursor-pointer">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae4b7b063e67a285c09f9c01beaf0faad66ec879e6b48e4724fa1d0666a8ac7d?apiKey=fa090b16b04649b4a5024c30e95337f0&" alt="Upload Theme" className="mx-auto" />
                </label>
              </div>
              <div className="text-center">
                <label htmlFor="upload-banner" className="block text-sm font-medium text-gray-700 mb-1">Upload Banner</label>
                <input type="file" onChange={handleUploadClick} className="hidden" id="upload-banner" />
                <label htmlFor="upload-banner" className="cursor-pointer">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae4b7b063e67a285c09f9c01beaf0faad66ec879e6b48e4724fa1d0666a8ac7d?apiKey=fa090b16b04649b4a5024c30e95337f0&" alt="Upload Banner" className="mx-auto" />
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Club Name</label>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="mb-4 flex gap-2">
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700">Members Maximum</label>
                <input type="number" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700">Members Minimum</label>
                <input type="number" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Add Admin</label>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Description (optional)</label>
              <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
            </div>
            <div className="flex justify-end">
              <button type="button" className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded mr-2" onClick={onClose}>Cancel</button>
              <button type="submit" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Modal;
  