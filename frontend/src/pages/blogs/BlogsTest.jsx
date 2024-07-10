// "use client";

// import React from "react";
// import "./Blogs.css"
// import {
//   Button,
//   Typography,
//   Tabs,
//   TabsHeader,
//   Tab,
// } from "@material-tailwind/react";
// import { ArrowSmallDownIcon } from "@heroicons/react/24/solid";
// import BlogPostCard from "../../components/blog-post-card";
// import Navbar from "../../components/navbar/Navbar";
// import Footer from "../../components/footer/Footer";

// const POSTS = [
//   {
//     img: `/image/blogs/blog2.svg`,
//     tag: "Enterprise",
//     title: "The1 key new features and changes in Tailwind CSS",
//     desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
//     date: "10 September 2022",
//     author: {
//       img: `/image/avatar1.jpg`,
//       name: "Ryan Samuel",
//     },
//   },
//   {
//     img: `/image/blogs/blog6.svg`,
//     tag: "Startups",
//     title: "Lyft1 launching cross-platform service this week",
//     desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
//     date: "12 September 2022",
//     author: {
//       img: `/image/blogs/blog2.svg`,
//       name: "Nora Hazel",
//     },
//   },
//   {
//     img: `/image/blogs/blog3.svg`,
//     tag: "Trending",
//     title: "6 insights into the French Fashion landscape",
//     desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
//     date: "16 September 2022",
//     author: {
//       img: `/image/avatar2.jpg`,
//       name: "Otto Gonzalez",
//     },
//   },
//   {
//     img: `/image/blogs/blog4.svg`,
//     tag: "Lifestyle",
//     title: "Autodesk1 looks to future of 3D printing with Project",
//     desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
//     date: "18 September 2022",
//     author: {
//       img: `/image/avatar3.jpg`,
//       name: "Ryan Samuel",
//     },
//   },
//   {
//     img: `/image/blogs/blog5.svg`,
//     tag: "Enterprise",
//     title: "Autodesk looks to future of 3D printing with Project",
//     desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
//     date: "10 September 2022",
//     author: {
//       img: `/image/avatar3.jpg`,
//       name: "Ryan Samuel",
//     },
//   },
//   {
//     img: `/image/blogs/2.jpg`,
//     tag: "Startups",
//     title: "Lyft launching cross-platform service this week",
//     desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
//     date: "12 September 2022",
//     author: {
//       img: `2.jpg`,
//       name: "Nora Hazel",
//     },
//   },
// ];

// export function Blogs() {
//   return (
//     <>
//       <Navbar />
//       <section className="grid min-h-screen place-items-center p-8">
//         <Tabs value="trends" className="mx-auto max-w-7xl w-full mb-16 ">
//           <div className="w-full flex mb-8 flex-col items-center">
//             <TabsHeader className="h-10 !w-12/12 md:w-[50rem] bg-blue-gray-50 border border-white/25 bg-opacity-90">
//               <Tab value="trends">Trends</Tab>
//               <Tab value="frontend">Frontend</Tab>
//               <Tab value="backend">Backend</Tab>
//               <Tab value="cloud">Cloud</Tab>
//               <Tab value="ai">AI</Tab>
//               <Tab value="tools">Tools</Tab>
//             </TabsHeader>
//           </div>
//         </Tabs>
//         <Typography variant="h6" className="mb-2 f-butler">
//           Latest Blog Posts
//         </Typography>
//         <Typography variant="h1" className="mb-2 f-butler text-5xl">
//           Trends News
//         </Typography>
//         <Typography
//           variant="lead"
//           color="gray"
//           className="max-w-3xl mb-36 text-center text-gray-500"
//         >
//           Check out what&apos;s new in the web development and tech worls! Do
//           not forget to subscribe to our blog and we will notify you with the
//           latest news.
//         </Typography>
//         <div className="container my-auto grid grid-cols-1 gap-x-8 gap-y-16 items-start lg:grid-cols-3">
//           {POSTS.map(({ img, tag, title, desc, date, author }) => (
//             <BlogPostCard
//               key={title}
//               img={img}
//               tag={tag}
//               title={title}
//               desc={desc}
//               date={date}
//               author={{
//                 img: author.img,
//                 name: author.name,
//               }}
//             />
//           ))}
//         </div>
//         <Button
//           variant="text"
//           size="lg"
//           color="gray"
//           className="flex items-center gap-2 mt-24"
//         >
//           <ArrowSmallDownIcon className="h-5 w-5 font-bold text-gray-900" />
//           VIEW MORE
//         </Button>
//       </section>

