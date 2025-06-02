'use client';

import { useState } from 'react';
import TabSelector from './TabSelector';
import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';

const FindPanel = () => {
  const [activeTab, setActiveTab] = useState('Bike');
  const [buyOption, setBuyOption] = useState('budget');

  return (
    <div className="w-80 h-52 ">
      <div className="bg-[#1B2032] text-center text-white font-bold rounded-sm py-1">FIND</div>
      <div className="px-1 h-full">

      <div className="bg-[#DFDBDB] px-5 flex flex-col gap-2   py-4 text-[#1B2032] h-42">


        <TabSelector tabs={['Bike', 'Car', 'Others']} activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="text-lg flex flex-row justify-between items-center" style={{fontFamily:"Marcellus SC"}}>
          <label className="flex flex-row justify-center items-center gap-1">
            <input
              type="radio"
              name="buyOption"
              checked={buyOption === 'budget'}
              onChange={() => setBuyOption('budget')}
            />
            <span className="text-[#1B2032]">Buy Budget</span>
          </label>

          <label className="flex flex-row justify-center items-center gap-1">
            <input
              type="radio"
              name="buyOption"
              checked={buyOption === 'model'}
              onChange={() => setBuyOption('model')}
            />
            <span className="radio-text">Buy Model</span>
          </label>
        </div>

        <div className="text-xs">SELECT MODEL/BUDGET</div>

        <div className="flex flex-row justify-between items-center">
          <button className="flex flex-row items-center justify-center gap-2 rounded-sm  bg-[#1B2032] text-white px-2">
            Choose <FaArrowRight />
          </button>

          <div className="flex flex-row items-center">
            <FaMapMarkerAlt className="location-icon" />
            <span>Location</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FindPanel;
