import React, { useState } from "react";
import useDeleteGalleryImages from "../../hooks/useDeleteGalleryImages";

const arrayBufferToBase64 = (buffer) => {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};

const DeleteGalleryImages = ({ images, onClose }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const { loading, deleteImages } = useDeleteGalleryImages(
    selectedImages,
    onClose
  );

  const handleCheckboxChange = (imageId) => {
    setSelectedImages((prevSelectedImages) =>
      prevSelectedImages.includes(imageId)
        ? prevSelectedImages.filter((id) => id !== imageId)
        : [...prevSelectedImages, imageId]
    );
  };

  const handleDelete = async () => {
    if (selectedImages.length === 0) {
      alert("Please select at least one image to delete.");
      return;
    }
    await deleteImages();
  };

  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden max-w-full mx-auto my-auto h-full">
      <div className="bg-gray-100 py-2 px-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Select Images to Delete
        </h2>
      </div>
      <div className="max-h-[calc(100vh-200px)] overflow-y-auto no-scrollbar">
        <ul className="divide-y divide-gray-200">
          {images
            .slice()
            .reverse()
            .map((image, index) => (
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
                  src={`data:image/jpeg;base64,${arrayBufferToBase64(
                    image.image.data
                  )}`}
                  alt={`Gallery Image ${index + 1}`}
                />
                <p>Image {index + 1}</p>
              </li>
            ))}
        </ul>
      </div>
      <footer className="flex justify-end px-8 pb-8 pt-4">
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-red-600 to-red-500 text-white shadow-md shadow-red-600/10 hover:shadow-lg hover:shadow-red-600/20 active:opacity-[0.85] flex items-center gap-3"
          type="button"
          onClick={handleDelete}
        >
          <svg
            id="Layer_1"
            data-name="Layer 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 105.16 122.88"
            strokeWidth="9"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <title>delete</title>
            <path
              className="cls-1"
              d="M11.17,37.16H94.65a8.4,8.4,0,0,1,2,.16,5.93,5.93,0,0,1,2.88,1.56,5.43,5.43,0,0,1,1.64,3.34,7.65,7.65,0,0,1-.06,1.44L94,117.31v0l0,.13,0,.28v0a7.06,7.06,0,0,1-.2.9v0l0,.06v0a5.89,5.89,0,0,1-5.47,4.07H17.32a6.17,6.17,0,0,1-1.25-.19,6.17,6.17,0,0,1-1.16-.48h0a6.18,6.18,0,0,1-3.08-4.88l-7-73.49a7.69,7.69,0,0,1-.06-1.66,5.37,5.37,0,0,1,1.63-3.29,6,6,0,0,1,3-1.58,8.94,8.94,0,0,1,1.79-.13ZM5.65,8.8H37.12V6h0a2.44,2.44,0,0,1,0-.27,6,6,0,0,1,1.76-4h0A6,6,0,0,1,43.09,0H62.46l.3,0a6,6,0,0,1,5.7,6V6h0V8.8h32l.39,0a4.7,4.7,0,0,1,4.31,4.43c0,.18,0,.32,0,.5v9.86a2.59,2.59,0,0,1-2.59,2.59H2.59A2.59,2.59,0,0,1,0,23.62V13.53H0a1.56,1.56,0,0,1,0-.31v0A4.72,4.72,0,0,1,3.88,8.88,10.4,10.4,0,0,1,5.65,8.8Zm42.1,52.7a4.77,4.77,0,0,1,9.49,0v37a4.77,4.77,0,0,1-9.49,0v-37Zm23.73-.2a4.58,4.58,0,0,1,5-4.06,4.47,4.47,0,0,1,4.51,4.46l-2,37a4.57,4.57,0,0,1-5,4.06,4.47,4.47,0,0,1-4.51-4.46l2-37ZM25,61.7a4.46,4.46,0,0,1,4.5-4.46,4.58,4.58,0,0,1,5,4.06l2,37a4.47,4.47,0,0,1-4.51,4.46,4.57,4.57,0,0,1-5-4.06l-2-37Z"
            />
          </svg>
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
