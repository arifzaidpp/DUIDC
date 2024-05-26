import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Post = () => {
  return (
    <>
      <Navbar />

      <main>
        <article>
          <header className="mx-auto max-w-screen-xl pt-28 text-center">
            <p className="text-gray-500">Published April 4, 2022</p>
            <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">
              7 rules of effective marketing
            </h1>
            <p className="mt-6 text-lg text-gray-700">Writer</p>
            <div
              className="mt-6 flex flex-wrap justify-center gap-2"
              aria-label="Tags"
            >
              <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                Marketing
              </button>
              <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                Branding
              </button>
              <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                Digital
              </button>
              <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                Identity
              </button>
            </div>
            <img
              className="sm:h-[34rem] mt-10 w-full object-contain"
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Featured Image"
            />
          </header>

          <div className="w-screen bg-white pt-20">
            <main className="relative mx-auto px-10 md:max-w-screen-md">
              <div className="top-20 -left-56 mb-10 w-full max-w-xs rounded-md border bg-white px-6 py-6 shadow-md xl:absolute mx-auto xl:w-56">
                <div className="pb-2 text-xl font-medium text-orange-600">
                  Table of Contents
                </div>
                <hr className="h-1 w-10 bg-orange-600" />
                <div className="mt-4">
                  <div className="mb-3">
                    <a
                      className="mb-1 text-sm font-medium text-orange-600 hover:text-orange-600"
                      href="#section-one"
                    >
                      Section One
                    </a>
                  </div>
                  <div className="mb-3">
                    <a
                      className="mb-1 text-sm font-medium text-gray-600 hover:text-orange-600"
                      href="#section-two"
                    >
                      Section Two
                    </a>
                  </div>
                  <div className="mb-3">
                    <a
                      className="mb-1 text-sm font-medium text-gray-600 hover:text-orange-600"
                      href="#"
                    >
                      How to get Stuff Done
                    </a>
                  </div>
                  <div className="mb-3">
                    <a
                      className="mb-1 text-sm font-medium text-gray-600 hover:text-orange-600"
                      href="#"
                    >
                      Lorem ipsum dolor
                    </a>
                  </div>
                  <div className="mb-3">
                    <a
                      className="mb-1 text-sm font-medium text-gray-600 hover:text-orange-600"
                      href="#"
                    >
                      Are Aliens tiny?
                    </a>
                  </div>
                  <div className="mb-3">
                    <a
                      className="mb-1 text-sm font-medium text-gray-600 hover:text-orange-600"
                      href="#"
                    >
                      Ipsum Dolor
                    </a>
                  </div>
                </div>
              </div>
              <article className="text-gray-800">
                <div className="mx-auto max-w-screen-md space-y-12 px-4 pb-10 font-serif text-lg tracking-wide text-gray-700">
                  <strong className="text-2xl font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Maxime impedit ex consequatur nostrum cupiditate at sequi?
                    Ipsam commodi modi officia mollitia doloribus tenetur
                    consectetur quae?
                  </strong>
                </div>
                <h2 id="section-one" className="mb-4 text-3xl font-bold">
                  Section One
                </h2>
                <p className="mb-10 text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aspernatur quae asperiores error hic minima dicta. Assumenda,
                  enim. Voluptate facere ea eveniet quaerat neque ipsam iste
                  corrupti sapiente sed! Temporibus, magni?
                </p>
                <p className="mb-10 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, quasi! Vitae voluptatibus, illum voluptatum dolores
                  excepturi, architecto rem voluptatem minus nulla expedita
                  tempore, ratione non animi dicta eum consequatur nam hic
                  veniam accusantium vel? Cumque magni provident eius temporibus
                  soluta iusto corporis vel eum at consectetur architecto eos
                  nisi voluptas quas natus dolores, reiciendis incidunt esse
                  inventore ab impedit quos. Expedita exercitationem qui quae
                  architecto libero reiciendis laborum nostrum commodi, omnis
                  vero, earum dicta provident! Necessitatibus cupiditate,
                  voluptate eos est incidunt soluta nam voluptatum? Quidem
                  repellendus neque enim quos nobis ex fugiat autem placeat
                  officia illum inventore, itaque quibusdam rerum?
                </p>
                <h2 id="section-two" className="mb-4 text-3xl font-bold">
                  Section Two
                </h2>
                <p className="mb-10 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, quasi! Vitae voluptatibus, illum voluptatum dolores
                  excepturi, architecto rem voluptatem minus nulla expedita
                  tempore, ratione non animi dicta eum consequatur nam hic
                  veniam accusantium vel? Cumque magni provident eius temporibus
                  soluta iusto corporis vel eum at consectetur architecto eos
                  nisi voluptas quas natus dolores, reiciendis incidunt esse
                  inventore ab impedit quos. Expedita exercitationem qui quae
                  architecto libero reiciendis laborum nostrum commodi, omnis
                  vero, earum dicta provident! Necessitatibus cupiditate,
                  voluptate eos est incidunt soluta nam voluptatum? Quidem
                  repellendus neque enim quos nobis ex fugiat autem placeat
                  officia illum inventore, itaque quibusdam rerum?
                </p>

                <p className="mb-10 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Saepe, at. quos nobis ex fugiat autem placeat officia
                  illum inventore, itaque quibusdam rerum?
                </p>

                <p className="mb-10 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  autem earum nulla, quis doloribus perspiciatis? Corrupti nam
                  tenetur dolor alias.
                </p>
              </article>
            </main>
          </div>
        </article>
      </main>

      <div className="w-fit mx-auto mt-10 flex space-x-2">
        <div className="h-0.5 w-2 bg-gray-600"></div>
        <div className="h-0.5 w-32 bg-gray-600"></div>
        <div className="h-0.5 w-2 bg-gray-600"></div>
      </div>

      <aside
        aria-label="Recent Posts"
        className="mx-auto mt-10 max-w-screen-xl py-20"
      >
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Most Recent Posts
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              necessitatibus molestias explicabo.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
            <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  loading="lazy"
                  alt=""
                  className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                />
              </a>

              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">April 2, 2022</span>

                <h2 className="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    className="active:text-rose-600 transition duration-100 hover:text-rose-500"
                  >
                    The Pines and the Mountains
                  </a>
                </h2>

                <p className="text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  necessitatibus molestias explicabo.
                </p>

                <div>
                  <a
                    href="#"
                    className="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </article>
            <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  loading="lazy"
                  alt=""
                  className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                />
              </a>

              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">April 2, 2022</span>

                <h2 className="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    className="active:text-rose-600 transition duration-100 hover:text-rose-500"
                  >
                    The Coding Mania
                  </a>
                </h2>

                <p className="text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  necessitatibus molestias explicabo.
                </p>

                <div>
                  <a
                    href="#"
                    className="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </article>
            <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1496395031280-4201b0e022ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  loading="lazy"
                  alt=""
                  className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                />
              </a>

              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">April 2, 2022</span>

                <h2 className="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    className="active:text-rose-600 transition duration-100 hover:text-rose-500"
                  >
                    Architectural Warfare
                  </a>
                </h2>

                <p className="text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  necessitatibus molestias explicabo.
                </p>

                <div>
                  <a
                    href="#"
                    className="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </article>
            <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1510081887155-56fe96846e71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
                  loading="lazy"
                  alt=""
                  className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                />
              </a>

              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">April 2, 2022</span>

                <h2 className="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    className="active:text-rose-600 transition duration-100 hover:text-rose-500"
                  >
                    Blues in Architechture
                  </a>
                </h2>

                <p className="text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  necessitatibus molestias explicabo.
                </p>

                <div>
                  <a
                    href="#"
                    className="active:text-rose-700 font-semibold text-rose-500 transition duration-100 hover:text-rose-600"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </aside>

      <Footer />
    </>
  );
};

export default Post;
