// MembersList.js (continued)

import React, { useState } from "react";
import Popup from "../popup/Popup";
import AddMemberForm from "./addMemberForm";
import toast from "react-hot-toast";
import useDeleteMember from "../../hooks/useDeleteMember";
import useDeleteIhsas from "../../hooks/useDeleteIhsas";
import useDeleteStaff from "../../hooks/useDeleteStaff";
import useDeleteDepartment from "../../hooks/useDeleteDepartment";

const MembersList = ({ members, loading, error, fetchMembers, page }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [initialData, setInitialData] = useState(null);
  const { deleteMember, isLoading: load } = useDeleteMember();
  const { deleteIhsas, isLoading: load1 } = useDeleteIhsas();
  const { deleteStaff, isLoading: load2 } = useDeleteStaff();
  const { deleteDepartment, isLoading: load3 } = useDeleteDepartment();

  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  const handleAddMemberClick = () => {
    setInitialData(null); // Clear initial data for new member
    setIsPopupOpen(true);
  };

  const handleEditMemberClick = (member) => {
    setInitialData(member); // Set initial data for editing
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleRemoveMemberClick = async (member) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${member.name}?`
    );

    if (!confirmed) {
      return; // If not confirmed, exit function
    }

    try {
      if (!member) return;

      if (page === "committee") {
        await deleteMember(member._id, member.position);
        await fetchMembers(); // Refresh events list after deletion
      } else if (page === "ihsas") {
        await deleteIhsas(member._id, member.position);
        await fetchMembers(); // Refresh events list after deletion
      } else if (page === "staffs") {
        await deleteStaff(member._id, member.position);
        await fetchMembers(); // Refresh events list after deletion
      } else if (page === "department") {
        await deleteDepartment(member._id, member.position);
        await fetchMembers(); // Refresh events list after deletion
      }
    } catch (error) {
      console.error("Error deleting event:", error);
      toast.error(`Error deleting event: ${error.message}`);
    }
  };

  return (
    <div className="p-4 md:ml-64">
      <div className="p-4 py-14 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <div className="flex flex-col items-center">
          <div className="mt-4 text-center">
            <div className="mx-auto mb-8 max-w-screen-sm">
              <h2 className="text-4xl s-heading tracking-tight capitalize font-extrabold text-gray-900 dark:text-white">
                {page}
              </h2>
              <div className="underline"></div>
            </div>
            <div className="flex justify-center gap-4">
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] flex items-center gap-3"
                type="button"
                onClick={handleAddMemberClick}
              >
                Add Member
              </button>
            </div>
          </div>
        </div>
        <div className="container relative flex flex-col text-gray-700 bg-white shadow-md w-full max-w-2xl mt-10 rounded-xl bg-clip-border">
          <div className="bg-gray-100 py-2 px-4 rounded-t-xl">
            <h2 className="text-xl font-semibold capitalize text-gray-800">
              All {page} Members
            </h2>
          </div>
          <nav className="flex flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
            <div className="bg-gray-200 py-2 px-4 rounded-t-xl">
              <h3 className="text-lg font-semibold text-gray-700">
                Main Members
              </h3>
            </div>
            {loading && members.length === 0 ? (
              <p>Loading...</p>
            ) : error && members.length === 0 ? (
              <p>Error: {error}</p>
            ) : (
              members.length !== 0 &&
              members[0]?.mainMembers?.map((member) => (
                <div
                  key={member._id} // Assuming each member has a unique _id field
                  className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <div className="grid place-items-center mr-4">
                    <img
                      alt="Member Avatar"
                      src={`data:image/jpeg;base64,${arrayBufferToBase64(
                        member.img.data
                      )}`} // Adjust as per your member object structure
                      className="relative inline-block h-12 w-12 rounded-full object-cover object-center"
                    />
                  </div>
                  <div className="flex-1">
                    <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                      {member.name}
                    </h6>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                      {member.position}
                    </p>
                  </div>
                  <div className="flex gap-2 ml-auto">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => handleEditMemberClick(member)}
                    >
                      <svg
                        fill="currentColor"
                        height="23px"
                        width="23px"
                        viewBox="0 0 528.899 528.899"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlSpace="preserve"
                      >
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981   c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611   C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069   L27.473,390.597L0.3,512.69z"
                        />
                      </svg>
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleRemoveMemberClick(member)}
                    >
                      <svg
                        fill="currentColor"
                        height="25px"
                        width="25px"
                        viewBox="0 0 64 64"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M 28 3 C 25.791 3 24 4.791 24 7 L 24 9 L 23.599609 9 L 7 11 L 7 14 L 57 14 L 57 11 L 40.400391 9 L 40 9 L 40 7 C 40 4.791 38.209 3 36 3 L 28 3 z M 28 7 L 36 7 L 36 9 L 28 9 L 28 7 z M 10 16 L 14 58 L 50 58 L 53.923828 17 L 10 16 z M 32 23 C 33.333 23 34 24 34 24 L 34 53 L 30 53 L 30 24 C 30 24 30.667 23 32 23 z M 18.976562 23.070312 C 20.306563 22.977313 21.042969 23.929688 21.042969 23.929688 L 23.007812 53 L 18.996094 53 L 17.052734 24.207031 C 17.052734 24.207031 17.646563 23.163313 18.976562 23.070312 z M 44.978516 23.070312 C 46.308516 23.163312 46.904297 24.207031 46.904297 24.207031 L 44.960938 53 L 40.949219 53 L 42.914062 23.929688 C 42.914062 23.929688 43.648516 22.977312 44.978516 23.070312 z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              ))
            )}
            <div className="bg-gray-200 py-2 px-4 rounded-t-xl mt-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Other Members
              </h3>
            </div>
            {/* Example other member card */}
            {loading && members.length === 0 ? (
              <p>Loading...</p>
            ) : error && members.length === 0 ? (
              <p>Error: {error}</p>
            ) : (
              members.length !== 0 &&
              members[0]?.members[0]?.members?.map((member) => (
                <div
                  key={member._id}
                  className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <div className="grid place-items-center mr-4">
                    <img
                      alt="candice"
                      src={`data:image/jpeg;base64,${arrayBufferToBase64(
                        member.img.data
                      )}`}
                      className="relative inline-block h-12 w-12 rounded-full object-cover object-center"
                    />
                  </div>
                  <div className="flex-1">
                    <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                      {member.name}
                    </h6>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                      {member.position}
                    </p>
                  </div>
                  <div className="flex gap-2 ml-auto">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => handleEditMemberClick(member)}
                    >
                      <svg
                        fill="currentColor"
                        height="23px"
                        width="23px"
                        viewBox="0 0 528.899 528.899"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlSpace="preserve"
                      >
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981   c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611   C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069   L27.473,390.597L0.3,512.69z"
                        />
                      </svg>
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleRemoveMemberClick(member)}
                    >
                      <svg
                        fill="currentColor"
                        height="25px"
                        width="25px"
                        viewBox="0 0 64 64"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M 28 3 C 25.791 3 24 4.791 24 7 L 24 9 L 23.599609 9 L 7 11 L 7 14 L 57 14 L 57 11 L 40.400391 9 L 40 9 L 40 7 C 40 4.791 38.209 3 36 3 L 28 3 z M 28 7 L 36 7 L 36 9 L 28 9 L 28 7 z M 10 16 L 14 58 L 50 58 L 53.923828 17 L 10 16 z M 32 23 C 33.333 23 34 24 34 24 L 34 53 L 30 53 L 30 24 C 30 24 30.667 23 32 23 z M 18.976562 23.070312 C 20.306563 22.977313 21.042969 23.929688 21.042969 23.929688 L 23.007812 53 L 18.996094 53 L 17.052734 24.207031 C 17.052734 24.207031 17.646563 23.163313 18.976562 23.070312 z M 44.978516 23.070312 C 46.308516 23.163312 46.904297 24.207031 46.904297 24.207031 L 44.960938 53 L 40.949219 53 L 42.914062 23.929688 C 42.914062 23.929688 43.648516 22.977312 44.978516 23.070312 z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              ))
            )}
          </nav>
        </div>
      </div>
      {isPopupOpen && (
        <Popup isOpen={isPopupOpen} onClose={closePopup}>
          <AddMemberForm
            initialData={initialData}
            onSubmit={fetchMembers}
            onClose={closePopup}
            page={page}
          />
        </Popup>
      )}
    </div>
  );
};

export default MembersList;
