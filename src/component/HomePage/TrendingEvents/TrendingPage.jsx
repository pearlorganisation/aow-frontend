"use client"

import React from 'react';
import TrendingEventCards from './TrendingEventCards';
import { ImFire } from "react-icons/im";


const data = [
  {
    title: "Rally of Indore",
    date: "12-05-2025",
    location: "Sohna Road, Gurgaon, Haryana",
    onRegistration: () => console.log("Registration clicked"),
    onFees: () => console.log("Fees clicked")
  },
  {
    title: "Rally of Delhi",
    date: "15-05-2025",
    location: "Connaught Place, New Delhi",
    onRegistration: () => console.log("Registration clicked"),
    onFees: () => console.log("Fees clicked")
  },
  {
    title: "Rally of Mumbai",
    date: "20-05-2025",
    location: "Marine Drive, Mumbai",
    onRegistration: () => console.log("Registration clicked"),
    onFees: () => console.log("Fees clicked")
  },
  {
    title: "Rally of Bangalore",
    date: "25-05-2025",
    location: "MG Road, Bangalore",
    onRegistration: () => console.log("Registration clicked"),
    onFees: () => console.log("Fees clicked")
  },
];

const TrendingPage = () => {
  return (
    <div className="min-h-screen  p-6">    
        <div className="flex items-center gap-3 mb-8 pl-2">
        <div className="w-6 h-6 text-black   shadow-sm shadow-[#717070] p-6     rounded-full flex items-center justify-center">
          <div  className="text-xs "><ImFire size={25} />
          </div>
        </div>
        <h2 className="text-lg md:text-lg font-bold text-gray-800 uppercase tracking-wider">
          Trending Events
        </h2>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
      {data.map((event, index) => (
        <TrendingEventCards
          key={index}
          title={event.title}
          date={event.date}
          location={event.location}
          onRegistration={event.onRegistration}
          onFees={event.onFees}
        />
      ))}
    </div>
    </div>
  );
};

export default TrendingPage;