//       <aside
//         aria-label="Recent Posts"
//         className="mx-auto mt-10 max-w-screen-xl py-20"
//       >
//         <div className="mx-auto max-w-screen-xl px-4 md:px-8">
//           <div className="mb-10 md:mb-16">
//             <h2 className="mb-4 font-sans text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
//             Other Articles
//             </h2>
//             <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
//               necessitatibus molestias explicabo.
//             </p>
//           </div>
//           <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
//             <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
//               <a
//                 href="#"
//                 className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
//               >
//                 <img
//                   src="https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
//                   loading="lazy"
//                   alt=""
//                   className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
//                 />
//               </a>

//               <div className="flex flex-col gap-2">
//                 <span className="text-sm text-gray-400">April 2, 2022</span>

//                 <h2 className="text-xl font-bold text-gray-800">
//                   <a
//                     href="#"
//                     className="active:text-rose-600 transition duration-100 hover:text-rose-500"
//                   >
//                     The Pines and the Mountains
//                   </a>
//                 </h2>

//                 <p className="text-gray-500">
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
//                   necessitatibus molestias explicabo.
//                 </p>

//                 <div>
//                   <a
//                     href="#"
//                     className="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600"
//                   >
//                     Read more
//                   </a>
//                 </div>
//               </div>
//             </article>
//             <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
//               <a
//                 href="#"
//                 className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
//               >
//                 <img
//                   src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
//                   loading="lazy"
//                   alt=""
//                   className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
//                 />
//               </a>

//               <div className="flex flex-col gap-2">
//                 <span className="text-sm text-gray-400">April 2, 2022</span>

//                 <h2 className="text-xl font-bold text-gray-800">
//                   <a
//                     href="#"
//                     className="active:text-rose-600 transition duration-100 hover:text-rose-500"
//                   >
//                     The Coding Mania
//                   </a>
//                 </h2>

//                 <p className="text-gray-500">
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
//                   necessitatibus molestias explicabo.
//                 </p>

//                 <div>
//                   <a
//                     href="#"
//                     className="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600"
//                   >
//                     Read more
//                   </a>
//                 </div>
//               </div>
//             </article>
//             <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
//               <a
//                 href="#"
//                 className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
//               >
//                 <img
//                   src="https://images.unsplash.com/photo-1496395031280-4201b0e022ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
//                   loading="lazy"
//                   alt=""
//                   className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
//                 />
//               </a>

//               <div className="flex flex-col gap-2">
//                 <span className="text-sm text-gray-400">April 2, 2022</span>

//                 <h2 className="text-xl font-bold text-gray-800">
//                   <a
//                     href="#"
//                     className="active:text-rose-600 transition duration-100 hover:text-rose-500"
//                   >
//                     Architectural Warfare
//                   </a>
//                 </h2>

//                 <p className="text-gray-500">
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
//                   necessitatibus molestias explicabo.
//                 </p>

//                 <div>
//                   <a
//                     href="#"
//                     className="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600"
//                   >
//                     Read more
//                   </a>
//                 </div>
//               </div>
//             </article>
//             <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
//               <a
//                 href="#"
//                 className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
//               >
//                 <img
//                   src="https://images.unsplash.com/photo-1510081887155-56fe96846e71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
//                   loading="lazy"
//                   alt=""
//                   className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
//                 />
//               </a>

//               <div className="flex flex-col gap-2">
//                 <span className="text-sm text-gray-400">April 2, 2022</span>

//                 <h2 className="text-xl font-bold text-gray-800">
//                   <a
//                     href="#"
//                     className="active:text-rose-600 transition duration-100 hover:text-rose-500"
//                   >
//                     Blues in Architechture
//                   </a>
//                 </h2>

//                 <p className="text-gray-500">
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
//                   necessitatibus molestias explicabo.
//                 </p>

//                 <div>
//                   <a
//                     href="#"
//                     className="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600"
//                   >
//                     Read more
//                   </a>
//                 </div>
//               </div>
//             </article>
//           </div>
//         </div>
//       </aside>


//       <Footer />
//     </>
//   );
// }

// export default Blogs;
