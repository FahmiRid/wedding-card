"use client"
import React, { useState, useEffect } from 'react';
import '../styles/Modal.css'
import Image from "next/image";
import Lottie from 'lottie-react';


function Modal({ onClose }) {
    const [isModalOpen, setIsModalOpen] = useState(true);

    useEffect(() => {
        // When the component is mounted, add a small delay to show the modal with animation.
        const timer = setTimeout(() => {
          setIsModalOpen(true);
        }, 100);
        
        // Clear the timeout when the component unmounts to prevent a memory leak.
        return () => clearTimeout(timer);
      }, []);

      const closeModal = () => {
        // Set isModalOpen to false to trigger the closing animation.
        setIsModalOpen(false);
        // Wait for the animation to finish before actually closing the modal.
        setTimeout(() => onClose(), 300); // You can adjust the timing to match the CSS transition duration.
      };
  return (
    <div className={`modal ${isModalOpen ? "active" : ""}`}>
      <div className={`modal-content ${isModalOpen ? "active" : ""}`}>
        {/* Your modal content */}
        <button onClick={closeModal}><Image
            src="/close.png" // Path to your image in the `public` directory
            alt="My Image"
            width={20} // Set the desired width
            height={20}/>
            </button>

      </div>
    </div>
  );
}

export default Modal;
