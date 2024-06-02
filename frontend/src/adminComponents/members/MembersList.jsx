import React from "react";

const MembersList = () => {
  return (
    //     <div className="p-4 md:ml-64">
    //     <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">

    //     </div>
    //   </div>
    <div className="p-4 md:ml-64">
      <div className="p-4 py-14 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <div className="flex justify-center">
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] flex items-center gap-3"
            type="button"
          >
            <svg
              fill="#fff"
              height="800px"
              width="800px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 27.963 27.963"
              xml:space="preserve"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <g>
                <g id="c140__x2B_">
                  <path
                    d="M13.98,0C6.259,0,0,6.26,0,13.982s6.259,13.981,13.98,13.981c7.725,0,13.983-6.26,13.983-13.981
			C27.963,6.26,21.705,0,13.98,0z M21.102,16.059h-4.939v5.042h-4.299v-5.042H6.862V11.76h5.001v-4.9h4.299v4.9h4.939v4.299H21.102z
			"
                  />
                </g>
                <g id="Capa_1_9_"></g>
              </g>
            </svg>
            Add Members
          </button>
        </div>
        <div className="container relative flex flex-col text-gray-700 bg-white shadow-md w-96 mt-10 rounded-xl bg-clip-border">
          <div className="bg-gray-100 py-2 px-4">
            <h2 className="text-xl font-semibold text-gray-800">
              All Committee Members
            </h2>
          </div>
          <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
            <div
              role="button"
              className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
            >
              <div className="grid mr-4 place-items-center">
                <img
                  alt="candice"
                  src="https://docs.material-tailwind.com/img/face-1.jpg"
                  className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
                />
              </div>
              <div>
                <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                  Tania Andrew
                </h6>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                  Software Engineer @ Material Tailwind
                </p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MembersList;
