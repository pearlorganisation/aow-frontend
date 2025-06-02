'use client';

import EventsPanel from "./EventPannel";
import FindPanel from "./FindPannel";
import ProductsPanel from "./ProductPannel";

// import FindPanel from './FindPanel';
// import EventsPanel from './EventsPanel';
// import ProductsPanel from './ProductsPanel';

const FindEventProductPanel = () => {
  return (
    <div className="flex gap-10 justify-center items-center mx-10 ">
      <FindPanel />
      <EventsPanel />
      <ProductsPanel />
    </div>
  );
};

export default FindEventProductPanel;
