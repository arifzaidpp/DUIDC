import React from "react";

const SubMembers = (data) => {
  
  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  return (
    <div className="text-center text-gray-500 dark:text-gray-400">
      <img
        className="mx-auto mb-4 w-36 h-36 rounded-full object-cover"
        src={`data:image/jpeg;base64,${arrayBufferToBase64(
          data.data.img.data
        )}`}
        alt="Bonnie Avatar"
      />
      <h3 className="mb-1 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
        <a>{data.data.name}</a>
      </h3>
      {data.data.position ? (
        <p className="text-blk position">{data.data.position}</p>
      ) : null}
    </div>
  );
};

export default SubMembers;
