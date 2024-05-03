import React from "react";
import "./HeaderBottom.css";

const HeaderBottom = () => {
    return (
        <nav
            className="navBot hidden lg:block dark:bg-gray-900 items-center text-center content-center  w-full z-20 top-0 start-0 border-gray-200 dark:border-gray-600"
            style={{ backgroundColor: "#9d2235" }}
        >
            <div className="max-w-fit text-center content-center items-center p-3 inline-flex">
                <div
                    className="items-center text-center content-center flex md:w-auto"
                    id="navbar-search"
                >
                    <ul className="flex p-0 mt-0 font-medium items-center border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a
                                href="#"
                                className="block  px-4 text-white head-items rounded md:bg-transparent md:text-white md:p-0 md:dark:text-blue-500"
                                aria-current="page"
                            >
                                <div className="link-underline link-underline-black">Home</div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block  px-4 text-white head-items rounded md:bg-transparent md:text-white"
                            >
                                <div className="link-underline link-underline-black">
                                Department
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block  px-4 text-white head-items rounded md:bg-transparent md:text-white"
                            >
                                <div className="link-underline link-underline-black">
                                    Admission
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block px-4 text-white head-items rounded md:bg-transparent md:text-white"
                            >
                                <div className="link-underline link-underline-black">Blogs </div>
                            </a>
                        </li>
                        <li>

                            <button
                                id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover"
                                className="flex items-center justify-between w-full py-2 px-4 text-white head-items rounded md:p-0 md:w-auto"
                            >
                                <div className="link-underline link-underline-black flex">
                                    Pages{" "}
                                    <svg
                                        className="w-2.5 h-2.5 ms-2 mt-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 4 4 4-4"
                                        />
                                    </svg>
                                </div>
                            </button>
                            <div
                                id="dropdownHover"
                                className="z-50 hidden ease-in-out font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                            >
                                <ul
                                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdownHoverButton"
                                >
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Campus Life
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Donate
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Events
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default HeaderBottom;
