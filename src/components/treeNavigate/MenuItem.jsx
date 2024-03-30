import { useState } from "react";
import MenuList from "./MenuList";
import { FaMinus, FaPlus } from "react-icons/fa";

/* eslint-disable react/prop-types */
export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
  function handleToggle(getCurrentLevel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLevel]: !displayCurrentChildren[getCurrentLevel],
    });
  }
  return (
    <li>
      <div>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggle(item.label)}>
            {displayCurrentChildren[item.label] ? <FaMinus /> : <FaPlus />}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] == true ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
