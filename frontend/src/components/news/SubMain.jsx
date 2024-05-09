import React from "react";
import SMFirst from "./SMFirst";
import SMSecond from "./SMSecond";

const SubMain = () => {
  return (
    <div className="grid md:grid-cols-2 grid-flow-col gap-7">
      <SMFirst />
      <SMSecond />
    </div>
  );
};

export default SubMain;
