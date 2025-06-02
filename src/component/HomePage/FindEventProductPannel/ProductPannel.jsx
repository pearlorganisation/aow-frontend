'use client';

import { useState } from 'react';
import TabSelector from './TabSelector';

const ProductsPanel = () => {
  const [activeTab, setActiveTab] = useState('Bike');

  return (
    <div className="w-80 h-52">
      <div className="bg-[#1B2032] text-center text-white font-bold rounded-sm py-1">PRODUCTS</div>
      <div className="px-1 h-full">
        <div className="bg-[#DFDBDB] px-5 flex flex-col h-42 gap-2 py-4">

          <TabSelector tabs={['Bike', 'Car', 'Others']} activeTab={activeTab} onTabChange={setActiveTab} />

          <div className="input-fields flex flex-col md:flex-row gap-2 mt-2 justify-center">
            <input type="text" className="text-black border px-2 py-1 rounded border-black w-32  h-6 text-xs" placeholder="Locations" />
            <input type="text" className="text-black border px-2 py-1 rounded border-black w-32 h-6 text-xs" placeholder="City" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPanel;
