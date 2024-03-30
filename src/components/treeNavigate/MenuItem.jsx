import MenuList from "./MenuList";

/* eslint-disable react/prop-types */
export default function MenuItem({ item }) {
  return (
    <li className="menu-item-container">
      <p>{item.label}</p>

      {item && item.children && item.children.length > 0 ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
