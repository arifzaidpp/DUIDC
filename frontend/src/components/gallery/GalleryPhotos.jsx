import React, { useEffect, useState } from "react";
import "./Gallery.css";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import UploadImages from "../../adminComponents/uploadImages/UploadImages";
import useFetchGalleryImages from "../../hooks/useFetchGalleryImages";

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
  const { images, loading } = useFetchGalleryImages();

  const handleClick = () => {
    setAddImg(true);
  };

  return (
    <>
      {addImg ? (
        <UploadImages setAddImg={setAddImg} />
      ) : (
        <div className="container mt-4 mb-16 px-7">
          <div className="mb-16 mt-16 text-center">
            <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
              <h2 className="text-4xl s-heading tracking-tight font-extrabold text-gray-900 dark:text-white">
                Gallery
              </h2>
              <div className="underline"></div>
            </div>
            {admin.admin === true ? (
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
            ) : (
              ""
            )}
          </div>
          {!loading && images.length === 0 ?(
            <p>No images found</p>
          ):""}
          {loading && images.length === 0 ? (
            <div
            role="status"
            className="p-4 rounded animate-pulse md:p-6"
          >
            <div className="container grid grid-cols-2 md:grid-cols-3 gap-8 mx-auto overflow-hidden rounded-lg hover:rounded-lg">
              <div className="flex items-center justify-center h-40 md:h-52 lg:h-80 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="flex items-center justify-center h-40 md:h-52 lg:h-80 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
              <div className="flex items-center justify-center h-40 md:h-52 lg:h-80 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
              </div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
          ) : (
            <div className="">
              <div className="overflow-hidden bg-cover bg-no-repeat rounded-lg">
                <SlideshowLightbox
                  className="container grid grid-cols-2 md:grid-cols-3 gap-8 mx-auto overflow-hidden rounded-lg hover:rounded-lg"
                  showThumbnails={true}
                >
                  {images
                    .slice()
                    .reverse()
                    .map((image, index) => (
                      <img
                        className="h-40 md:h-52 lg:h-80 object-cover w-full max-w-full rounded-lg transition-all duration-300 hover:scale-110"
                        key={index}
                        src={`data:image/jpeg;base64,${arrayBufferToBase64(
                          image.image.data
                        )}`}
                        alt={`Gallery Image ${index + 1}`}
                      />
                    ))}
                </SlideshowLightbox>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default GalleryPhotos;
