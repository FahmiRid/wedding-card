"use client"
import React, { useState, useEffect } from 'react';
import "../styles/admin1.css";
import BottomNavigation from "./BottomNavigation";
import Kad from "../../../public/Kad1.png";
import Image from "next/image";
import Modal from "./Modal";

export default function Admin() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    // When the component is mounted, add a small delay to show the modal with animation.
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 100);

    // Clear the timeout when the component unmounts to prevent a memory leak.
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <BottomNavigation />
      <div className="AppGlass">
        {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
        <div className="kad1">
          <Image
            src="/kad1.png" // Path to your image in the `public` directory
            alt="My Image"
            width={500} // Set the desired width
            height={200} // Set the desired height
          />
          <Image
            src="/kad2.png" // Path to your image in the `public` directory
            alt="My Image"
            width={500} // Set the desired width
            height={200} // Set the desired height
          />
        </div>
      </div>
    </div>
  );
}
