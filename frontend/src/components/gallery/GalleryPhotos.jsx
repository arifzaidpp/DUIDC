import React, { useState } from "react";
import "./Gallery.css";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import UploadImages from "../../adminComponents/uploadImages/UploadImages";
import useFetchGalleryImages from "../../hooks/useFetchGalleryImages";
import DeleteGalleryImages from "../../adminComponents/deleteGalleryImages/DeleteGalleryImages"; // Adjust the path as necessary
import Popup from "../../adminComponents/popup/Popup";

const arrayBufferToBase64 = (buffer) => {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};

const GalleryPhotos = (admin) => {
  const [addImg, setAddImg] = useState(false);
  const [deleteImg, setDeleteImg] = useState(false);
  const { images, loading, fetchImages } = useFetchGalleryImages(); // Assuming fetchImages fetches the images again

  const handleClick = () => {
    setAddImg(true);
  };

  const handleDelete = () => {
    setDeleteImg(true);
  };

  const closeModal = () => {
    setAddImg(false);
    setDeleteImg(false);
  };

  return (
    <>
      <div className="container mt-4 mb-16 px-7">
        <div className="mb-16 mt-16 text-center">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="text-4xl s-heading tracking-tight font-extrabold text-gray-900 dark:text-white">
              Gallery
            </h2>
            <div className="underline"></div>
          </div>
          <div className="flex justify-center gap-4">
            {admin.admin && (
              <>
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] flex items-center gap-3"
                  type="button"
                  onClick={handleClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    ></path>
                  </svg>
                  Upload Images
                </button>
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
              </>
            )}
          </div>
        </div>
        {!loading && images.length === 0 && <p>No images found</p>}
        {loading && images.length === 0 ? (
          <div role="status" className="p-4 rounded animate-pulse md:p-6">
            <div className="container grid grid-cols-2 md:grid-cols-3 gap-8 mx-auto overflow-hidden rounded-lg hover:rounded-lg">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-40 md:h-52 lg:h-80 mb-4 bg-gray-300 rounded dark:bg-gray-700"
                >
                  <svg
                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>
              ))}
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <SlideshowLightbox
            className="container grid grid-cols-2 md:grid-cols-3 gap-8 mx-auto overflow-hidden rounded-lg hover:rounded-lg"
            showThumbnails={true}
          >
            {images
              .slice()
              .reverse()
              .map((image, index) => (
                <img
                  className="relative h-40 md:h-52 lg:h-80 object-cover w-full max-w-full rounded-lg transition-all duration-300 hover:scale-110"
                  src={`data:image/jpeg;base64,${arrayBufferToBase64(image.image.data)}`}
                  alt={`Gallery Image ${index + 1}`}
                  loading="lazy"
                  key={index}
                ></img>
              ))}
          </SlideshowLightbox>
        )}
      </div>
      <Popup isOpen={addImg} onClose={closeModal}>
        <UploadImages onClose={closeModal} setAddImg={setAddImg} fetchImages={fetchImages} />
      </Popup>
      <Popup isOpen={deleteImg} onClose={closeModal}>
        <DeleteGalleryImages images={images} onClose={closeModal} />
      </Popup>
    </>
  );
};

export default GalleryPhotos;
