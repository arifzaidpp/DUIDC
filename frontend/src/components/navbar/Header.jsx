import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./Header.css";
import "../../js/Header.js"

const Header = () => {
    return (
        <HelmetProvider>
            <div className="bg-white h-28 n-main items-center pt-2 z-50">
                <nav id="nav" className="navbar bg-white border-gray-200 dark:bg-gray-900 items-center">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a
                            href="/"
                            className="flex lg:order-1 items-center space-x-3 rtl:space-x-reverse"
                        >
                            <img
                                src="../main-icon.png"
                                className="w-64 lg:w-full logo"
                                alt="DUIDC Logo"
                            />
                        </a>
                        <div className="flex lg:order-2">
                            <button
                                type="button"
                                data-collapse-toggle="navbar-search"
                                aria-controls="navbar-search"
                                aria-expanded="false"
                                className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
                            >
                                <svg
                                    className="w-5 h-5 search-icon-btn"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                            <div className="relative hidden md:block">
                                <div className="header-search-form">
                                    <form
                                        role="search"
                                        method="get"
                                        className="search-form"
                                        action="/"
                                    >
                                        <label>
                                            <input
                                                type="search"
                                                className="search-field"
                                                placeholder="Search…"
                                            />
                                        </label>
                                        <button type="submit" className="search-submit">
                                            <svg
                                                className="w-5 h-5 search-btn-icon"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                                />
                                            </svg>
                                            <span className="sr-only">Search icon</span>
                                            <span className="search-btn-text">Search </span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <button
                                data-collapse-toggle="navbar-search"
                                type="button"
                                className="inline-flex items-center p-2 ml-3 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-search"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                <img src="/menu-icon.svg" alt="" />
                            </button>
                        </div>
                        <div
                            className="items-center justify-between hidden w-full z-50 bg-gray-300"
                            id="navbar-search"
                        >
                            <div className="md:hidden relative mt-3 lg:hidden">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg
                                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="search-navbar"
                                    className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search..."
                                />
                            </div>
                            <ul className="flex flex-col p-4 lg:p-0 mt-4 md:mt-0 font-medium bg-white border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-2 text-gray-500 rounded hover:bg-gray-100 lg:hover:bg-transparent head-item lg:p-0 first-item"
                                        aria-current="page"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-2 text-gray-500 rounded hover:bg-gray-100 lg:hover:bg-transparent head-item lg:p-0"
                                    >
                                        Academics
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-2 text-gray-500 rounded hover:bg-gray-100 lg:hover:bg-transparent head-item lg:p-0"
                                    >
                                        Admissions
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-2 text-gray-500 rounded hover:bg-gray-100 lg:hover:bg-transparent head-item lg:p-0"
                                    >
                                        News
                                    </a>
                                </li>
                                <li>

                                    <button
                                        id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" 
                                        className="flex py-2 px-2 w-full text-gray-500 rounded hover:bg-gray-100 lg:hover:bg-transparent head-item lg:p-0"
                                    >
                                        <div className="link-underline link-underline-black flex">
                                            Pages{" "}
                                            <svg
                                                className="w-2.5 h-2.5 ms-3 mt-2"
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
                                        id="dropdownNavbar"
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
                                                    Library
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                >
                                                    Careers
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
                                                    Blog
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
                        <div
                            className="items-center justify-between hidden w-full lg:flex lg:w-auto "
                        >
                            <div className="relative mt-3 lg:hidden">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg
                                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="search-navbar"
                                    className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search..."
                                />
                            </div>
                            <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-2 text-gray-500 rounded hover:bg-gray-100 lg:hover:bg-transparent head-item lg:p-0"
                                        aria-current="page"
                                    >
                                        STUDENTS
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-2 text-gray-500 rounded hover:bg-gray-100 lg:hover:bg-transparent head-item lg:p-0"
                                    >
                                        STAFFS
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-2 text-gray-500 rounded hover:bg-gray-100 lg:hover:bg-transparent head-item lg:p-0"
                                    >
                                        ALUMNI
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-2 text-gray-500 rounded hover:bg-gray-100 lg:hover:bg-transparent head-item lg:p-0"
                                    >
                                        MEDIA
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>



                
            </div>
            <Helmet>
                <script src="https://flowbite.com/docs/flowbite.min.js"></script>
                <script src="https://flowbite.com/docs/datepicker.min.js"></script>
            </Helmet>
        </HelmetProvider>
    );
};

export default Header;
