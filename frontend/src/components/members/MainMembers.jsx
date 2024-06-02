import React from "react";

const MainMembers = (data) => {
  return (
    <div className="space-y-4 text-center">
      <h1 className="s-sub-h">{data.data.position}</h1>
      <img
        className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
        src={data.data.img}
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
