import React, { useState, useEffect } from "react";
import useAddMember from "../../hooks/useAddMember";
import useUpdateMember from "../../hooks/useUpdateMember";
import toast from "react-hot-toast";

const AddMemberForm = ({ onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    memberName: "",
    memberRole: "",
    memberBio: "",
    memberPhoto: null,
    photoPreview: null,
  });

  const {
    addMember,
    loading: addLoading,
    error: addError,
  } = useAddMember(onClose);
  const {
    updateMember,
    loading: updateLoading,
    error: updateError,
  } = useUpdateMember(onClose);

  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }; 

  useEffect(() => {
    if (initialData) {
      setFormData({
        memberName: initialData.name || "",
        memberRole: initialData.position || "",
        memberBio: initialData.bio || "",
        memberPhoto: null,
        photoPreview: initialData.img?.data
          ? `data:image/jpeg;base64,${arrayBufferToBase64(
            initialData.img.data
          )}`
          : null,
      });
    }
  }, [initialData]);

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
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          memberPhoto: file,
          photoPreview: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setFormData({ ...formData, memberPhoto: null, photoPreview: null });
  };

  const capitalize = (str) => {
    if (!str) return "";
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const formatMemberRole = (role) => {
    const words = role.toLowerCase().split(" ");
    if (words[0] === "vice") {
      return "Vice-" + capitalize(words.slice(1).join(" "));
    }
    return capitalize(role);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    const formattedData = {
      memberName: capitalize(formData.memberName),
      memberRole: formatMemberRole(formData.memberRole),
      memberBio: capitalize(formData.memberBio),
      memberPhoto: formData.memberPhoto,
    };

    const data = new FormData();
    for (const key in formattedData) {
      data.append(key, formattedData[key]);
    }
    if (initialData) {
      await updateMember(initialData._id, data);
    } else {
      await addMember(data);
    }
    onSubmit();
  };

  return (
    <div className="flex h-full rounded-2xl bg-gray-200 items-center justify-center">
      <div className="flex flex-col bg-white rounded-lg shadow-xl w-full max-h-full">
        <div className="bg-gray-100 py-2 px-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {initialData ? "Edit Member" : "Add New Member"}
          </h2>
        </div>
        <div className="flex-grow overflow-y-auto max-h-[calc(100vh-200px)] px-4">
          <form onSubmit={handleFormSubmit} className="flex flex-col h-full">
            <div className="grid grid-cols-1 mt-5 mx-7">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                Member Name
              </label>
              <input
                className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                type="text"
                placeholder="Member Name"
                name="memberName"
                value={formData.memberName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="grid grid-cols-1 mt-5 mx-7">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                Member Role
              </label>
              <input
                className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                type="text"
                placeholder="Member Role (President, Secretary, Treasurer....)"
                name="memberRole"
                value={formData.memberRole}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="grid grid-cols-1 mt-5 mx-7">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                Member Bio
              </label>
              <textarea
                className="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Member Bio"
                name="memberBio"
                value={formData.memberBio}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="grid grid-cols-1 mt-5 mx-7">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                Upload Member Photo
              </label>
              <div className="flex items-center justify-center w-full">
                {formData.photoPreview ? (
                  <div className="relative group">
                    <img
                      src={formData.photoPreview}
                      alt="Member Preview"
                      className="w-1/2 h-full object-cover mx-auto rounded-lg cursor-pointer"
                      onClick={() =>
                        document.getElementById("memberPhotoInput").click()
                      }
                    />
                    <div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full cursor-pointer flex items-center justify-center h-10 w-10"
                      onClick={handleRemovePhoto}
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
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H
6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider">
                        Select a photo
                      </p>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      id="memberPhotoInput"
                      onChange={handleFileChange}
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
              {addError && <p className="text-red-500 mt-2">{addError}</p>}
              {updateError && (
                <p className="text-red-500 mt-2">{updateError}</p>
              )}
              <button
                type="submit"
                className="w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2"
                disabled={addLoading || updateLoading}
              >
                {initialData ? "Update Member" : "Add Member"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMemberForm;
