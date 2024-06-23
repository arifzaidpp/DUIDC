import React, { useEffect, useState } from "react";
import "./Members.css";
import MainMembers from "./MainMembers";
import SubMembers from "./SubMembers";

const Members = (data) => {
  const MPLength = data.data[0].mainMembers.length;
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="py-20 bg-gray-50 pt-14">
          <div className="container mx-auto px-6 md:px-12 xl:px-32">
            <div className="mb-16 text-center">
              <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                <h2 className="text-4xl s-heading tracking-tight font-extrabold text-gray-900 dark:text-white">
                  {data.data[0].name}
                </h2>
                <div className="underline"></div>
              </div>
            </div>
            <div
              className={`grid gap-12 items-center ${
                MPLength >= 3 ? "md:grid-cols-3" : "md:grid-cols-2"
              }`}
            >
              {data.data[0].mainMembers.map((data, i) => (
                <MainMembers key={i} data={data} />
              ))}
            </div>
          </div>
        </div>
        {data.data[0].members.map((sub, i) => (
          <div
            key={i}
            className="pb-16 px-4 mx-auto max-w-screen-xl text-center lg:by-16 lg:px-6"
          >
            <div className="mx-auto mb-8 max-w-screen-sm lg:mb-10">
              <h2 className="mb-4 text-4xl tracking-tight s-t-heading font-extrabold text-gray-900 dark:text-white">
                {sub.name}
              </h2>
            </div>
            <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-4">
              {sub.members.map((data, i) => (
                <SubMembers key={i} data={data} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Members;
