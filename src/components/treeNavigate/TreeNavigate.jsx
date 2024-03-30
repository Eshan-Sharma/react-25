/* eslint-disable react/prop-types */
import MenuList from "./MenuList";

export default function TreeNavigate({ menus = [] }) {
  return (
    <div className="min-h-screen w-20 bg-cyan-600">
      <MenuList list={menus} />
    </div>
  );
}
