import React, { useState } from "react";
import useAddEvent from "../../hooks/useAddEvent";

const AddEventForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    eventStartTime: "",
    eventEndTime: "",
    eventDescription: "",
    eventImage: null,
  });

  const { addEvent, loading, error } = useAddEvent(onClose); // Use the hook

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const maxSize = 2 * 1024 * 1024; // 2MB limit
    if (file) {
      if (file.size > maxSize) {
        alert("File size exceeds 2MB limit. Please choose a smaller file.");
        return;
      }
      // Display image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          eventImage: file,
          imagePreview: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    // Remove the selected image and reset the preview
    setFormData({ ...formData, eventImage: null, imagePreview: null });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    await addEvent(data); // Send data to the hook
    onSubmit();
  };

  return (
    <div className="flex h-full rounded-2xl bg-gray-200 items-center justify-center">
      <div className="flex flex-col bg-white rounded-lg shadow-xl w-full max-h-full">
        <div className="bg-gray-100 py-2 px-4">
          <h2 className="text-xl font-semibold text-gray-800">Add New Event</h2>
        </div>

        <div className="flex-grow overflow-y-auto max-h-[calc(100vh-200px)] px-4">
          <form onSubmit={handleFormSubmit} className="flex flex-col h-full">
            <div className="grid grid-cols-1 mt-5 mx-7">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                Event Name
              </label>
              <input
                className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                type="text"
                placeholder="Event Name"
                name="eventName"
                value={formData.eventName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 mt-5 mx-7">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                Event Date
              </label>
              <input
                className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
              <div className="grid grid-cols-1">
                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                  Event Start Time
                </label>
                <input
                  className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="time"
                  name="eventStartTime"
                  value={formData.eventStartTime}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid grid-cols-1">
                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                  Event End Time
                </label>
                <input
                  className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="time"
                  name="eventEndTime"
                  value={formData.eventEndTime}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 mt-5 mx-7">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                Event Description
              </label>
              <textarea
                className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Event Description"
                name="eventDescription"
                value={formData.eventDescription}
                onChange={handleInputChange}
              />
            </div>

            <div className="grid grid-cols-1 mt-5 mx-7">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                Upload Event Image
              </label>
              <div className="flex items-center justify-center w-full">
                {formData.imagePreview ? (
                  <div className="relative group">
                    <img
                      src={formData.imagePreview}
                      alt="Event Preview"
                      className="w-1/2 h-full object-cover mx-auto rounded-lg cursor-pointer"
                      onClick={() =>
                        document.getElementById("eventImageInput").click()
                      }
                    />
                    <div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full cursor-pointer flex items-center justify-center h-10 w-10"
                      onClick={handleRemoveImage}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <label className="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group">
                    <div className="flex flex-col items-center justify-center pt-7">
                      <svg
                        className="w-10 h-10 text-purple-400 group-hover:text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider">
                        Select an image
                      </p>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      id="eventImageInput"
                      onChange={handleFileChange}
                      required
                    />
                  </label>
                )}
              </div>
            </div>

            <div className="mt-auto flex px-8 items-center justify-center md:gap-8 gap-4 pt-5 pb-5">
              <button
                type="button"
                className="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEventForm;
