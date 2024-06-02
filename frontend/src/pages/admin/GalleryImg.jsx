import React from "react";
import GalleryPhotos from "../../components/gallery/GalleryPhotos";
import Sidebar from "../../adminComponents/sidebar/Sidebar";

const GalleryImg = () => {
  return (
    <>
      <Sidebar />

      <div className="p-4 md:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          
          <GalleryPhotos admin={true}/>
        </div>
      </div>
    </>
  );
};

export default GalleryImg;
