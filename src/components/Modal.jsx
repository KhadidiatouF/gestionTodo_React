// components/Modal.jsx
import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
