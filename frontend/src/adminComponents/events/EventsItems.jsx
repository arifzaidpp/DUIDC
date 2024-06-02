import React from 'react'

const EventsItems = () => {
  return (
    <div className="p-4 md:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className=" mt-16 text-center">
            <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
              <h2 className="text-4xl s-heading tracking-tight font-extrabold text-gray-900 dark:text-white">
                Upcoming Events
              </h2>
              <div className="underline"></div>
            </div>
            <div className="flex justify-center">
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] flex items-center gap-3"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  ></path>
                </svg>
                Add Events
              </button>
            </div>
          </div>
          <div className="flex justify-center my-14">
            <div className="w-2/3">
              <div className="bg-white shadow-lg rounded-lg p-4 mb-4 flex">
                <img
                  src="https://steamuserimages-a.akamaihd.net/ugc/938339513171723292/84874C0CBCEA963A99EA9656FF85C5AF0719E420/"
                  alt="Map 1"
                  className="w-32 h-32 object-cover rounded-t-lg mr-4"
                />
                <div>
                  <div className="flex items-center mb-2">
                    
                    <h2 className="text-xl font-semibold">Server 1</h2>
                  </div>
                  <p>Server IP: 123.456.789.1</p>
                  <p>Players Online: 24/32</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
  )
}

export default EventsItems