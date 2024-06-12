// EventsItems.jsx
import React, { useState } from 'react';
import AddEventForm from '../addEventForm/AddEventForm';
// import DeleteEventConfirmation from './DeleteEventConfirmation'; // Adjust the import path as necessary
import Popup from '../../adminComponents/popup/Popup'; // Adjust the import path as necessary

const EventsItems = () => {
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  const [isDeleteEventOpen, setIsDeleteEventOpen] = useState(false);

  const openAddEventPopup = () => {
    setIsAddEventOpen(true);
  };

  const closeAddEventPopup = () => {
    setIsAddEventOpen(false);
  };

  const openDeleteEventPopup = () => {
    setIsDeleteEventOpen(true);
  };

  const closeDeleteEventPopup = () => {
    setIsDeleteEventOpen(false);
  };

  const handleDeleteConfirm = () => {
    // Handle the delete event logic here
    closeDeleteEventPopup();
  };

  return (
    <div className="p-4 md:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <div className="mt-16 text-center">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="text-4xl s-heading tracking-tight font-extrabold text-gray-900 dark:text-white">
              Upcoming Events
            </h2>
            <div className="underline"></div>
          </div>
          <div className="flex justify-center gap-4">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] flex items-center gap-3"
              type="button"
              onClick={openAddEventPopup}
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
              Add Events
            </button>
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-red-600 to-red-500 text-white shadow-md shadow-red-600/10 hover:shadow-lg hover:shadow-red-600/20 active:opacity-[0.85] flex items-center gap-3"
              type="button"
              onClick={openDeleteEventPopup}
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
              Delete Events
            </button>
          </div>
        </div>
        <div className="flex justify-center my-14">
          <div className="w-2/3">
            <div className="bg-white shadow-lg rounded-lg p-4 mb-4 flex">
              <img
                src="https://steamuserimages-a.akamaihd.net/ugc/938339513171723292/84874C0CBCEA963A99EA9656FF85C5AF0719E420/"
                alt="Map 1"
                className="w-32 h-32 object-cover rounded-t-lg mr-4"
              />
              <div>
                <div className="flex items-center mb-2">
                  <h2 className="text-xl font-semibold">Server 1</h2>
                </div>
                <p>Server IP: 123.456.789.1</p>
                <p>Players Online: 24/32</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Popup isOpen={isAddEventOpen} onClose={closeAddEventPopup}>
        <AddEventForm onClose={closeAddEventPopup} />
      </Popup>
      {/* <Popup isOpen={isDeleteEventOpen} onClose={closeDeleteEventPopup}>
        <DeleteEventConfirmation onClose={closeDeleteEventPopup} onConfirm={handleDeleteConfirm} />
      </Popup> */}
    </div>
  );
};

export default EventsItems;
