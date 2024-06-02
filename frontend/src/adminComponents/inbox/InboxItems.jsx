import React from "react";
import "./InboxItem.css";

const InboxItems = () => {
  return (
    <>
      <div className="p-4 md:ml-64">
        <div className="py-16 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
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
                <div className="card">
                  <div className="card-body bg-primary text-white mailbox-widget pb-0">
                    <h2 className="text-white pb-3">Your Mailbox</h2>
                    <ul
                      className="nav nav-tabs custom-tab border-bottom-0 mt-4"
                      id="myTab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
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
                        </a>
                      </li>
                      
                      {/* <li className="nav-item">
                        <a
                          className="nav-link"
                          id="delete-tab"
                          data-toggle="tab"
                          aria-controls="delete"
                          href="#delete"
                          role="tab"
                          aria-selected="false"
                        >
                          <span className="d-block d-md-none">
                            <i className="ti-trash"></i>
                          </span>
                          <span className="d-none d-md-block">DELETED</span>
                        </a>
                      </li> */}
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
                        <div className="row p-4 no-gutters align-items-center">
                          <div className="col-sm-12 col-md-6">
                            <h3 className="font-light mb-0">
                              <i className="ti-email mr-2"></i>350 Unread emails
                            </h3>
                          </div>
                          <div className="col-sm-12 col-md-6">
                            <ul className="list-inline dl mb-0 float-left float-md-right">
                              
                              <li className="list-inline-item text-danger">
                                <a href="#">
                                  <button
                                    className="btn btn-circle btn-danger text-white"
                                    href=""
                                  >
                                    <i className="fa fa-trash"></i>
                                  </button>
                                  <span className="ml-2 font-normal text-dark">
                                    Delete
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="table-responsive">
                          <table className="table email-table no-wrap table-hover v-middle mb-0 font-14">
                            <tbody>
                              <tr>
                                <td className="pl-3">
                                  <div className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="cst1"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="cst1"
                                    >
                                      &nbsp;
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  <i className="fa fa-star text-warning"></i>
                                </td>
                                <td>
                                  <span className="mb-0 text-muted">
                                    Hritik Roshan
                                  </span>
                                </td>
                                <td>
                                  <a className="link" href=" ">
                                    <span className="text-dark">
                                      Lorem ipsum perspiciatis-
                                    </span>
                                  </a>
                                </td>
                                <td>
                                  <i className="fa fa-paperclip text-muted"></i>
                                </td>

                                <td className="text-muted">May 13</td>
                              </tr>
                              
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    {/* <div
                      className="tab-pane fade"
                      id="delete"
                      aria-labelledby="delete-tab"
                      role="tabpanel"
                    >
                      <div className="row p-3 text-dark">
                        <div className="col-md-6">
                          <h3 className="font-light">Just do Settings</h3>
                          <h4 className="font-light">
                            you can use it with the small code
                          </h4>
                        </div>
                        <div className="col-md-6 text-right">
                          <p>
                            Donec pede justo, fringilla vel, aliquet nec,
                            vulputate eget, arcu. In enim justo, rhoncus ut,
                            imperdiet a.
                          </p>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InboxItems;
