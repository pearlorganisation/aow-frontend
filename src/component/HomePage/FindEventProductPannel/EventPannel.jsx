'use client';

import { useState } from 'react';
import TabSelector from './TabSelector';
import Image from 'next/image';
import { FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';
import { MoveRight } from 'lucide-react';

const EventsPanel = () => {
  const [activeTab, setActiveTab] = useState('Bike');

  return (
    <div className="w-80 h-52 ">
      <div className="bg-[#1B2032] text-center text-white font-bold rounded-sm py-1">EVENTS</div>
      <div className="px-1 h-full">
        <div className="bg-[#DFDBDB] px-5 flex flex-col h-42 gap-2 py-4 ">
          <TabSelector tabs={['Bike', 'Car', 'Others']} activeTab={activeTab} onTabChange={setActiveTab} />

          <div className="flex flex-row gap-2">
            <div className="w-[60%] h-16 relative rounded-2xl">
              <Image src="/HomePage/Car-racing.png" alt="Car racing event" fill className="object-cover rounded-lg" />
            </div>
            <div className="w-[40%] h-16 relative rounded-2xl">
              <Image src="/HomePage/Bike-racing.png" alt="Bike racing event" fill className="object-cover rounded-lg" />
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <button className="flex flex-row text-xs rounded-sm h-6 text-center items-center justify-center gap-1 px-2 bg-[#1B2032] text-white">
              <p className="text-center text-nowrap">select your city</p> <MoveRight />
            </button>

            <div className="location-dropdown flex items-center gap-1">
              <FaMapMarkerAlt className="location-icon text-black " />
             <div className='text-neutral-400 bg-[#E6E6E6] flex flex-row text-center items-center justify-end px-1  gap-1 text-sm rounded-sm'>
             <span  className=''>Gurugram</span>
             <FaChevronDown className="dropdown-icon text-netural-400" />
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPanel;
