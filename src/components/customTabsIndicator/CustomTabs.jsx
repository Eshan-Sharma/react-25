import { useState } from "react";

/* eslint-disable react/prop-types */
export default function CustomTabs({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  function handleOnclick(getIndex) {
    setCurrentTabIndex(getIndex);
    onChange(getIndex);
  }
  return (
    <div className="wrapper p-2">
      <div className="heading mb-3 flex justify-center">
        {tabsContent.map((tabItem, index) => (
          <div
            className={`tab-item ${
              currentTabIndex === index
                ? "bg-green-600 text-white text-lg font-bold px-4 py-2 cursor-pointer"
                : "bg-purple-900 text-white text-lg font-bold px-4 py-2 mr-2 cursor-pointer"
            }`}
            onClick={() => handleOnclick(index)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>

      <div className="content p-4 overflow-auto bg-white">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}
