import React, { useState } from "react";
import "./Gallery.css";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import UploadImages from "../../adminComponents/uploadImages/UploadImages";

const GalleryPhotos = (admin) => {
  const [addImg, setaddImg] = useState(false);

  const handleClick = () => {
    setaddImg(true);
  };

  return (
    <>
      {addImg ? (
        <UploadImages />
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
          {/* <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
          <button
            type="button"
            className="text-red-700 hover:text-white border border-red-600 bg-white g-bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
          >
            All categories
          </button>
          <button
            type="button"
            id="nav-all-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-all"
            role="tab"
            aria-controls="nav-all"
            aria-selected="true"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            Shoes
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            Bags
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            Electronics
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            Gaming
          </button>
        </div> */}
          <div className="">
            <div className="overflow-hidden bg-cover bg-no-repeat rounded-lg">
              <SlideshowLightbox
                className="container grid grid-cols-2 md:grid-cols-3 gap-8 mx-auto overflow-hidden rounded-lg hover:rounded-lg"
                showThumbnails={true}
              >
                <img
                  className="h-auto max-w-full rounded-lg transition-all duration-300 hover:scale-110 hover:rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                  alt=""
                />
                <img
                  className="h-auto max-w-full rounded-lg transition-all duration-300 hover:scale-110 hover:rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                  alt=""
                />
                <img
                  className="h-auto max-w-full rounded-lg transition-all duration-300 hover:scale-110 hover:rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                  alt=""
                />
              </SlideshowLightbox>
            </div>
            {/* <div className="overflow-hidden bg-cover bg-no-repeat rounded-lg">
            <img
              className="h-auto max-w-full rounded-lg transition-all duration-300 hover:scale-110"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
          </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPhotos;
