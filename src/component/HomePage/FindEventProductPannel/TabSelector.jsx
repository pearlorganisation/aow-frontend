const TabSelector = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex flex-row justify-between " style={{ fontFamily: "Marcellus SC"}}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`flex flex-row items-center justify-center mx-1 px-3   text-[#152663] rounded-lg  ${
            activeTab === tab ? " bg-[#1B2032] text-white" : "  bg-[#E6E6E6]"

           
          }    ${ tab==="Car" ? "ml-10" : "" } ` }
        >
          <p className="text-lg font-normal flex items-center justify-center">
            {tab.charAt(0)}
          </p>
          <span className="text-sm">{tab.slice(1)}</span>
        </button>
      ))}
    </div>
  );
};

export default TabSelector;
