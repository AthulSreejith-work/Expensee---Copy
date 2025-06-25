import React from "react";
import { FiX } from "react-icons/fi";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl w-full max-w-md shadow-lg relative p-6">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          <FiX size={20} />
        </button>

        {/* Title */}
        {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}

        {/* Content */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
