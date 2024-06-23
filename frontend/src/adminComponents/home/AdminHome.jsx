import React from "react";
import GalleryPhotos from "../../components/gallery/GalleryPhotos";
import useFetchEvents from "../../hooks/useGetAllEvents";
import useSubscribers from "../../hooks/useGetAllSubscribers";
import usePageView from "../../hooks/usePageView";
import useFetchData from "../../hooks/useGetAllContact";
import toast from "react-hot-toast";

const AdminHome = () => {
  const { views } = usePageView("home");
  const { data, loading: dataLoading, error: dataError } = useFetchData();
  const {
    events,
    loading: eventsLoading,
    error: eventsError,
  } = useFetchEvents();
  const {
    subscribers,
    loading: subLoading,
    error: subError,
  } = useSubscribers();

  const mapEvents = events.slice(-3);
  const mapSubscribers = subscribers.slice(-3);
  const mapMail = data?.slice(-3);

  const subCount = subscribers.length;
  const viewsCount = views / 2;

  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  function convertTo12Hour(time24) {
    const [hours, minutes] = time24.split(":");
    let period = "AM";
    let hours12 = parseInt(hours, 10);
    if (hours12 >= 12) {
      period = "PM";
      if (hours12 > 12) {
        hours12 -= 12;
      }
    }
    if (hours12 === 0) {
      hours12 = 12;
    }
    return `${hours12}:${minutes} ${period}`;
  }

  if (dataError || eventsError || subError) {
    toast.error("Failed to fetch data. Please try again later.");
    console.error("Error fetching data:", dataError || eventsError || subError);
  }

  return (
    <div className="p-4 md:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <div className="grid xl:grid-cols-3 grid-cols-1 gap-4 mb-4">
          {/* Total Views */}
          <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <div className="flex items-center bg-white rounded-sm overflow-hidden">
              <div className="p-4 bg-green-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div className="px-4 text-gray-700">
                <h3 className="text-sm tracking-wider">Total Views</h3>
                <p className="text-3xl">{viewsCount}</p>
              </div>
            </div>
          </div>

          {/* Total Comments */}
          <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <div className="flex items-center bg-white rounded-sm overflow-hidden">
              <div className="p-4 bg-indigo-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <div className="px-4 text-gray-700">
                <h3 className="text-sm tracking-wider">Total Comments</h3>
                <p className="text-3xl">142,334</p>
              </div>
            </div>
          </div>

          {/* Total Subscribes */}
          <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <div className="flex items-center bg-white  rounded-sm overflow-hidden ">
              <div className="p-4 bg-red-400">
                <svg
                  className="w-12 h-12 text-white"
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
              </div>
              <div className="px-4 text-gray-700">
                <h3 className="text-sm tracking-wider">Total Subscribes</h3>
                <p className="text-3xl">{subCount}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Inbox Section */}
        <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
          />

          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <a href="/admin/inbox">
                  <div className="card">
                    <div className="card-body bg-primary text-white mailbox-widget py-0">
                      <ul
                        className="nav nav-tabs custom-tab border-bottom-0"
                        id="myTab"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <div
                            className="nav-link active"
                            id="inbox-tab"
                            data-toggle="tab"
                            aria-controls="inbox"
                            href="#inbox"
                            role="tab"
                            aria-selected="true"
                          >
                            <span className="d-block d-md-none">
                              <i className="ti-email"></i>
                            </span>
                            <span className="d-md-block"> INBOX</span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade active show"
                        id="inbox"
                        aria-labelledby="inbox-tab"
                        role="tabpanel"
                      >
                        <div>
                          <div className="table-responsive">
                            <table className="table email-table no-wrap table-hover v-middle mb-0 font-14">
                              <tbody>
                                {dataLoading ? (
                                  <tr>
                                    <td colSpan="6" className="text-center">
                                      Loading...
                                    </td>
                                  </tr>
                                ) : dataError ? (
                                  <tr>
                                    <td
                                      colSpan="6"
                                      className="text-center text-red-500"
                                    >
                                      Error fetching emails. Please try again.
                                    </td>
                                  </tr>
                                ) : (
                                  mapMail?.map((item) => (
                                    <tr key={item._id}>
                                      <td className="pl-3 md:table-cell hidden">
                                        <div className="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id={`checkbox-${item._id}`}
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor={`checkbox-${item._id}`}
                                          >
                                            &nbsp;
                                          </label>
                                        </div>
                                      </td>
                                      <td className="md:block hidden">
                                        <i className="fa fa-star text-warning"></i>
                                      </td>
                                      <td>
                                        <span className="mb-0 text-muted">
                                          {item.name}
                                        </span>
                                      </td>
                                      <td>
                                        <div className="link">
                                          <span className="text-dark">
                                            {item.subject}{" "}
                                          </span>
                                        </div>
                                      </td>
                                      <td>
                                        <i className="fa fa-paperclip text-muted"></i>
                                      </td>

                                      <td className="text-muted">
                                        {item.createdAt
                                          ? new Date(
                                              item.createdAt
                                            ).toLocaleDateString()
                                          : ""}
                                      </td>
                                    </tr>
                                  ))
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Sections */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* New Subscribers */}
          <div className="self-center justify-center rounded bg-gray-50 h-auto max-h-96 dark:bg-gray-800">
            <a
              href="/admin/subscribers"
              className="no-underline hover:no-underline hover:text-inherit text-inherit"
            >
              <div className="bg-white shadow-md rounded-md my-6 overflow-hidden max-w-xl mx-auto">
                <div className="bg-gray-100 py-2 px-4">
                  <h2 className="text-xl mb-0 font-semibold text-gray-800">
                    New Subscribers
                  </h2>
                </div>
                <ul className="divide-y divide-gray-200 mb-0">
                  {subLoading ? (
                    <li className="flex items-center py-4 px-6">
                      <span className="text-gray-700 text-lg font-medium mr-4">
                        Loading...
                      </span>
                    </li>
                  ) : subError ? (
                    <li className="flex items-center py-4 px-6">
                      <span className="text-red-500 text-lg font-medium mr-4">
                        Error fetching subscribers. Please try again.
                      </span>
                    </li>
                  ) : (
                    mapSubscribers.map((subscriber, index) => (
                      <li key={index} className="flex items-center py-4 px-6">
                        <span className="text-gray-700 text-lg font-medium mr-4">
                          {index + 1}.
                        </span>
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-gray-800">
                            <span className="no-underline hover:no-underline text-inherit">
                              {subscriber.email}
                            </span>
                          </h3>
                        </div>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </a>
          </div>

          {/* New Events */}
          <div className="self-center justify-center rounded bg-gray-50 h-auto max-h-96 dark:bg-gray-800">
            <div className="bg-white shadow-md rounded-md my-6 overflow-hidden max-w-xl mx-auto">
              <a
                href="/admin/events"
                className="no-underline hover:no-underline hover:text-inherit text-inherit"
              >
                <div className="bg-gray-100 py-2 px-4">
                  <h2 className="text-xl mb-0 font-semibold text-gray-800">
                    New Events
                  </h2>
                </div>

                {eventsLoading ? (
                  <div className="text-center py-4">Loading events...</div>
                ) : eventsError ? (
                  <div className="text-center py-4 text-red-500">
                    Error fetching events. Please try again.
                  </div>
                ) : (
                  mapEvents
                    .slice()
                    .reverse()
                    .map((event) => (
                      <div key={event._id} className="w-3/3">
                        <div className="bg-white shadow-lg rounded-lg p-3 flex">
                          <img
                            src={`data:image/jpeg;base64,${arrayBufferToBase64(
                              event.image.data
                            )}`}
                            alt="Event Thumbnail"
                            className="w-14 h-14 object-cover rounded-lg mr-4"
                          />
                          <div>
                            <div className="items-center">
                              <h2 className="text-xl font-semibold">
                                {event.eventName}
                              </h2>
                            </div>
                            <div className="grid grid-cols-2">
                              <p className="mb-0">
                                Start at:{" "}
                                {convertTo12Hour(event.eventStartTime)}
                              </p>
                              <p className="ml-4 mb-0">
                                End at: {convertTo12Hour(event.eventEndTime)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                )}
              </a>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="items-center justify-center h-auto mb-4 pt-1 rounded bg-gray-50 dark:bg-gray-800">
          <a
            href="/admin/gallery"
            className="no-underline hover:no-underline hover:text-inherit text-inherit"
          >
            <GalleryPhotos />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
