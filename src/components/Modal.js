// src/components/Modal.js
import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 border border-gray-300 rounded-lg shadow-md relative max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
        >
          <FaTimes size={20} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
