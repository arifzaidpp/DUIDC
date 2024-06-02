import React from "react";
import Navbar from "../../components/navbar/Navbar";

const Sidebar = () => {
  return (
    <>
      <div className="hidden">
        <Navbar />
      </div>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full md:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="max-w-screen-xl-my flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="/admin"
              className="flex lg:order-1 items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="../main-icon.png"
                className="w-72 logo"
                alt="DUIDC Logo"
              />
            </a>
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/admin"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="/admin/subscribers"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  version="1.1"
                  id="_x32_"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <g>
                    <path
                      className="st0"
                      d="M485.22,80.604H26.78C12.013,80.604,0,92.615,0,107.382v297.229c0,14.767,12.013,26.786,26.78,26.786h458.44
		c14.767,0,26.78-12.019,26.78-26.786V107.382C512,92.615,499.987,80.604,485.22,80.604z M132.17,283.787v-4.472
		c0-2.298-0.38-4.566-1.359-7.174c-0.188-0.248-18.793-25.357-18.793-48.059c0-27.05,16.988-46.685,40.394-46.685
		s40.394,19.635,40.394,46.685c0,22.702-18.604,47.811-19.022,48.494c-0.751,2.166-1.132,4.433-1.132,6.739v4.472
		c0,6.18,3.628,11.84,9.307,14.449l30.316,12.384c6.584,3.028,11.285,9.084,12.558,16.048l1.431,18.416H78.56l1.407-18.253
		c1.294-7.128,5.998-13.184,12.518-16.18l30.442-12.446C128.542,295.627,132.17,289.967,132.17,283.787z M429.318,306.396v29.557
		H266.745v-29.557H429.318z M429.318,242.793v29.558H266.745v-29.558H429.318z M231.481,208.748v-29.557h197.836v29.557H231.481z"
                    />
                  </g>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Subscribers</span>
              </a>
            </li>
            <li>
              <a
                href="/admin/inbox"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="/admin/committee"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 640 512"
                >
                  <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Committee</span>
              </a>
            </li>
            <li>
              <a
                href="/admin/ihsas"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Ihsas</span>
              </a>
            </li>
            <li>
              <a
                href="/admin/staffs"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0  h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 470.000000 500.000000"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <g
                    transform="translate(-50.000000,500.000000) scale(0.100000,-0.100000)"
                    stroke="none"
                  >
                    <path
                      d="M2145 3529 c-165 -72 -306 -136 -312 -141 -27 -22 -9 -37 100 -85
l112 -50 -2 -109 c-7 -319 -6 -360 10 -428 53 -214 162 -373 306 -443 48 -24
68 -28 141 -28 73 0 93 4 141 28 144 70 254 230 305 443 17 68 18 121 11 428
l-2 109 113 50 c108 48 126 63 100 85 -7 5 -149 69 -315 141 -264 114 -309
131 -355 131 -45 -1 -96 -20 -353 -131z m161 -581 c187 -83 201 -83 392 2 118
52 145 61 153 49 6 -8 8 -51 4 -101 l-6 -88 26 12 c14 6 28 9 31 5 11 -10 -16
-139 -43 -207 -116 -291 -355 -392 -563 -238 -93 68 -183 243 -205 401 -8 50
-1 57 37 36 19 -10 20 -9 13 65 -7 75 -2 126 13 126 5 0 71 -28 148 -62z"
                    />
                    <path
                      d="M860 3296 c-176 -77 -235 -107 -235 -120 0 -12 25 -28 83 -53 l82
-35 -2 -187 c-2 -153 0 -198 15 -251 40 -147 117 -260 217 -318 39 -23 56 -27
125 -27 69 0 86 4 125 27 100 58 177 171 217 318 15 53 17 98 15 251 l-2 187
82 35 c59 25 83 41 83 53 0 13 -57 42 -235 120 -195 85 -243 103 -285 103 -41
0 -90 -18 -285 -103z m142 -450 c61 -27 122 -46 143 -46 21 0 83 20 151 50 63
28 117 50 119 50 3 0 5 -36 5 -80 0 -79 0 -81 22 -69 21 11 21 10 14 -46 -16
-137 -107 -280 -212 -331 -157 -77 -332 41 -398 268 -9 31 -16 70 -16 86 0 25
3 29 20 25 19 -5 20 0 20 72 0 58 3 76 13 72 6 -3 60 -26 119 -51z"
                    />
                    <path
                      d="M3575 3299 c-126 -55 -236 -106 -243 -113 -17 -17 -8 -23 91 -66 l77
-33 -2 -186 c-2 -153 0 -198 15 -251 40 -147 117 -260 217 -318 39 -23 56 -27
125 -27 69 0 86 4 125 27 100 58 177 171 217 318 15 53 17 98 15 251 l-2 187
82 35 c58 25 83 41 83 53 0 13 -59 43 -235 120 -196 86 -243 103 -285 103 -41
0 -90 -18 -280 -100z m137 -453 c62 -27 122 -46 143 -46 21 0 81 19 143 46 59
25 113 48 120 51 9 4 12 -15 12 -76 0 -79 1 -81 20 -71 18 10 20 8 20 -17 0
-46 -34 -157 -64 -208 -117 -199 -310 -232 -447 -77 -66 75 -119 202 -119 284
0 26 2 28 20 18 19 -10 20 -8 20 71 0 61 3 80 13 76 6 -3 60 -26 119 -51z"
                    />
                    <path
                      d="M1872 3278 c-15 -15 -16 -45 -1 -50 8 -3 7 -61 -2 -209 -10 -169 -10
-214 1 -252 7 -26 16 -47 20 -47 4 0 14 23 23 50 15 46 15 68 1 247 -10 133
-11 200 -4 207 15 15 12 53 -6 60 -20 8 -18 8 -32 -6z"
                    />
                    <path
                      d="M663 3113 c-15 -5 -17 -34 -5 -48 5 -6 5 -48 1 -95 -11 -127 -10
-245 2 -277 l11 -28 15 40 c12 34 12 64 2 191 -8 117 -8 157 1 174 9 18 9 25
-2 35 -7 7 -19 11 -25 8z"
                    />
                    <path
                      d="M3375 3112 c-6 -4 -10 -51 -10 -107 0 -55 -2 -140 -4 -190 -2 -56 1
-101 9 -120 l12 -30 15 40 c12 34 12 64 2 191 -8 117 -8 157 1 174 9 18 9 25
-2 36 -7 7 -18 10 -23 6z"
                    />
                    <path
                      d="M735 2307 c-199 -74 -328 -270 -313 -477 8 -110 50 -168 150 -207 37
-15 97 -18 466 -21 l422 -3 0 80 c0 179 67 351 185 480 30 32 55 61 55 64 0
12 -101 68 -155 87 -81 28 -100 26 -115 -10 -29 -69 -150 -120 -285 -120 -135
0 -256 51 -285 120 -15 37 -40 38 -125 7z"
                    />
                    <path
                      d="M3451 2309 c-51 -18 -151 -75 -151 -86 0 -3 24 -31 53 -62 115 -126
176 -276 185 -454 l5 -108 421 3 c367 3 427 6 464 21 100 39 142 97 150 207
15 211 -119 410 -323 480 -81 28 -100 26 -115 -11 -65 -156 -493 -159 -567 -4
-20 41 -40 44 -122 14z"
                    />
                    <path
                      d="M2065 2280 c-71 -15 -158 -52 -227 -97 -170 -111 -268 -297 -268
-504 0 -143 36 -222 125 -275 102 -59 100 -59 805 -59 705 0 703 0 805 59 89
53 125 132 125 275 0 207 -98 392 -268 504 -68 45 -176 89 -244 100 -35 5 -38
4 -48 -28 -6 -19 -31 -52 -56 -74 -119 -105 -369 -128 -551 -50 -56 24 -119
83 -133 125 -6 19 -15 34 -18 33 -4 -1 -25 -5 -47 -9z"
                    />
                  </g>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Staffs</span>
              </a>
            </li>
            <li>
              <a
                href="/admin/department"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Department</span>
              </a>
            </li>
            <li>
              <a
                href="/admin/gallery"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 576 512"
                >
                  <path d="M160 32c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160zM396 138.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320H328 280 200c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C360.5 132 368 128 376 128s15.5 4 20 10.7zM192 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Gallery</span>
              </a>
            </li>
            <li>
              <a
                href="/admin/events"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  fill="currentColor"
                  viewBox="0 0 129.14 122.88"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      className="st0"
                      d="M4.74,0H126.7c1.33,0,2.44,1.09,2.44,2.44v8.26c0,1.33-1.09,2.44-2.44,2.44h-1.77v53.53 c0,0.97-0.4,1.86-1.04,2.5l0,0c-0.64,0.64-1.54,1.04-2.51,1.04h-25.1v4.72h-5.17v7.33c-1.52-2.54-3.42-4.51-5.5-5.88 c-2.48-1.63-5.22-2.44-7.99-2.43c-2.79,0.01-5.52,0.86-7.99,2.52c-2.66,1.8-4.98,4.58-6.58,8.31h-9.08 c-0.17-0.06-0.35-0.13-0.53-0.19c-1.53-0.54-3.13-0.8-4.67-0.8c-1.53,0-3.12,0.26-4.67,0.8c-0.18,0.06-0.35,0.13-0.53,0.19h-3.31 v-9.86h-5.17v-4.72H10.06c-0.98,0-1.87-0.4-2.51-1.04c-0.06-0.06-0.12-0.13-0.17-0.19c-0.55-0.62-0.87-1.44-0.87-2.31V13.14H4.74 c-1.33,0-2.44-1.09-2.44-2.44V2.44C2.3,1.09,3.39,0,4.74,0L4.74,0L4.74,0z M69.51,107.71c-10.57,0-3.62,0.83-2.17-10.67 c2.15-17.19,18.5-17.19,20.91,0c1.54,11.06,8.18,10.67-2.17,10.67h-4.13c-0.02,2.82-0.45,4.26,2.47,5.83 c1.49,0.81,4.27,1.41,6.63,2.34c3.61-3.09,10.04-1.05,10.7-6.72c0.11-0.86-1.93-4.15-2.4-5.73c-1-1.6-1.36-4.12-0.26-5.8 c0.43-0.67,0.25-3.11,0.25-4.03c0-9.15,16.05-9.16,16.05,0c0,1.16-0.26,3.29,0.36,4.19c1.05,1.52,0.51,4.22-0.38,5.63 c-0.57,1.66-2.73,4.79-2.54,5.73c1.55,7.92,12.36-0.56,12.36,13.7c-41.72,0-83.45,0-125.18,0c0-14.49,13.68-6.47,14.73-15.35 c0.12-0.97-2.17-4.66-2.69-6.42c-1.11-1.79-1.52-4.62-0.29-6.5c0.48-0.75,0.28-3.48,0.28-4.52c0-10.27,17.98-10.27,17.98,0 c0,1.3-0.29,3.69,0.41,4.71c1.18,1.7,0.57,4.73-0.42,6.32c-0.64,1.86-3.06,5.37-2.86,6.42c0.76,3.84,10.32,6.44,13.65,7.85 c1.88-0.97,3.39-2.11,3.55-3.44c0.08-0.69-1.54-3.31-1.91-4.57c-0.8-1.27-1.08-3.29-0.21-4.63c0.35-0.54,0.2-2.48,0.2-3.22 c0-7.3,12.81-7.31,12.81,0c0,0.92-0.21,2.63,0.28,3.35c0.84,1.22,0.41,3.37-0.3,4.5c-0.45,1.32-2.18,3.83-2.03,4.57 c0.95,4.79,6.13,2.07,8.58,5.42c2.31-1.82,6.91-2.32,9.72-4c2.56-1.53,2.13-3.08,2.11-5.63L69.51,107.71L69.51,107.71L69.51,107.71 L69.51,107.71z M32.2,53.01c38.53,0,28.21-0.02,67.04-0.02c0.9,0,1.64,0.74,1.64,1.64v10.02c0,0.49-0.22,0.95-0.58,1.25h20.34 V13.41H10.8v52.51h20.34c-0.36-0.3-0.58-0.75-0.58-1.25V54.65C30.56,53.75,31.3,53.01,32.2,53.01L32.2,53.01L32.2,53.01z"
                    />
                  </g>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Events</span>
              </a>
            </li>
            {/* <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
              </a>
            </li> */}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
