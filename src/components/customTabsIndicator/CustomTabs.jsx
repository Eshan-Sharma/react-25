import { useState } from "react";

/* eslint-disable react/prop-types */
export default function CustomTabs({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  function handleOnclick(getIndex) {
    setCurrentTabIndex(getIndex);
    onChange(getIndex);
  }
  return (
    <div>
      {tabsContent.map((tabItem, index) => (
        <div onClick={() => handleOnclick(index)} key={tabItem.label}>
          {tabItem.label}
        </div>
      ))}
      <div className="content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}
