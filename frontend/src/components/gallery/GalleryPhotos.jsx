import React from "react";
import "./Gallery.css";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

const GalleryPhotos = () => {
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
    </>
  );
};

export default GalleryPhotos;
