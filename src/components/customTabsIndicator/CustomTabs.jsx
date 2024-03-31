/* eslint-disable react/prop-types */
export default function CustomTabs({ tabsContent }) {
  return (
    <div>
      {tabsContent.map((tabItem) => (
        <div key={tabItem.label}>{tabItem.label}</div>
      ))}
    </div>
  );
}
