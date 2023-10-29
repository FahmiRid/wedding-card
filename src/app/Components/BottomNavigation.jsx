// src/components/BottomNavigation.js
import React from 'react';
import '../styles/BottomNavigation.css';
import Lottie from 'lottie-react'
import Map from '../Assets/map.json'
import Calendar from '../Assets/calendar.json'

function BottomNavigation() {
  return (
    <div className="bottom-navigation">
      <div className="nav-item">
      <Lottie animationData={Map} width={50} height={50} />
      </div>
      <div className="nav-item">
        <Lottie animationData={Calendar}  width={100} height={100}/>
      </div>
      <div className="nav-item">Contact</div>
      <div className="nav-item">Greetings</div>
    </div>
  );
}

export default BottomNavigation;
