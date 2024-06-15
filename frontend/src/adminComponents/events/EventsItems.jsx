import React, { useState } from 'react';
import AddEventForm from '../addEventForm/AddEventForm';
import Popup from '../../adminComponents/popup/Popup';
import toast from 'react-hot-toast';
import useFetchEvents from '../../hooks/useGetAllEvents';
import useDeleteEvent from '../../hooks/useDeleteEvent';

const EventsItems = () => {
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  const [eventToEdit, setEventToEdit] = useState(null);
  const [eventToDelete, setEventToDelete] = useState(null);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [popupImageSrc, setPopupImageSrc] = useState('');
  const { events, loading, error, fetchEvents } = useFetchEvents();
  const { deleteEvent, isLoading } = useDeleteEvent();

  const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  const openAddEventPopup = () => {
    setIsAddEventOpen(true);
  };

  const closeAddEventPopup = () => {
    setIsAddEventOpen(false);
    setEventToEdit(null);
  };

  const openEditEventPopup = (event) => {
    setEventToEdit(event);
    setIsAddEventOpen(true);
  };

  const openImagePopup = (imageSrc) => {
    setPopupImageSrc(imageSrc);
    setIsImagePopupOpen(true);
  };

  const closeImagePopup = () => {
    setIsImagePopupOpen(false);
    setPopupImageSrc('');
  };

  const handleDeleteEvent = async (event) => {
    alert("Are you sure you want to delete the event?");
    try {
      if (!event) return;

      await deleteEvent(event._id);
      await fetchEvents(); // Refresh events list after deletion
    } catch (error) {
      console.error('Error deleting event:', error);
      toast.error(`Error deleting event: ${error.message}`);
    }
  };

  function convertTo12Hour(time24) {
    const [hours, minutes] = time24.split(":");
    let period = "AM";
    let hours12 = parseInt(hours, 10);
    if (hours12 >= 12) {
      period = "PM";
      if (hours12 > 12) {
        hours12 -= 12;
      }
    }
    if (hours12 === 0) {
      hours12 = 12;
    }
    return `${hours12}:${minutes} ${period}`;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

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
              Add Events
            </button>
          </div>
        </div>
        <div className="flex justify-center my-14">
          <div className="w-2/3">
            {loading && events.length === 0 ? (
              <div className="bg-white shadow-lg rounded-lg p-4 mb-4 flex">
                <div className="flex flex-wrap items-center gap-8 animate-pulse">
                  <div className="grid bg-gray-300 rounded-lg h-36 w-36 place-items-center"></div>
                  <div className="w-max">
                    <div className="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
                      &nbsp;
                    </div>
                    {[...Array(5)].map((_, index) => (
                      <div
                        key={index}
                        className="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72"
                      >
                        &nbsp;
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              events.slice().reverse().map((event) => (
                <div
                  key={event._id}
                  className="event-card bg-white shadow-lg rounded-lg p-4 mb-4 flex flex-col md:flex-row items-center"
                >
                  <div className="md:order-1 w-full md:w-1/3 md:mr-4 mb-4 md:mb-0">
                    <img
                      src={`data:image/jpeg;base64,${arrayBufferToBase64(
                        event.image.data
                      )}`}
                      alt={event.eventName}
                      className="w-full h-auto max-h-60 object-cover rounded-lg cursor-pointer"
                      onClick={() => openImagePopup(`data:image/jpeg;base64,${arrayBufferToBase64(event.image.data)}`)}
                    />
                  </div>
                  <div className="md:order-2 w-full md:w-2/3">
                    <h2 className="text-xl font-semibold mb-2 md:mb-4">
                      {event.eventName}
                    </h2>
                    <p className="mb-2">{event.eventDescription}</p>
                    <div className="text-sm text-gray-600">
                      <p>
                        <span className="font-semibold">Date:</span>{" "}
                        {new Date(event.eventDate).toLocaleDateString()}
                      </p>
                      <p>
                        <span className="font-semibold">Time:</span>{" "}
                        {convertTo12Hour(event.eventStartTime)} -{" "}
                        {convertTo12Hour(event.eventEndTime)}
                      </p>
                    </div>
                    <div className="flex gap-2 mt-2">
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleDeleteEvent(event)}
                      >
                        Delete Event
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                        onClick={() => openEditEventPopup(event)}
                      >
                        Edit Event
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
            {!loading && events.length === 0 && (
              <p className="text-center text-gray-500">No events found.</p>
            )}
          </div>
        </div>
      </div>
      <Popup isOpen={isAddEventOpen} onClose={closeAddEventPopup}>
        <AddEventForm onClose={closeAddEventPopup} onSubmit={fetchEvents} initialData={eventToEdit} />
      </Popup>
      {isImagePopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <button
              className="absolute top-2 right-2 bg-white rounded-full p-1"
              onClick={closeImagePopup}
            >
              ✖️
            </button>
            <img src={popupImageSrc} alt="Event Full Size" className="max-w-full max-h-screen" />
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsItems;
