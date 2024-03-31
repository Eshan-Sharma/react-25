import CustomTabs from "./CustomTabs";

export default function CustomTabsTest() {
  function RandomComponent() {
    return (
      <div>
        <ul>
          <li>Random list item 1</li>
          <li>Random list item 2</li>
          <li>Random list item 3</li>
        </ul>
      </div>
    );
  }
  const tabs = [
    { label: "Tab 1", content: <div>This is content for tab 1</div> },
    {
      label: "Tab 2",
      content: (
        <div>This is content for tab 2, I guess you know that by now</div>
      ),
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  return <CustomTabs tabsContent={tabs} />;
}
