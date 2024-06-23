import React, { useState, useEffect } from "react";
import useFetchData from "../../hooks/useGetAllContact";
import useDeleteContact from "../../hooks/useDeleteContact";
import "./InboxItem.css";

const InboxItems = () => {
  const { data, loading, error, fetchData } = useFetchData();
  const {
    deleteContactById,
    loading: deleteLoading,
    error: deleteError,
  } = useDeleteContact();
  const [selectedEmails, setSelectedEmails] = useState([]); // State to track selected emails
  const [selectedEmail, setSelectedEmail] = useState(null); // State to track selected email

  useEffect(() => {
    // Reset selectedEmails when data changes
    setSelectedEmails([]);
  }, [data]);

  if (loading) {
    return <div>Loading...</div>; // Handle loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Handle error state
  }

  // Function to format createdAt date as "Month Day" (e.g., "Jan 12")
  const formatCreatedAtDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    return `${month} ${day}`;
  };

  // Handle click on an email checkbox to select it
  const handleEmailCheckboxChange = (emailId) => {
    if (selectedEmails.includes(emailId)) {
      setSelectedEmails(selectedEmails.filter((id) => id !== emailId));
    } else {
      setSelectedEmails([...selectedEmails, emailId]);
    }
  };

  // Handle click on an email to select and display details
  const handleEmailClick = (email) => {
    setSelectedEmail(email);
  };

  // Handle click on "Delete" button to delete selected emails
  const handleDeleteSelectedEmails = async () => {
    const success = await deleteContactById(selectedEmails);
    if (success) {
      await fetchData();
      setSelectedEmail(null); // Reset selected email after deletion
    }
  };

  // Handle click on "Go Back" button to return to email list
  const handleGoBack = () => {
    setSelectedEmail(null); // Reset selected email state
  };

  // Render selected email details or list view based on selection
  const renderEmailDetails = () => {
    if (selectedEmail) {
      return (
        <div className="card mb-3">
          <div className="card-body">
            <button className="btn btn-primary mb-3" onClick={handleGoBack}>
              Go Back
            </button>
            <div className="row">
              <div className="col-md-6">
                <h6 className="card-subtitle mb-2 text-muted">Sender Name:</h6>
                <p className="card-text">{selectedEmail.name}</p>
                <h6 className="card-subtitle mb-2 text-muted">Sender Email:</h6>
                <p className="card-text">{selectedEmail.email}</p>
                <h5 className="card-title">Subject:</h5>
                <p className="card-text">{selectedEmail.subject}</p>
                <p className="card-text">
                  <small className="text-muted">
                    Received on {formatCreatedAtDate(selectedEmail.createdAt)}
                  </small>
                </p>
              </div>
              <div className="col-md-6">
                <div className="border border-primary rounded p-3">
                  <h5 className="card-title">Message:</h5>
                  <p className="card-text">{selectedEmail.message}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="row p-4 no-gutters align-items-center">
            <div className="col-sm-12 col-md-6">
              <h4 className="font-light mb-0">
                <i className="ti-email mr-2"></i>
                {data?.length} Total mails
              </h4>
            </div>
            <div className="col-sm-12 col-md-6 d-flex justify-content-end">
              <ul className="list-inline dl mb-0">
                <li className="list-inline-item text-danger">
                  <button
                    className="btn btn-circle btn-danger text-white"
                    onClick={handleDeleteSelectedEmails}
                    disabled={selectedEmails.length === 0}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Responsive layout for small screens */}
          <div className="table-responsive d-md-none">
            {data?.map((email) => (
              <div key={email._id} className="card">
                <div className="card-body py-1">
                  <div className="custom-control custom-checkbox d-flex align-items-center">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id={`checkbox-${email._id}-small`}
                      checked={selectedEmails.includes(email._id)}
                      onChange={() => handleEmailCheckboxChange(email._id)}
                    />
                    <label
                      className="custom-control-label flex-grow-1"
                      htmlFor={`checkbox-${email._id}`}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <span className="text-muted">{email.name}</span>
                          <br />
                          <span className="text-dark">{email.subject}</span>
                        </div>
                        <div className="text-muted">
                          {formatCreatedAtDate(email.createdAt)}
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Table view for medium screens and above */}
          <div className="table-responsive d-none d-md-block">
            <table className="table email-table no-wrap table-hover v-middle mb-0 font-14">
              <tbody>
                {data?.map((email) => (
                  <tr key={email._id}>
                    <td className="pl-3">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id={`checkbox-${email._id}`}
                          checked={selectedEmails.includes(email._id)}
                          onChange={() => handleEmailCheckboxChange(email._id)}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor={`checkbox-${email._id}`}
                        >
                          &nbsp;
                        </label>
                      </div>
                    </td>
                    <td onClick={() => handleEmailClick(email)} className="d-none d-md-table-cell">
                      <i className="fa fa-star text-warning"></i>
                    </td>
                    <td onClick={() => handleEmailClick(email)}>
                      <span className="mb-0 text-muted">{email.name}</span>
                    </td>
                    <td onClick={() => handleEmailClick(email)}>
                      <a className="link" href="#">
                        <span className="text-dark">{email.subject}</span>
                      </a>
                    </td>
                    <td onClick={() => handleEmailClick(email)}>
                      <i className="fa fa-paperclip text-muted"></i>
                    </td>
                    <td onClick={() => handleEmailClick(email)} className="text-muted">
                      {formatCreatedAtDate(email.createdAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  };

  return (
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
                  </ul>
                </div>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade active show"
                    id="inbox"
                    aria-labelledby="inbox-tab"
                    role="tabpanel"
                  >
                    {renderEmailDetails()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InboxItems;
