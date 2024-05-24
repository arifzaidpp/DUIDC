import React from "react";
import "./StaffMembers.css";

const StaffMembers = () => {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="py-20 bg-gray-50 pt-14">
          <div className="container mx-auto px-6 md:px-12 xl:px-32">
            <div className="mb-16 text-center">
              <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                <h2 className="text-4xl s-heading tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Our Staffs
                </h2>
                <div className="underline"></div>
              </div>
            </div>
            <div className="grid gap-12 items-center md:grid-cols-2">
              <div className="space-y-4 text-center">
                <h1 className="s-sub-h">Principle</h1>
                <img
                  className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                  src="https://tailus.io/sources/blocks/classic/preview/images/man.jpg"
                  alt="woman"
                  loading="lazy"
                  width="640"
                  height="805"
                />
                <div>
                  <h4 className="text-2xl">Hentoni Doe</h4>
                </div>
              </div>

              <div className="space-y-4 text-center">
                <h1 className="s-sub-h">Vice-principal</h1>
                <img
                  className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                  src="https://tailus.io/sources/blocks/classic/preview/images/man.jpg"
                  alt="woman"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
                <div>
                  <h4 className="text-2xl">Anabelle Doe</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-10">
            <h2 className="mb-4 text-4xl tracking-tight s-t-heading font-extrabold text-gray-900 dark:text-white">
              Teachers
            </h2>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src="scholar.png"
                alt="Bonnie Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Bonnie Green</a>
              </h3>
              
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src="scholar.png"
                alt="Bonnie Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Bonnie Green</a>
              </h3>
               
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src="scholar.png"
                alt="Bonnie Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Bonnie Green</a>
              </h3>
               
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src="scholar.png"
                alt="Bonnie Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Bonnie Green</a>
              </h3>
               
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src="scholar.png"
                alt="Bonnie Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Bonnie Green</a>
              </h3>
               
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src="scholar.png"
                alt="Bonnie Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Bonnie Green</a>
              </h3>
               
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src="scholar.png"
                alt="Bonnie Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Bonnie Green</a>
              </h3>
               
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <img
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src="scholar.png"
                alt="Bonnie Avatar"
              />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Bonnie Green</a>
              </h3>
               
            </div>
          </div>
        </div>
      </section>
      {/* <div  className={`${styles["container-fluid"]} ${styles["page-header"]}`}
    //   style="margin-bottom: 90px;"
      >
        <div  className={`${styles["container"]}`}>
          <div
             className={`${styles["d-flex"]} ${styles["flex-column"]} ${styles["justify-content-center"]}`}
            // style="min-height: 300px"
          >
            <h3  className={`${styles["display-4"]} ${styles["text-white"]} ${styles["text-uppercase"]}`}>Teachers</h3>
            <div  className={`${styles["d-inline-flex"]} ${styles["text-white"]}`}>
              <p  className={`${styles["m-0"]}"]} ${styles["text-uppercase"]}`}>
                <a  className={`${styles["text-white"]}`} href="">
                  Home
                </a>
              </p>
              <i  className={`${styles["fa"]} ${styles["fa-angle-double-right"]} ${styles["pt-1"]} ${styles["px-3"]}`}></i>
              <p  className={`${styles["m-0"]} ${styles["text-uppercase"]}"]}`}>Teachers</p>
            </div>
          </div>
        </div>
      </div>


      <div  className={`${styles["container-fluid"]} ${styles["py-5"]}`}>
        <div  className={`${styles["container"]} ${styles["pt-5"]} ${styles["pb-3"]}`}>
          <div  className={`${styles["text-center"]} ${styles["mb-5"]}`}>
            <h5
               className={`${styles["text-primary"]} ${styles["text-uppercase"]} ${styles["mb-3"]}`}
            //   style="letter-spacing: 5px;"
            >
              Teachers
            </h5>
            <h1>Meet Our Teachers</h1>
          </div>
          <div  className={`${styles["row"]}`}>
            <div  className={`${styles["col-md-6"]} ${styles["col-lg-3"]} ${styles["text-center"]} ${styles["team"]} ${styles["mb-4"]}`}>
              <div  className={`${styles["team-item"]} ${styles["rounded"]} ${styles["overflow-hidden"]} ${styles["mb-2"]}`}>
                <div  className={`${styles["team-img"]} ${styles["position-relative"]}`}>
                  <img  className={`${styles["img-fluid" ]}`}src="img/team-1.jpg" alt="" />
                  <div  className={`${styles["team-social"]}`}>
                    <a  className={`${styles["btn"]} ${styles["btn-outline-light"]} ${styles["btn-square"]} ${styles["mx-1"]}`} href="#">
                      <i  className={`${styles["fab"]} ${styles["fa-twitter"]}`}></i>
                    </a>
                    <a  className={`${styles["btn"]} ${styles["btn-outline-light"]} ${styles["btn-square"]} ${styles["mx-1"]}`} href="#">
                      <i  className={`${styles["fab"]} ${styles["fa-facebook-f"]}`}></i>
                    </a>
                    <a  className={`${styles["btn"]} ${styles["btn-outline-light"]} ${styles["btn-square"]} ${styles["mx-1"]}`} href="#">
                      <i  className={`${styles["fab"]} ${styles["fa-linkedin-in"]}`}></i>
                    </a>
                  </div>
                </div>
                <div  className={`${styles["bg-secondary"]} ${styles["p-4"]}`}>
                  <h5>Jhon Doe</h5>
                  <p  className={`${styles["m-0"]}`}>Web Designer</p>
                </div>
              </div>
            </div>
            <div  className={`${styles["col-md-6"]} ${styles["col-lg-3"]} ${styles["text-center"]} ${styles["team"]} ${styles["mb-4"]}`}>
              <div  className={`${styles["team-item"]} ${styles["rounded"]} ${styles["overflow-hidden"]} ${styles["mb-2"]}`}>
                <div  className={`${styles["team-img"]}  ${styles["position-relative"]}`}>
                  <img  className={`${styles["img-fluid"]} src="img/team-2.jpg"]}`} alt="" />
                  <div  className={`${styles["team-social"]}`}>
                    <a  className={`${styles["btn"]} ${styles["btn-outline-light"]} ${styles["btn-square"]} ${styles["mx-1"]}`} href="#">
                      <i  className={`${styles["fab"]} ${styles["fa-twitter"]}`}></i>
                    </a>
                    <a  className={`${styles["btn"]} ${styles["btn-outline-light"]} ${styles["btn-square "]} ${styles["mx-1"]}`} href="#">
                      <i  className={`${styles["fab"]} ${styles["fa-facebook-f"]}`}></i>
                    </a>
                    <a  className={`${styles["btn"]} ${styles["btn-outline-light"]} ${styles["btn-square"]} ${styles["mx-1"]}`} href="#">
                      <i  className={`${styles["fab"]} ${styles["fa-linkedin-in"]}`}></i>
                    </a>
                  </div>
                </div>
                <div  className={`${styles["bg-secondary"]} ${styles["p-4"]}`}>
                  <h5>Jhon Doe</h5>
                  <p  className={`${styles["m-0"]}`}>Web Designer</p>
                </div>
              </div>
            </div>
            <div  className={`${styles["col-md-6"]} col-lg-3 text-center team mb-4"]}`}>
              <div  className={`${styles["team-item"]} rounded overflow-hidden mb-2"]}`}>
                <div  className={`${styles["team-img"]} position-relative"]}`}>
                  <img  className={`${styles["img-fluid"]}`} src="img/team-3.jpg" alt="" />
                  <div  className={`${styles["team-social"]}`}>
                    <a  className={`${styles["btn"]} btn-outline-light btn-square mx-1"]}`} href="#">
                      <i  className={`${styles["fab"]} fa-twitter"]}`}></i>
                    </a>
                    <a  className={`${styles["btn"]} btn-outline-light btn-square mx-1"]}`} href="#">
                      <i  className={`${styles["fab"]} fa-facebook-f"]}`}></i>
                    </a>
                    <a  className={`${styles["btn"]} btn-outline-light btn-square mx-1" ]}`}href="#">
                      <i  className={`${styles["fab"]} fa-linkedin-in"]}`}></i>
                    </a>
                  </div>
                </div>
                <div  className={`${styles["bg-secondary"]} p-4"]}`}>
                  <h5>Jhon Doe</h5>
                  <p  className={`${styles["m-0"]}`}>Web Designer</p>
                </div>
              </div>
            </div>
            <div  className={`${styles["col-md-6 col-lg-3 text-center team mb-4">
              <div  className={`${styles["team-item rounded overflow-hidden mb-2">
                <div  className={`${styles["team-img position-relative">
                  <img  className={`${styles["img-fluid" src="img/team-4.jpg" alt="" />
                  <div  className={`${styles["team-social">
                    <a  className={`${styles["btn btn-outline-light btn-square mx-1" href="#">
                      <i  className={`${styles["fab fa-twitter"></i>
                    </a>
                    <a  className={`${styles["btn btn-outline-light btn-square mx-1" href="#">
                      <i  className={`${styles["fab fa-facebook-f"></i>
                    </a>
                    <a  className={`${styles["btn btn-outline-light btn-square mx-1" href="#">
                      <i  className={`${styles["fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                <div  className={`${styles["bg-secondary p-4">
                  <h5>Jhon Doe</h5>
                  <p  className={`${styles["m-0"]}">Web Designer</p>
                </div>
              </div>
            </div>
            <div  className={`${styles["col-md-6 col-lg-3 text-center team mb-4">
              <div  className={`${styles["team-item rounded overflow-hidden mb-2">
                <div  className={`${styles["team-img position-relative">
                  <img  className={`${styles["img-fluid" src="img/team-1.jpg" alt="" />
                  <div  className={`${styles["team-social">
                    <a  className={`${styles["btn btn-outline-light btn-square mx-1" href="#">
                      <i  className={`${styles["fab fa-twitter"></i>
                    </a>
                    <a  className={`${styles["btn btn-outline-light btn-square mx-1" href="#">
                      <i  className={`${styles["fab fa-facebook-f"></i>
                    </a>
                    <a  className={`${styles["btn btn-outline-light btn-square mx-1" href="#">
                      <i  className={`${styles["fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                <div  className={`${styles["bg-secondary p-4">
                  <h5>Jhon Doe</h5>
                  <p  className={`${styles["m-0"]}">Web Designer</p>
                </div>
              </div>
            </div>
            <div  className={`${styles["col-md-6 col-lg-3 text-center team mb-4">
              <div  className={`${styles["team-item rounded overflow-hidden mb-2">
                <div  className={`${styles["team-img position-relative">
                  <img  className={`${styles["img-fluid" src="img/team-2.jpg" alt="" />
                  <div  className={`${styles["team-social">
                    <a  className={`${styles["btn btn-outline-light btn-square mx-1" href="#">
                      <i  className={`${styles["fab fa-twitter"></i>
                    </a>
                    <a  className={`${styles["btn btn-outline-light btn-square mx-1" href="#">
                      <i  className={`${styles["fab fa-facebook-f"></i>
                    </a>
                    <a  className={`${styles["btn btn-outline-light btn-square mx-1" href="#">
                      <i  className={`${styles["fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                <div  className={`${styles["bg-secondary p-4">
                  <h5>Jhon Doe</h5>
                  <p  className={`${styles["m-0"]}">Web Designer</p>
                </div>
              </div>
            </div>
            <div  className={`${styles["col-md-6 col-lg-3 text-center team mb-4">
              <div  className={`${styles["team-item rounded overflow-hidden mb-2">
                <div  className={`${styles["team-img position-relative">
                  <img  className={`${styles["img-fluid" src="img/team-3.jpg" alt="" />
                  <div  className={`${styles["team-social">
                    <a  className={`${styles["btn btn-outline-light btn-square mx-1" href="#">
                      <i  className={`${styles["fab fa-twitter"></i>
                    </a>
                    <a  className={`${styles["btn btn-outline-light btn-square mx-1" href="#">
                      <i  className={`${styles["fab fa-facebook-f"></i>
                    </a>
                    <a  className={`${styles["btn btn-outline-light btn-square mx-1" href="#">
                      <i  className={`${styles["fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                <div  className={`${styles["bg-secondary p-4">
                  <h5>Jhon Doe</h5>
                  <p  className={`${styles["m-0"]}">Web Designer</p>
                </div>
              </div>
            </div>
            <div  className={`${styles["col-md-6 col-lg-3 text-center team mb-4">
              <div  className={`${styles["team-item rounded overflow-hidden mb-2">
                <div  className={`${styles["team-img position-relative">
                  <img  className={`${styles["img-fluid" src="img/team-4.jpg" alt="" />
                  <div  className={`${styles["team-social">
                    <a  className={`${styles["btn btn-outline-light btn-square mx-1" href="#">
                      <i  className={`${styles["fab fa-twitter"></i>
                    </a>
                    <a  className={`${styles["btn btn-outline-light btn-square mx-1" href="#">
                      <i  className={`${styles["fab fa-facebook-f"></i>
                    </a>
                    <a  className={`${styles["btn btn-outline-light btn-square mx-1" href="#">
                      <i  className={`${styles["fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                <div  className={`${styles["bg-secondary p-4">
                  <h5>Jhon Doe</h5>
                  <p  className={`${styles["m-0"]}">Web Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default StaffMembers;
