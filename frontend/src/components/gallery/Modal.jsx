// import React from "react";
// import "./Modal.css"; // You can style this to make it look nice

// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content ">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Modal;

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="z-50 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white rounded shadow-lg max-h-[calc(100vh-5vh)] max-w-[50%] w-full modal-container">
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
