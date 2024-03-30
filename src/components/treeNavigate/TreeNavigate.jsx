/* eslint-disable react/prop-types */
import MenuList from "./MenuList";

export default function TreeNavigate({ menus = [] }) {
  return (
    <div className="container">
      <MenuList list={menus} />
    </div>
  );
}
