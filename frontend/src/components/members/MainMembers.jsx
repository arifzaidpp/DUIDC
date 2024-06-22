import React from "react";

const MainMembers = (data) => {

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
    <div className="space-y-4 text-center">
      <h1 className="s-sub-h">{data.data.position}</h1>
      <img
        className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
        src={`data:image/jpeg;base64,${arrayBufferToBase64(
          data.data.img.data
        )}`}
        alt="woman"
        loading="lazy"
        width="640"
        height="805"
      />
      <div>
        <h4 className="text-1xl">{data.data.name}</h4>
      </div>
    </div>
  );
};

export default MainMembers;
