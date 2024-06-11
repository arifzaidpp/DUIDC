import React, { useState } from 'react';
import useDeleteGalleryImages from '../../hooks/useDeleteGalleryImages';

const arrayBufferToBase64 = (buffer) => {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};

const DeleteGalleryImages = ({ images, onClose }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const { loading, deleteImages } = useDeleteGalleryImages(selectedImages, onClose);

  const handleCheckboxChange = (imageId) => {
    setSelectedImages((prevSelectedImages) =>
      prevSelectedImages.includes(imageId)
        ? prevSelectedImages.filter((id) => id !== imageId)
        : [...prevSelectedImages, imageId]
    );
  };

  const handleDelete = async () => {
    if (selectedImages.length === 0) {
      alert('Please select at least one image to delete.');
      return;
    }
    await deleteImages();
  };

  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden max-w-full mx-auto my-auto h-full">
      <div className="bg-gray-100 py-2 px-4">
        <h2 className="text-xl font-semibold text-gray-800">Select Images to Delete</h2>
      </div>
      <div className="max-h-[calc(100vh-200px)] overflow-y-auto no-scrollbar">
        <ul className="divide-y divide-gray-200">
          {images.slice().reverse().map((image, index) => (
            <li key={image._id} className="flex items-center py-4 px-6">
              <input
                type="checkbox"
                className="custom-control-input mr-4"
                id={`cst${index}`}
                checked={selectedImages.includes(image._id)}
                onChange={() => handleCheckboxChange(image._id)}
              />
              <img
                className="w-10 h-10 mr-4"
                src={`data:image/jpeg;base64,${arrayBufferToBase64(image.image.data)}`}
                alt={`Gallery Image ${index + 1}`}
              />
              <p>Image {index + 1}</p>
            </li>
          ))}
        </ul>
      </div>
      <footer className="flex justify-end px-8 pb-8 pt-4">
        <button
          id="delete"
          className="rounded-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none"
          onClick={handleDelete}
          disabled={loading}
        >
          Delete Images
        </button>
        <button
          id="cancel"
          className="ml-3 rounded-sm px-3 py-1 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
          onClick={onClose}
        >
          Cancel
        </button>
      </footer>
    </div>
  );
};

export default DeleteGalleryImages;
