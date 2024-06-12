import React from 'react';

const Popup = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="z-50 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white rounded-lg shadow-lg max-h-[calc(100vh-5vh)] max-w-[95%] md:max-w-[50%] w-full modal-container overflow-y-auto">
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
